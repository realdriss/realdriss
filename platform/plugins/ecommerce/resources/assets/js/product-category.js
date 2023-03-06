!(function ($) {
    $.fn.filetree = function (i) {
        var options = {
                animationSpeed: 'slow',
            console: false
        };

        function init(i) {
            i = $.extend(options, i);
            return this.each(function () {
                $(this)
                    .find('li')
                    .on('click', '.file-opener-i', function (e) {
                        return (
                            e.preventDefault(),
                                $(this).hasClass('fa-plus-square')
                                    ? ($(this).addClass('fa-minus-square'),
                                        $(this).removeClass('fa-plus-square'))
                                    : ($(this).addClass('fa-plus-square'),
                                        $(this).removeClass('fa-minus-square')),
                                $(this)
                                    .parent()
                                    .toggleClass('closed')
                                    .toggleClass('open'),
                                !1
                        );
                    });
            });
        }

        if ('object' == typeof i || !i) {
            return init.apply(this, arguments);
        }

        e.on('error', function () {
        });
    };
})(jQuery);

(function ($) {
    $.fn.dragScroll = function (options) {
        function init() {
            const $el = $(this);
            let settings = $.extend(
                {
                    scrollVertical: false,
                    scrollHorizontal: true,
                    cursor: null
                },
                options
            );

            let clicked = false,
                clickY,
                clickX;

            let getCursor = function () {
                if (settings.cursor) return settings.cursor;
                if (settings.scrollVertical && settings.scrollHorizontal)
                    return 'move';
                if (settings.scrollVertical) return 'row-resize';
                if (settings.scrollHorizontal) return 'col-resize';
            };

            let updateScrollPos = function (e, el) {
                let $el = $(el);
                settings.scrollVertical &&
                $el.scrollTop($el.scrollTop() + (clickY - e.pageY));
                settings.scrollHorizontal &&
                $el.scrollLeft($el.scrollLeft() + (clickX - e.pageX));
            };
            $el.on({
                mousemove: function (e) {
                    clicked && updateScrollPos(e, this);
                },
                mousedown: function (e) {
                    $el.css('cursor', getCursor());
                    clicked = true;
                    clickY = e.pageY;
                    clickX = e.pageX;
                },
                mouseup: function () {
                    clicked = false;
                    $el.css('cursor', 'auto');
                },
                mouseleave: function () {
                    clicked = false;
                    $el.css('cursor', 'auto');
                }
            });
        }

        if ('object' == typeof options || !options) {
            return init.apply(this, arguments);
        }
    };
})(jQuery);

$(() => {
    $('.file-tree-wrapper').dragScroll();

    const $formLoading = $('.tree-form-container').find('.tree-loading');
    const $treeLoading = $('.tree-categories-container').find('.tree-loading');

    function loadTree() {
        $treeLoading.removeClass('d-none');
        $('.file-tree-wrapper')
            .filetree()
            .removeClass('d-none')
            .hide()
            .slideDown('slow');
        $treeLoading.addClass('d-none');
    }

    loadTree();

    function reloadForm(data) {
        $('.tree-form-body').html(data);
        Botble.initResources();
        Botble.handleCounterUp();
        Botble.initMediaIntegrate();
        new EditorManagement().init();
    }

    $(document).on('click', '.tree-categories-container .toggle-tree', function (e) {
        const $this = $(e.currentTarget);
        if ($this.hasClass('open-tree')) {
            $this.text($this.data('collapse'));
            $('.tree-categories-container')
                .find('.folder-root.closed')
                .removeClass('closed')
                .addClass('open');
        } else {
            $this.text($this.data('expand'));
            $('.tree-categories-container')
                .find('.folder-root.open')
                .removeClass('open')
                .addClass('closed');
        }
        $this.toggleClass('open-tree');
    });

    $(document).on('click', '.file-tree-wrapper .fetch-data', function (e) {
        e.preventDefault();
        const $this = $(e.currentTarget);
        if ($this.attr('href')) {
            $.ajax({
                url: $this.attr('href'),
                type: 'GET',
                beforeSend: () => {
                    $formLoading.removeClass('d-none');
                    $('.file-tree-wrapper')
                        .find('a.active')
                        .removeClass('active');
                    $this.addClass('active');
                },
                success: data => {
                    if (data.error) {
                        Botble.showError(data.message);
                    } else {
                        reloadForm(data.data);
                    }
                },
                error: data => {
                    Botble.handleError(data);
                },
                complete: () => {
                    $formLoading.addClass('d-none');
                }
            });
        } else {
            $('.file-tree-wrapper').find('a.active').removeClass('active');
            $this.addClass('active');
        }
    });

    $(document).on('click', '.tree-categories-create', (e) => {
        e.preventDefault();
        const $this = $(e.currentTarget);
        loadCreateForm($this.attr('href'));
    })

    function loadCreateForm(url) {
        $.ajax({
            url: url,
            type: 'GET',
            beforeSend: () => {
                $formLoading.removeClass('d-none');
            },
            success: data => {
                if (data.error) {
                    Botble.showError(data.message);
                } else {
                    reloadForm(data.data);
                }
            },
            error: data => {
                Botble.handleError(data);
            },
            complete: () => {
                $formLoading.addClass('d-none');
            }
        });
    }

    function reloadTree() {
        const $tree = $('.file-tree-wrapper');
        $.ajax({
            url: $tree.data('url'),
            type: 'GET',
            success: data => {
                if (data.error) {
                    Botble.showError(data.message);
                } else {
                    $tree.html(data.data);
                    loadTree();
                    if (jQuery().tooltip) {
                        $('[data-toggle="tooltip"]').tooltip({
                            placement: 'top',
                            boundary: 'window'
                        });
                    }
                }
            },
            error: data => {
                Botble.handleError(data);
            }
        });
    }

    $(document).on('submit', '.tree-form-container form', e => {
        e.preventDefault();
        const $form = $(e.currentTarget);
        const formData = $form.serializeArray();
        const submitter = e.originalEvent?.submitter;
        if (submitter && submitter.name) {
            formData.push({name: submitter.name, value: submitter.value});
        }
        $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method') || 'POST',
            data: formData,
            beforeSend: () => {
                $formLoading.removeClass('d-none');
            },
            success: data => {
                if (data.error) {
                    Botble.showError(data.message);
                } else {
                    Botble.showSuccess(data.message);
                    reloadTree();
                    if (data.data) {
                        reloadForm(data.data.form);
                    }
                }
            },
            error: data => {
                Botble.handleError(data);
            },
            complete: () => {
                $formLoading.addClass('d-none');
            }
        });
    });

    $(document).on('click', '.deleteDialog', event => {
        event.preventDefault();
        let _self = $(event.currentTarget);

        $('.delete-crud-entry').data('section', _self.data('section'));
        $('.modal-confirm-delete').modal('show');
    });

    $('.delete-crud-entry').on('click', event => {
        event.preventDefault();
        let _self = $(event.currentTarget);

        _self.addClass('button-loading');

        let deleteURL = _self.data('section');

        $.ajax({
            url: deleteURL,
            type: 'DELETE',
            success: data => {
                if (data.error) {
                    Botble.showError(data.message);
                } else {
                    Botble.showSuccess(data.message);
                    reloadTree();
                    if ($('.tree-categories-create').length) {
                        $('.tree-categories-create').trigger('click');
                    }
                }

                _self.closest('.modal').modal('hide');
                _self.removeClass('button-loading');
            },
            error: data => {
                Botble.handleError(data);
                _self.removeClass('button-loading');
            }
        });
    });
});
