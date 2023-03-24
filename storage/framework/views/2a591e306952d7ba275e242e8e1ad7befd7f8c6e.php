<?php Theme::set('pageName', $page->name) ?>

<div id="app">
    <?php if($page->template === 'homepage'): ?>
        <?php echo apply_filters(PAGE_FILTER_FRONT_PAGE_CONTENT, clean($page->content, 'youtube'), $page); ?>

    <?php else: ?>
        <div class="section">
            <div class="container">
                <?php echo apply_filters(PAGE_FILTER_FRONT_PAGE_CONTENT, clean($page->content, 'youtube'), $page); ?>

            </div>
        </div>
    <?php endif; ?>
</div>
<?php /**PATH C:\xampp\htdocs\projects\realdriss-hook\core\platform/themes/shopwise/views/page.blade.php ENDPATH**/ ?>