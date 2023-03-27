<span class="log-icon log-icon-<?php echo e($history->type); ?>"></span>
<span>
    <?php if($history->user->id): ?>
        <a href="<?php echo e(route('users.profile.view', $history->user->id)); ?>" class="d-inline-block"><?php echo e($history->user->name); ?></a>
    <?php else: ?>
        <span class="d-inline-block"><?php echo e(trans('plugins/audit-log::history.system')); ?></span>
    <?php endif; ?>
    <span class="d-inline-block">
        <?php if(Lang::has('plugins/audit-log::history.' . $history->action)): ?> <?php echo e(trans('plugins/audit-log::history.' . $history->action)); ?> <?php else: ?> <?php echo e($history->action); ?> <?php endif; ?>
    </span>
    <?php if($history->module): ?>
        <span class="d-inline-block">
            <?php if(Lang::has('plugins/audit-log::history.' . $history->module)): ?> <?php echo e(trans('plugins/audit-log::history.' . $history->module)); ?> <?php else: ?> <?php echo e($history->module); ?> <?php endif; ?>
        </span>
    <?php endif; ?>
    <?php if($history->reference_name): ?>
        <?php if(empty($history->user) || $history->user->name != $history->reference_name): ?>
            <span class="d-inline-block">
                "<?php echo e(Str::limit($history->reference_name, 40)); ?>"
            </span>
        <?php endif; ?>
    <?php endif; ?>
    .
</span>
<span class="small italic d-inline-block"><?php echo e($history->created_at->diffForHumans()); ?> </span>
<span class="d-inline-block">(<a href="https://whatismyipaddress.com/ip/<?php echo e($history->ip_address); ?>" target="_blank" title="<?php echo e($history->ip_address); ?>" rel="nofollow"><?php echo e($history->ip_address); ?></a>)</span>
<?php /**PATH C:\xampp\htdocs\realdriss-hook\core\platform/plugins/audit-log/resources/views//activity-line.blade.php ENDPATH**/ ?>