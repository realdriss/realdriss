<?php

namespace RealDriss\Backup\Http\Controllers;

use Assets;
use RealDriss\Backup\Http\Requests\BackupRequest;
use RealDriss\Backup\Supports\Backup;
use RealDriss\Base\Http\Controllers\BaseController;
use RealDriss\Base\Http\Responses\BaseHttpResponse;
use RealDriss\Base\Supports\Helper;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BackupController extends BaseController
{

    /**
     * @var Backup
     */
    protected $backup;

    /**
     * BackupController constructor.
     * @param Backup $backup
     */
    public function __construct(Backup $backup)
    {
        $this->backup = $backup;
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function getIndex()
    {
        page_title()->setTitle(trans('plugins/backup::backup.menu_name'));

        Assets::addScriptsDirectly(['vendor/core/plugins/backup/js/backup.js'])
            ->addStylesDirectly(['vendor/core/plugins/backup/css/backup.css']);

        $backupManager = $this->backup;

        $backups = $this->backup->getBackupList();
        
        return view('plugins/backup::index', compact('backups', 'backupManager'));
    }

    /**
     * @param BackupRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     * @throws \Throwable
     */
    public function store(BackupRequest $request, BaseHttpResponse $response)
    {
        try {
            $data = $this->backup->createBackupFolder($request->input('name'), $request->input('description'));
            $this->backup->backupDb();
            $this->backup->backupFolder(config('filesystems.disks.public.root'));
            do_action(BACKUP_ACTION_AFTER_BACKUP, BACKUP_MODULE_SCREEN_NAME, $request);

            $data['backupManager'] = $this->backup;

            return $response
                ->setData(view('plugins/backup::partials.backup-item', $data)->render())
                ->setMessage(trans('plugins/backup::backup.create_backup_success'));
        } catch (Exception $exception) {
            return $response
                ->setError()
                ->setMessage($exception->getMessage());
        }
    }

    /**
     * @param string $folder
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function destroy($folder, BaseHttpResponse $response)
    {
        try {
            $this->backup->deleteFolderBackup($this->backup->getBackupPath($folder));

            return $response->setMessage(trans('plugins/backup::backup.delete_backup_success'));
        } catch (Exception $exception) {
            return $response
                ->setError()
                ->setMessage($exception->getMessage());
        }
    }

    /**
     * @param string $folder
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function getRestore($folder, Request $request, BaseHttpResponse $response)
    {
        try {
            $path = $this->backup->getBackupPath($folder);
            foreach (scan_folder($path) as $file) {
                if (Str::contains(basename($file), 'database')) {
                    $this->backup->restoreDatabase($path . DIRECTORY_SEPARATOR . $file, $path);
                }

                if (Str::contains(basename($file), 'storage')) {
                    $pathTo = config('filesystems.disks.public.root');
                    $this->backup->cleanDirectory($pathTo);
                    $this->backup->extractFileTo($path . DIRECTORY_SEPARATOR . $file, $pathTo);
                }
            }

            Helper::clearCache();

            do_action(BACKUP_ACTION_AFTER_RESTORE, BACKUP_MODULE_SCREEN_NAME, $request);

            return $response->setMessage(trans('plugins/backup::backup.restore_backup_success'));
        } catch (Exception $exception) {
            return $response
                ->setError()
                ->setMessage($exception->getMessage());
        }
    }

    /**
     * @param string $folder
     * @return BaseHttpResponse|\Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function getDownloadDatabase($folder, BaseHttpResponse $response)
    {
        $path = $this->backup->getBackupPath($folder);
        foreach (scan_folder($path) as $file) {
            if (Str::contains(basename($file), 'database')) {
                return response()->download($path . DIRECTORY_SEPARATOR . $file);
            }
        }

        return $response
            ->setError()
            ->setMessage(trans('plugins/backup::backup.database_backup_not_existed'));
    }

    /**
     * @param string $folder
     * @return bool|BaseHttpResponse|\Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function getDownloadUploadFolder($folder, BaseHttpResponse $response)
    {
        $path = $this->backup->getBackupPath($folder);
        foreach (scan_folder($path) as $file) {
            if (Str::contains(basename($file), 'storage')) {
                return response()->download($path . DIRECTORY_SEPARATOR . $file);
            }
        }

        return $response
            ->setError()
            ->setMessage(trans('plugins/backup::backup.uploads_folder_backup_not_existed'));
    }
}
