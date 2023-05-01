/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*************************************************************************!*\
  !*** ./platform/plugins/payment/resources/assets/js/payment-methods.js ***!
  \*************************************************************************/


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PaymentMethodManagement = /*#__PURE__*/function () {
  function PaymentMethodManagement() {
    _classCallCheck(this, PaymentMethodManagement);
  }
  _createClass(PaymentMethodManagement, [{
    key: "init",
    value: function init() {
      $('.toggle-payment-item').off('click').on('click', function (event) {
        $(event.currentTarget).closest('tbody').find('.payment-content-item').toggleClass('hidden');
      });
      $('.disable-payment-item').off('click').on('click', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        $('#confirm-disable-payment-method-modal').modal('show');
        $('#confirm-disable-payment-method-button').on('click', function (event) {
          event.preventDefault();
          $(event.currentTarget).addClass('button-loading');
          $.ajax({
            type: 'POST',
            cache: false,
            url: route('payments.methods.update.status'),
            data: {
              type: _self.closest('form').find('.payment_type').val()
            },
            success: function success(res) {
              if (!res.error) {
                _self.closest('tbody').find('.payment-name-label-group').addClass('hidden');
                _self.closest('tbody').find('.edit-payment-item-btn-trigger').addClass('hidden');
                _self.closest('tbody').find('.save-payment-item-btn-trigger').removeClass('hidden');
                _self.closest('tbody').find('.btn-text-trigger-update').addClass('hidden');
                _self.closest('tbody').find('.btn-text-trigger-save').removeClass('hidden');
                _self.addClass('hidden');
                $(event.currentTarget).closest('.modal').modal('hide');
                RealDriss.showSuccess(res.message);
              } else {
                RealDriss.showError(res.message);
              }
              $(event.currentTarget).removeClass('button-loading');
            },
            error: function error(res) {
              RealDriss.handleError(res);
              $(event.currentTarget).removeClass('button-loading');
            }
          });
        });
      });
      $('.save-payment-item').off('click').on('click', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        if (typeof CKEDITOR != 'undefined' && CKEDITOR.instances) {
          for (var i in CKEDITOR.instances) {
            CKEDITOR.instances[i].updateElement();
          }
        }
        $.ajax({
          type: 'POST',
          cache: false,
          url: _self.closest('form').prop('action'),
          data: _self.closest('form').serialize(),
          success: function success(res) {
            if (!res.error) {
              _self.closest('tbody').find('.payment-name-label-group').removeClass('hidden');
              _self.closest('tbody').find('.method-name-label').text(_self.closest('form').find('input.input-name').val());
              _self.closest('tbody').find('.disable-payment-item').removeClass('hidden');
              _self.closest('tbody').find('.edit-payment-item-btn-trigger').removeClass('hidden');
              _self.closest('tbody').find('.save-payment-item-btn-trigger').addClass('hidden');
              _self.closest('tbody').find('.btn-text-trigger-update').removeClass('hidden');
              _self.closest('tbody').find('.btn-text-trigger-save').addClass('hidden');
              RealDriss.showSuccess(res.message);
            } else {
              RealDriss.showError(res.message);
            }
            _self.removeClass('button-loading');
          },
          error: function error(res) {
            RealDriss.handleError(res);
            _self.removeClass('button-loading');
          }
        });
      });
      $('.button-save-payment-settings').off('click').on('click', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        $.ajax({
          type: 'POST',
          cache: false,
          url: _self.closest('form').prop('action'),
          data: _self.closest('form').serialize(),
          success: function success(res) {
            if (!res.error) {
              RealDriss.showSuccess(res.message);
            } else {
              RealDriss.showError(res.message);
            }
            _self.removeClass('button-loading');
          },
          error: function error(res) {
            RealDriss.handleError(res);
            _self.removeClass('button-loading');
          }
        });
      });
    }
  }]);
  return PaymentMethodManagement;
}();
$(document).ready(function () {
  new PaymentMethodManagement().init();
});
/******/ })()
;