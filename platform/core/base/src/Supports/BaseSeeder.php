<?php

namespace RealDriss\Base\Supports;

use RealDriss\Media\Models\MediaFile;
use RealDriss\Media\Models\MediaFolder;
use RealDriss\Media\Models\MediaSetting;
use RealDriss\Setting\Models\Setting;
use RealDriss\PluginManagement\Services\PluginService;
use Exception;
use File;
use Illuminate\Database\Seeder;
use Mimey\MimeTypes;
use RvMedia;


class BaseSeeder extends Seeder
{
    /**
     * @param string $folder
     * @param null|string $basePath
     * @return array
     */
    public function uploadFiles(string $folder, $basePath = null): array
    {
        File::deleteDirectory(config('filesystems.disks.public.root') . '/' . $folder);
        MediaFile::where('url', 'LIKE', $folder . '/%')->forceDelete();
        MediaFolder::where('name', $folder)->forceDelete();

        $mimeType = new MimeTypes;

        $files = [];

        $folderPath = ($basePath ?: database_path('seeders/files')) . '/' . $folder;

        foreach (File::allFiles($folderPath) as $file) {
            $type = $mimeType->getMimeType(File::extension($file));
            $files[] = RvMedia::uploadFromPath($file, 0, $folder, $type);
        }

        return $files;
    }

    /**
     * @return array
     * @throws Exception
     */
    public function activateAllPlugins(): array
    {
        $plugins = array_values(scan_folder(plugin_path()));

        $pluginService = app(PluginService::class);

        foreach ($plugins as $plugin) {
            $pluginService->activate($plugin);
        }

        return $plugins;
    }

    public function truncateKeyTables(): void
    {
        MediaFolder::truncate();
        MediaFile::truncate();
        MediaSetting::truncate();
        Setting::truncate();

    }
}
