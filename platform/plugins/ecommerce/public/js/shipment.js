/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************************************!*\
  !*** ./platform/plugins/ecommerce/resources/assets/js/shipment.js ***!
  \********************************************************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ShipmentManagement = /*#__PURE__*/function () {
  function ShipmentManagement() {
    _classCallCheck(this, ShipmentManagement);
  }
  _createClass(ShipmentManagement, [{
    key: "init",
    value: function init() {
      $(document).on('click', '.shipment-actions .applist-menu a', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        $('#confirm-change-shipment-status-button').data('target', _self.data('target')).data('status', _self.data('value'));
        var $modal = $('#confirm-change-status-modal');
        $modal.find('.shipment-status-label').text(_self.text().toLowerCase());
        $modal.modal('show');
      });
      $(document).on('click', '#confirm-change-shipment-status-button', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        $.ajax({
          type: 'POST',
          cache: false,
          url: _self.data('target'),
          data: {
            status: _self.data('status')
          },
          success: function success(res) {
            if (!res.error) {
              RealDriss.showSuccess(res.message);
              $('.max-width-1200').load(window.location.href + ' .max-width-1200 > *', function () {
                $('#confirm-change-status-modal').modal('hide');
                _self.removeClass('button-loading');
              });
            } else {
              RealDriss.showError(res.message);
              _self.removeClass('button-loading');
            }
          },
          error: function error(res) {
            RealDriss.handleError(res);
            _self.removeClass('button-loading');
          }
        });
      });
    }
  }]);
  return ShipmentManagement;
}();
$(document).ready(function () {
  new ShipmentManagement().init();
});
/******/ })()
;