<?php

namespace RealDriss\Media\Providers;

use Aws\S3\S3Client;

// SO RealDriss namespaced classes.
use RealDriss\Base\Supports\Helper;
use RealDriss\Base\Traits\LoadAndPublishDataTrait;
use RealDriss\Media\Chunks\Storage\ChunkStorage;
use RealDriss\Media\Commands\ClearChunksCommand;
use RealDriss\Media\Commands\DeleteThumbnailCommand;
use RealDriss\Media\Commands\GenerateThumbnailCommand;
use RealDriss\Media\Facades\RvMediaFacade;
use RealDriss\Media\Models\MediaFile;
use RealDriss\Media\Models\MediaFolder;
use RealDriss\Media\Models\MediaSetting;
use RealDriss\Media\Repositories\Caches\MediaFileCacheDecorator;
use RealDriss\Media\Repositories\Caches\MediaFolderCacheDecorator;
use RealDriss\Media\Repositories\Caches\MediaSettingCacheDecorator;
use RealDriss\Media\Repositories\Eloquent\MediaFileRepository;
use RealDriss\Media\Repositories\Eloquent\MediaFolderRepository;
use RealDriss\Media\Repositories\Eloquent\MediaSettingRepository;
use RealDriss\Media\Repositories\Interfaces\MediaFileInterface;
use RealDriss\Media\Repositories\Interfaces\MediaFolderInterface;
use RealDriss\Media\Repositories\Interfaces\MediaSettingInterface;
use RealDriss\Setting\Supports\SettingStore;
// EO RealDriss namespaced classes.

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Routing\Events\RouteMatched;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\ServiceProvider;
use League\Flysystem\AwsS3v3\AwsS3Adapter;
use League\Flysystem\Filesystem;

/**
 * @since 02/07/2016 09:50 AM
 */
class MediaServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        Helper::autoload(__DIR__ . '/../../helpers');

        $this->app->bind(MediaFileInterface::class, function () {
            return new MediaFileCacheDecorator(
                new MediaFileRepository(new MediaFile),
                MEDIA_GROUP_CACHE_KEY
            );
        });

        $this->app->bind(MediaFolderInterface::class, function () {
            return new MediaFolderCacheDecorator(
                new MediaFolderRepository(new MediaFolder),
                MEDIA_GROUP_CACHE_KEY
            );
        });

        $this->app->bind(MediaSettingInterface::class, function () {
            return new MediaSettingCacheDecorator(
                new MediaSettingRepository(new MediaSetting)
            );
        });

        AliasLoader::getInstance()->alias('RvMedia', RvMediaFacade::class);
    }

    public function boot()
    {
        $this->setNamespace('core/media')
            ->loadAndPublishConfigurations(['permissions', 'media'])
            ->loadMigrations()
            ->loadAndPublishTranslations()
            ->loadAndPublishViews()
            ->loadRoutes()
            ->publishAssets();

        Storage::extend('wasabi', function ($app, $config) {
            $conf = [
                'endpoint'        => 'https://' . $config['bucket'] . '.s3.' . $config['region'] . '.wasabisys.com/',
                'bucket_endpoint' => true,
                'credentials'     => [
                    'key'    => $config['key'],
                    'secret' => $config['secret'],
                ],
                'region'          => $config['region'],
                'version'         => 'latest',
            ];

            $client = new S3Client($conf);

            $adapter = new AwsS3Adapter($client, $config['bucket'], $config['root']);

            $filesystem = new Filesystem($adapter);

            return $filesystem;
        });

        $config = $this->app->make('config');
        $setting = $this->app->make(SettingStore::class);

        $config->set([
            'filesystems.default'                  => $setting->get('media_driver', 'public'),
            'filesystems.disks.s3.key'             => $setting
                ->get('media_aws_access_key_id', $config->get('filesystems.disks.s3.key')),
            'filesystems.disks.s3.secret'          => $setting
                ->get('media_aws_secret_key', $config->get('filesystems.disks.s3.secret')),
            'filesystems.disks.s3.region'          => $setting
                ->get('media_aws_default_region', $config->get('filesystems.disks.s3.region')),
            'filesystems.disks.s3.bucket'          => $setting
                ->get('media_aws_bucket', $config->get('filesystems.disks.s3.bucket')),
            'filesystems.disks.s3.url'             => $setting
                ->get('media_aws_url', $config->get('filesystems.disks.s3.url')),
            'filesystems.disks.do_spaces'          => [
                'driver'     => 's3',
                'visibility' => 'public',
                'key'        => $setting->get('media_do_spaces_access_key_id'),
                'secret'     => $setting->get('media_do_spaces_secret_key'),
                'region'     => $setting->get('media_do_spaces_default_region'),
                'bucket'     => $setting->get('media_do_spaces_bucket'),
                'endpoint'   => $setting->get('media_do_spaces_endpoint'),
            ],
            'filesystems.disks.wasabi'             => [
                'driver'     => 'wasabi',
                'visibility' => 'public',
                'key'        => $setting->get('media_wasabi_access_key_id'),
                'secret'     => $setting->get('media_wasabi_secret_key'),
                'region'     => $setting->get('media_wasabi_default_region'),
                'bucket'     => $setting->get('media_wasabi_bucket'),
                'root'       => $setting->get('media_wasabi_root', '/'),
            ],
            'core.media.media.chunk.enabled'       => (bool)$setting->get('media_chunk_enabled',
                $config->get('core.media.media.chunk.enabled')),
            'core.media.media.chunk.chunk_size'    => (int)$setting->get('media_chunk_size',
                $config->get('core.media.media.chunk.chunk_size')),
            'core.media.media.chunk.max_file_size' => (int)$setting->get('media_max_file_size',
                $config->get('core.media.media.chunk.max_file_size')),
        ]);

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()->registerItem([
                'id'          => 'cms-core-media',
                'priority'    => 995,
                'parent_id'   => null,
                'name'        => 'core/media::media.menu_name',
                'icon'        => 'far fa-images',
                'url'         => route('media.index'),
                'permissions' => ['media.index'],
            ]);
        });

        $this->commands([
            GenerateThumbnailCommand::class,
            DeleteThumbnailCommand::class,
            ClearChunksCommand::class,
        ]);

        $this->app->booted(function () {
            if ($this->app->make('config')->get('core.media.media.chunk.clear.schedule.enabled')) {
                $schedule = $this->app->make(Schedule::class);

                $schedule->command('cms:media:chunks:clear')
                    ->cron($this->app->make('config')->get('core.media.media.chunk.clear.schedule.cron'));
            }
        });

        $this->app->singleton(ChunkStorage::class, function () {
            return new ChunkStorage;
        });
    }
}
