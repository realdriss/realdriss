/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************************************************!*\
  !*** ./platform/plugins/translation/resources/assets/js/theme-translations.js ***!
  \********************************************************************************/
$(document).ready(function () {
  $(document).on('click', '.button-save-theme-translations', function (event) {
    event.preventDefault();
    var _self = $(event.currentTarget);
    _self.addClass('button-loading');
    var $form = _self.closest('form');
    var translations = [];
    $.each($form.find('.table tbody tr'), function (index, el) {
      translations.push({
        key: $(el).find('.translation-key').val(),
        value: $(el).find('.translation-value').val()
      });
    });
    $.ajax({
      url: $form.prop('action'),
      type: 'POST',
      data: {
        locale: $form.find('input[name=locale]').val(),
        translations: JSON.stringify(translations)
      },
      success: function success(data) {
        _self.removeClass('button-loading');
        if (data.error) {
          RealDriss.showError(data.message);
        } else {
          RealDriss.showSuccess(data.message);
          $form.removeClass('dirty');
        }
      },
      error: function error(data) {
        _self.removeClass('button-loading');
        RealDriss.handleError(data);
      }
    });
  });
});
/******/ })()
;