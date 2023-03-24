<?php if($posts->count() > 0): ?>
    <div class="scroller">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th><?php echo e(trans('core/base::tables.name')); ?></th>
                <th><?php echo e(trans('core/base::tables.created_at')); ?></th>
            </tr>
            </thead>
            <tbody>
            <?php $__currentLoopData = $posts; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $post): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <td><?php echo e($loop->index + 1); ?></td>
                    <td><?php if($post->slug): ?> <a href="<?php echo e($post->url); ?>" target="_blank"><?php echo e(Str::limit($post->name, 80)); ?></a> <?php else: ?> <strong><?php echo e(Str::limit($post->name, 80)); ?></strong> <?php endif; ?></td>
                    <td><?php echo e(BaseHelper::formatDate($post->created_at, 'd-m-Y')); ?></td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </tbody>
        </table>
    </div>
    <?php if($posts instanceof Illuminate\Pagination\LengthAwarePaginator && $posts->total() > $limit): ?>
        <div class="widget_footer">
            <?php echo $__env->make('core/dashboard::partials.paginate', ['data' => $posts, 'limit' => $limit], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
        </div>
    <?php endif; ?>
<?php else: ?>
    <?php echo $__env->make('core/dashboard::partials.no-data', ['message' => trans('plugins/blog::posts.no_new_post_now')], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php endif; ?>
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/plugins/blog/resources/views//posts/widgets/posts.blade.php ENDPATH**/ ?>