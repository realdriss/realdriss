class CacheManagement {
    init() {
        $(document).on('click', '.btn-clear-cache', event =>  {
            event.preventDefault();
            let _self = $(event.currentTarget);
            _self.addClass('button-loading');

            $.ajax({
                url: _self.data('url'),
                type: 'POST',
                data: {
                    type: _self.data('type'),
                },
                success: data =>  {
                    _self.removeClass('button-loading');

                    if (data.error) {
                        RealDriss.showError(data.message);
                    } else {
                        RealDriss.showSuccess(data.message);
                    }
                },
                error: data =>  {
                    _self.removeClass('button-loading');
                    RealDriss.handleError(data);
                }
            });
        });
    }
}

$(document).ready(() => {
    new CacheManagement().init();
});
