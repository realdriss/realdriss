<?php

namespace RealDriss\Media\Commands;

use RealDriss\Media\Repositories\Interfaces\MediaFileInterface;
use Exception;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
use RvMedia;

class GenerateThumbnailCommand extends Command
{
    /**
     * The console command signature.
     *
     * @var string
     */
    protected $signature = 'cms:media:thumbnail:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate thumbnails for images';

    /**
     * @var MediaFileInterface
     */
    protected $fileRepository;

    /**
     * GenerateThumbnailCommand constructor.
     * @param MediaFileInterface $fileRepository
     */
    public function __construct(MediaFileInterface $fileRepository)
    {
        parent::__construct();
        $this->fileRepository = $fileRepository;
    }

    /**
     * @return int
     */
    public function handle()
    {
        $this->info('Starting to generate thumbnails...');

        $files = $this->fileRepository->allBy([], [], ['url', 'mime_type']);

        $this->info('Processing ' . $files->count() . ' ' . Str::plural('file', $files->count()) . '...');

        $errors = [];



        $number = 1;
        foreach ($files as $file) {
            try {
                RvMedia::generateThumbnails($file);
                $this->info('Done generating thumb '. $number. '! ');
            } catch (Exception $exception) {
                $errors[] = $file->url;
                $this->error($exception->getMessage());
            }
            $number ++;
        }

        $this->info('Generated all media thumbnails successfully!');

        $errors = array_unique($errors);

        $errors = array_map(function ($item) {
            return [$item];
        }, $errors);

        if ($errors) {
            $this->info('We are unable to regenerate thumbnails for these files:');

            $this->table(['File directory'], $errors);

            return 1;
        }

        return 0;
    }
}
