$(document).ready(function () {
    $(document).on('click', '.list-search-data .selectable-item', event => {
        event.preventDefault();
        let _self = $(event.currentTarget);
        let $input = _self.closest('.form-group').find('input[type=hidden]');

        let existedValues = [];
        $.each($input.val().split(','), (index, el) => {
            if (el && el !== '') {
                existedValues[index] = parseInt(el);
            }
        });

        if ($.inArray(_self.data('id'), existedValues) < 0) {
            if ($input.val()) {
                $input.val($input.val() + ',' + _self.data('id'));
            } else {
                $input.val(_self.data('id'));
            }

            let template = $(document).find('#selected_product_list_template').html();

            let productItem = template
                .replace(/__name__/gi, _self.data('name'))
                .replace(/__id__/gi, _self.data('id'))
                .replace(/__index__/gi, existedValues.length)
                .replace(/__url__/gi, _self.data('url'))
                .replace(/__image__/gi, _self.data('image'))
                .replace(/__attributes__/gi, _self.find('a span').text());
            _self.closest('.form-group').find('.list-selected-products').removeClass('hidden');
            _self.closest('.form-group').find('.list-selected-products table tbody').append(productItem);
        }
        _self.closest('.panel').addClass('hidden');
    });

    $(document).on('click', '.textbox-advancesearch', event => {
        let _self = $(event.currentTarget);
        let $formBody = _self.closest('.box-search-advance').find('.panel');
        $formBody.removeClass('hidden');
        $formBody.addClass('active');
        if ($formBody.find('.panel-body').length === 0) {
            RealDriss.blockUI({
                target: $formBody,
                iconOnly: true,
                overlayColor: 'none'
            });

            $.ajax({
                url: _self.data('target'),
                type: 'GET',
                success: res => {
                    if (res.error) {
                        RealDriss.showError(res.message);
                    } else {
                        $formBody.html(res.data);
                        RealDriss.unblockUI($formBody);
                    }
                },
                error: data => {
                    RealDriss.handleError(data);
                    RealDriss.unblockUI($formBody);
                },
            });
        }
    });

    $(document).on('keyup', '.textbox-advancesearch', event => {
        let _self = $(event.currentTarget);
        let $formBody = _self.closest('.box-search-advance').find('.panel');
        setTimeout(() => {
            RealDriss.blockUI({
                target: $formBody,
                iconOnly: true,
                overlayColor: 'none'
            });

            $.ajax({
                url: _self.data('target') + '?keyword=' + _self.val(),
                type: 'GET',
                success: res => {
                    if (res.error) {
                        RealDriss.showError(res.message);
                    } else {
                        $formBody.html(res.data);
                        RealDriss.unblockUI($formBody);
                    }
                },
                error: data => {
                    RealDriss.handleError(data);
                    RealDriss.unblockUI($formBody);
                },
            });
        }, 500);
    });

    $(document).on('click', '.box-search-advance .page-link', event => {
        event.preventDefault();
        let _self = $(event.currentTarget);
        if (!_self.closest('.page-item').hasClass('disabled') && _self.prop('href')) {
            let $formBody = _self.closest('.box-search-advance').find('.panel');
            RealDriss.blockUI({
                target: $formBody,
                iconOnly: true,
                overlayColor: 'none'
            });

            $.ajax({
                url: _self.prop('href') + '&keyword=' + _self.val(),
                type: 'GET',
                success: res => {
                    if (res.error) {
                        RealDriss.showError(res.message);
                    } else {
                        $formBody.html(res.data);
                        RealDriss.unblockUI($formBody);
                    }
                },
                error: data => {
                    RealDriss.handleError(data);
                    RealDriss.unblockUI($formBody);
                },
            });
        }
    });

    $(document).on('click', 'body', (e) => {
        let container = $('.box-search-advance');

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.find('.panel').addClass('hidden');
        }
    });

    $(document).on('click', '.btn-trigger-remove-selected-product', event => {
        event.preventDefault();
        let $input = $(event.currentTarget).closest('.form-group').find('input[type=hidden]');

        let existedValues = $input.val().split(',');
        $.each(existedValues, (index, el) => {
            el = el.trim();
            if (!_.isEmpty(el)) {
                existedValues[index] = parseInt(el);
            }
        });
        let index = existedValues.indexOf($(event.currentTarget).data('id'));
        if (index > -1) {
            delete existedValues[index];
        }

        $input.val(existedValues.join(','));

        if ($(event.currentTarget).closest('tbody').find('tr').length < 2) {
            $(event.currentTarget).closest('.list-selected-products').addClass('hidden');
        }
        $(event.currentTarget).closest('tbody').find('tr[data-product-id=' + $(event.currentTarget).data('id') + ']').remove();
    });
});

