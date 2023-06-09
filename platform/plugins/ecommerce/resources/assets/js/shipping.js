class ShippingManagement {
    init() {
        $(document).on('click', '.btn-trigger-show-shipping-detail', event => {
            event.preventDefault();
            $(event.currentTarget).closest('.table').find('.shipping-detail-information').find('.panel').toggleClass('hidden');
        });

        $(document).on('click', '.click-cancel', event => {
            event.preventDefault();
            $(event.currentTarget).closest('.table').find('.shipping-detail-information').find('.panel').toggleClass('hidden');
        });

        $(document).on('click', '.btn-confirm-delete-region-item-modal-trigger', event => {
            event.preventDefault();
            let $modal = $('#confirm-delete-region-item-modal');
            $modal.find('.region-item-label').text($(event.currentTarget).data('name'));
            $modal.find('#confirm-delete-region-item-button').data('id', $(event.currentTarget).data('id'));
            $modal.modal('show');
        });

        $(document).on('click', '#confirm-delete-region-item-button', event => {
            event.preventDefault();
            let _self = $(event.currentTarget);
            _self.addClass('button-loading');

            $.ajax({
                type: 'DELETE',
                url: $('div[data-delete-region-item-url]').data('delete-region-item-url'),
                data: {
                    id: _self.data('id')
                },
                success: res => {
                    if (!res.error) {
                        $('.wrap-table-shipping-' + _self.data('id')).remove();
                        RealDriss.showSuccess(res.message);
                    } else {
                        RealDriss.showError(res.message);
                    }
                    _self.removeClass('button-loading');
                    $('#confirm-delete-region-item-modal').modal('hide');
                },
                error: error => {
                    RealDriss.handleError(error);
                    _self.removeClass('button-loading');
                }
            });
        });

        $(document).on('click', '.btn-confirm-delete-price-item-modal-trigger', event => {
            event.preventDefault();
            let $modal = $('#confirm-delete-price-item-modal');
            $modal.find('.region-price-item-label').text($(event.currentTarget).data('name'));
            $modal.find('#confirm-delete-price-item-button').data('id', $(event.currentTarget).data('id'));
            $modal.modal('show');
        });

        $(document).on('click', '#confirm-delete-price-item-button', event => {
            event.preventDefault();
            let _self = $(event.currentTarget);
            _self.addClass('button-loading');

            $.ajax({
                type: 'DELETE',
                url: $('div[data-delete-rule-item-url]').data('delete-rule-item-url'),
                data: {
                    id: _self.data('id')
                },
                success: res => {
                    if (!res.error) {
                        $('.box-table-shipping-item-' + _self.data('id')).remove();
                        if (res.data.count === 0) {
                            $('.wrap-table-shipping-' + res.data.shipping_id).remove();
                        }
                        RealDriss.showSuccess(res.message);
                    } else {
                        RealDriss.showError(res.message);
                    }
                    _self.removeClass('button-loading');
                    $('#confirm-delete-price-item-modal').modal('hide');
                },
                error: error => {
                    RealDriss.handleError(error);
                    _self.removeClass('button-loading');
                }
            });
        });

        let saveRuleItem = ($this, $form, method, shippingId) => {

            $(document).find('.field-has-error').removeClass('field-has-error');
            let _self = $this;
            _self.addClass('button-loading');

            let formData = [];
            $.each($form.serializeArray(), (index, el) => {
                if (el.name === 'from' || el.name === 'to' || el.name === 'price') {
                    if (el.value) {
                        el.value = parseFloat(el.value.replace(',', '')).toFixed(2);
                    }
                }
                formData[el.name] = el.value;
            });

            if (shippingId) {
                formData['shipping_id'] = shippingId;
            }

            formData = $.extend({}, formData);

            $.ajax({
                type: method,
                url: $form.prop('action'),
                data: formData,
                success: res => {
                    if (!res.error) {
                        RealDriss.showSuccess(res.message);
                        if (shippingId && res.data) {
                            $('.wrap-table-shipping-' + shippingId + ' .pd-all-20.border-bottom').append(res.data);
                            RealDriss.initResources();
                        }
                    } else {
                        RealDriss.showError(res.message);
                    }

                    if (shippingId) {
                        _self.closest('.modal').modal('hide');
                    }
                    _self.removeClass('button-loading');
                },
                error: error => {
                    RealDriss.handleError(error);
                    _self.removeClass('button-loading');
                }
            });
        };

        $(document).on('click', '.btn-save-rule', event => {
            event.preventDefault();
            saveRuleItem($(event.currentTarget), $(event.currentTarget).closest('form'), 'PUT', null);
        });

        $(document).on('change', '.select-rule-type', event => {
            event.preventDefault();
            let _self = $(event.currentTarget);

            _self.closest('.box-table-shipping').find('.unit-item-price-label').toggleClass('hidden');
            _self.closest('.box-table-shipping').find('.unit-item-label').text($(event.currentTarget).find('option:selected').data('unit'));
            _self.closest('.box-table-shipping').find('.rule-from-to-label').text($(event.currentTarget).find('option:selected').data('text'));
        });

        $(document).on('click', '.btn-connect-shipping-provider', event => {
            event.preventDefault();
            $(event.currentTarget).closest('.wrapper-content').find('.sub-card').removeClass('hidden');
            $(event.currentTarget).addClass('hidden');
        });

        $(document).on('click', '.btn-close-shipping-detail', event => {
            event.preventDefault();
            $(event.currentTarget).closest('.sub-card').addClass('hidden');
            $('.carrier-info .btn-connect-shipping-provider').removeClass('hidden');
        });

        $('.save-shipping-item').off('click').on('click', event => {
            event.preventDefault();
            let _self = $(event.currentTarget);
            _self.addClass('button-loading');
            $.ajax({
                type: 'POST',
                cache: false,
                url: _self.closest('form').prop('action'),
                data: _self.closest('form').serialize(),
                success: res => {
                    if (!res.error) {
                        $('.btn-secondary.btn-connect-shipping-provider').addClass('hidden');
                        $('.btn-trigger-delete-shipping-method-item-modal').removeClass('hidden');
                        RealDriss.showSuccess(res.message);
                    } else {
                        RealDriss.showError(res.message);
                    }
                    _self.removeClass('button-loading');
                },
                error: res => {
                    RealDriss.handleError(res);
                    _self.removeClass('button-loading');
                }
            });
        });

        $(document).on('click', '.btn-trigger-delete-shipping-method-item-modal', event => {
            event.preventDefault();
            $('#confirm-delete-shipping-method-item-button').data('type', $(event.currentTarget).data('type'));
            $('.shipping-method-item-label').text($(event.currentTarget).data('text'));
            $('#confirm-delete-shipping-method-item-modal').modal('show');
        });

        $(document).on('click', '#confirm-delete-shipping-method-item-button', event => {
            event.preventDefault();
            let _self = $(event.currentTarget);
            _self.addClass('button-loading');

            $.ajax({
                type: 'DELETE',
                url: $('div[data-delete-shipping-method-item-url]').data('delete-shipping-method-item-url'),
                data: {
                    type: _self.data('type')
                },
                success: res => {
                    if (!res.error) {
                        let $current_block = $('#block-' + _self.data('type'));
                        $current_block.find('.btn-connect-shipping-provider').addClass('hidden');
                        $current_block.find('.btn-secondary.btn-connect-shipping-provider').removeClass('hidden');
                        $current_block.find('.btn-trigger-delete-shipping-method-item-modal').addClass('hidden');
                        $current_block.find('.sub-card').addClass('hidden');
                        RealDriss.showSuccess(res.message);
                    } else {
                        RealDriss.showError(res.message);
                    }
                    _self.removeClass('button-loading');
                    $('#confirm-delete-shipping-method-item-modal').modal('hide');
                },
                error: error => {
                    RealDriss.handleError(error);
                    _self.removeClass('button-loading');
                }
            });
        });

        $(document).on('keyup', '.input-sync-item', event => {
            let number = $(event.currentTarget).val();
            if (!number || isNaN(number)) {
                number = 0;
            }
            $(event.currentTarget).closest('.input-shipping-sync-wrapper').find($(event.currentTarget).data('target')).text(RealDriss.numberFormat(parseFloat(number), 2));
        });

        $(document).on('keyup', '.input-sync-text-item', event => {
            $(event.currentTarget).closest('.input-shipping-sync-wrapper').find($(event.currentTarget).data('target')).text($(event.currentTarget).val());
        });

        $(document).on('keyup', '.input-to-value-field', event => {
            if ($(event.currentTarget).val()) {
                $('.rule-to-value-wrap').removeClass('hidden');
                $('.rule-to-value-missing').addClass('hidden');
            } else {
                $('.rule-to-value-wrap').addClass('hidden');
                $('.rule-to-value-missing').removeClass('hidden');
            }
        });

        $(document).on('click', '.btn-add-shipping-rule-trigger', event => {
            event.preventDefault();
            $('#add-shipping-rule-item-button').data('shipping-id', $(event.currentTarget).data('shipping-id'));
            $('#add-shipping-rule-item-modal input[name=name]').val('');
            $('#add-shipping-rule-item-modal select').val('base_on_price');
            $('#add-shipping-rule-item-modal input[name=from]').val('0');
            $('#add-shipping-rule-item-modal input[name=to]').val('');
            $('#add-shipping-rule-item-modal input[name=price]').val('0');
            $('#add-shipping-rule-item-modal').modal('show');
        });

        $(document).find('.select-country-search').select2({
            width: '100%',
            dropdownParent: $('#select-country-modal')
        });

        $(document).on('click', '.btn-select-country', event => {
            event.preventDefault();
            $('#select-country-modal').modal('show');
        });

        $(document).on('click', '#add-shipping-region-button', event => {
            event.preventDefault();
            let _self = $(event.currentTarget);
            _self.addClass('button-loading');

            let $form = _self.closest('.modal-content').find('form');

            $.ajax({
                type: 'POST',
                url: $form.prop('action'),
                data: $form.serialize(),
                success: res => {
                    if (!res.error) {
                        RealDriss.showSuccess(res.message);
                        $('.wrapper-content').load(window.location.href + ' .wrapper-content > *');
                    } else {
                        RealDriss.showError(res.message);
                    }
                    _self.removeClass('button-loading');
                    $('#select-country-modal').modal('hide');
                },
                error: error => {
                    RealDriss.handleError(error);
                    _self.removeClass('button-loading');
                }
            });
        });

        $(document).on('click', '#add-shipping-rule-item-button', event => {
            event.preventDefault();
            saveRuleItem($(event.currentTarget), $(event.currentTarget).closest('.modal-content').find('form'), 'POST', $(event.currentTarget).data('shipping-id'));
        });

        $(document).on('change', '.shipping-rule-item-enable', event => {
            let _self = $(event.currentTarget);
            if (_self.prop('checked')) {
                _self.closest('tr').find('.support-shipping').removeClass('hidden');
                _self.closest('tr').find('.no-support-shipping').addClass('hidden');
                _self.closest('tr').find('.adjustment-price-wrapper').removeClass('hidden');
            } else {
                _self.closest('tr').find('.support-shipping').addClass('hidden');
                _self.closest('tr').find('.no-support-shipping').removeClass('hidden');
                _self.closest('tr').find('.adjustment-price-wrapper').addClass('hidden');
            }
        });

        $(document).on('keyup', '.shipping-price-district', event => {
            let _self = $(event.currentTarget);
            let basePrice = _self.closest('.shipping-detail-information').find('.base-price-rule-item').val();
            if (!basePrice || isNaN(basePrice)) {
                basePrice = 0;
            }

            let adjustmentPrice = _self.val();

            if (!adjustmentPrice || isNaN(adjustmentPrice)) {
                adjustmentPrice = 0;
            }
            _self.closest('tr').find('.support-shipping .rule-adjustment-price-item').text(RealDriss.numberFormat(parseFloat(basePrice) + parseFloat(adjustmentPrice), 2));
        });

        $(document).on('keyup', '.base-price-rule-item', event => {
            let _self = $(event.currentTarget);
            let basePrice = _self.val();

            if (!basePrice || isNaN(basePrice)) {
                basePrice = 0;
            }

            $.each($(document).find('.support-shipping .rule-adjustment-price-item'), (index, item) => {
                let adjustmentPrice = $(item).closest('tr').find('.shipping-price-district').val();
                if (!adjustmentPrice || isNaN(adjustmentPrice)) {
                    adjustmentPrice = 0;
                }
                $(item).text(RealDriss.numberFormat(parseFloat(basePrice) + parseFloat(adjustmentPrice)), 2);
            });
        });
    }
}

$(document).ready(() => {
    new ShippingManagement().init();
});
