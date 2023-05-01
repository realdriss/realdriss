/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************************************!*\
  !*** ./platform/packages/theme/resources/assets/js/theme.js ***!
  \**************************************************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ThemeManagement = /*#__PURE__*/function () {
  function ThemeManagement() {
    _classCallCheck(this, ThemeManagement);
  }
  _createClass(ThemeManagement, [{
    key: "init",
    value: function init() {
      $(document).on('click', '.btn-trigger-active-theme', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        $.ajax({
          url: route('theme.active'),
          data: {
            'theme': _self.data('theme')
          },
          type: 'POST',
          success: function success(data) {
            if (data.error) {
              RealDriss.showError(data.message);
            } else {
              RealDriss.showSuccess(data.message);
              window.location.reload();
            }
            _self.removeClass('button-loading');
          },
          error: function error(data) {
            RealDriss.handleError(data);
            _self.removeClass('button-loading');
          }
        });
      });
      $(document).on('click', '.btn-trigger-remove-theme', function (event) {
        event.preventDefault();
        $('#confirm-remove-theme-button').data('theme', $(event.currentTarget).data('theme'));
        $('#remove-theme-modal').modal('show');
      });
      $(document).on('click', '#confirm-remove-theme-button', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        $.ajax({
          url: route('theme.remove', {
            theme: _self.data('theme')
          }),
          type: 'POST',
          success: function success(data) {
            if (data.error) {
              RealDriss.showError(data.message);
            } else {
              RealDriss.showSuccess(data.message);
              window.location.reload();
            }
            _self.removeClass('button-loading');
            $('#remove-theme-modal').modal('hide');
          },
          error: function error(data) {
            RealDriss.handleError(data);
            _self.removeClass('button-loading');
            $('#remove-theme-modal').modal('hide');
          }
        });
      });
    }
  }]);
  return ThemeManagement;
}();
$(document).ready(function () {
  new ThemeManagement().init();
});
/******/ })()
;