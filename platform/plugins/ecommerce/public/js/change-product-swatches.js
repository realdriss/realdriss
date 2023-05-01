/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************************************************!*\
  !*** ./platform/plugins/ecommerce/resources/assets/js/change-product-swatches.js ***!
  \***********************************************************************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ChangeProductSwatches = /*#__PURE__*/function () {
  function ChangeProductSwatches() {
    _classCallCheck(this, ChangeProductSwatches);
    this.xhr = null;
    this.handleEvents();
  }
  _createClass(ChangeProductSwatches, [{
    key: "handleEvents",
    value: function handleEvents() {
      var _self = this;
      var $body = $('body');
      $body.on('click', '.product-attributes .visual-swatch label, .product-attributes .text-swatch label', function (event) {
        event.preventDefault();
        var $radio = $(event.currentTarget).find('input[type=radio]');
        if ($radio.is(':checked')) {
          return false;
        }
        $radio.prop('checked', true);
        if ($(event.currentTarget).closest('.visual-swatch').find('input[type=radio]:checked').length < 1) {
          $radio.prop('checked', true);
        }
        $radio.trigger('change');
      });
      $body.off('change').on('change', '.product-attributes input, .product-attributes select', function (event) {
        var selectedAttributeSets = 0;
        $(event.currentTarget).closest('.product-attributes').find('.attribute-swatches-wrapper').each(function (index, el) {
          var $current = $(el);
          var attribute;
          if ($current.data('type') === 'dropdown') {
            attribute = $current.find('select').val();
          } else {
            attribute = $current.find('input[type=radio]:checked').val();
          }
          if (attribute) {
            selectedAttributeSets++;
          }
        });
        _self.getProductVariation($(event.currentTarget).closest('.product-attributes'));
      });
    }
  }, {
    key: "getProductVariation",
    value: function getProductVariation($productAttributes) {
      var _self = this;
      var attributes = [];

      /**
       * Break current request
       */
      if (_self.xhr) {
        _self.xhr.abort();
        _self.xhr = null;
      }

      /**
       * Get attributes
       */
      $productAttributes.find('.attribute-swatches-wrapper').each(function (index, el) {
        var $current = $(el);
        var attribute;
        if ($current.data('type') === 'dropdown') {
          attribute = $current.find('select').val();
        } else {
          attribute = $current.find('input[type=radio]:checked').val();
        }
        if (attribute) {
          attributes.push(attribute);
        }
      });
      if (attributes.length) {
        _self.xhr = $.ajax({
          url: $productAttributes.data('target'),
          type: 'GET',
          data: {
            attributes: attributes
          },
          beforeSend: function beforeSend() {
            if (window.onBeforeChangeSwatches && typeof window.onBeforeChangeSwatches === 'function') {
              window.onBeforeChangeSwatches(attributes);
            }
          },
          success: function success(data) {
            if (window.onChangeSwatchesSuccess && typeof window.onChangeSwatchesSuccess === 'function') {
              window.onChangeSwatchesSuccess(data);
            }
          },
          complete: function complete(data) {
            if (window.onChangeSwatchesComplete && typeof window.onChangeSwatchesComplete === 'function') {
              window.onChangeSwatchesComplete(data);
            }
          },
          error: function error(data) {
            if (window.onChangeSwatchesError && typeof window.onChangeSwatchesError === 'function') {
              window.onChangeSwatchesError(data);
            }
          }
        });
      } else {
        if (window.onBeforeChangeSwatches && typeof window.onBeforeChangeSwatches === 'function') {
          window.onBeforeChangeSwatches({
            attributes: attributes
          });
        }
        if (window.onChangeSwatchesSuccess && typeof window.onChangeSwatchesSuccess === 'function') {
          window.onChangeSwatchesSuccess(null);
        }
        if (window.onChangeSwatchesComplete && typeof window.onChangeSwatchesComplete === 'function') {
          window.onChangeSwatchesComplete(null);
        }
        if (window.onChangeSwatchesError && typeof window.onChangeSwatchesError === 'function') {
          window.onChangeSwatchesError(null);
        }
      }
    }
  }]);
  return ChangeProductSwatches;
}();
$(document).ready(function () {
  new ChangeProductSwatches();
});
/******/ })()
;