/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************************************************!*\
  !*** ./platform/plugins/simple-slider/resources/assets/js/simple-slider-admin.js ***!
  \***********************************************************************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SimpleSliderAdminManagement = /*#__PURE__*/function () {
  function SimpleSliderAdminManagement() {
    _classCallCheck(this, SimpleSliderAdminManagement);
  }
  _createClass(SimpleSliderAdminManagement, [{
    key: "init",
    value: function init() {
      $.each($('#simple-slider-items-table_wrapper tbody'), function (index, el) {
        Sortable.create(el, {
          group: el + '_' + index,
          // or { name: "...", pull: [true, false, clone], put: [true, false, array] }
          sort: true,
          // sorting inside list
          delay: 0,
          // time in milliseconds to define when the sorting should start
          disabled: false,
          // Disables the sortable if set to true.
          store: null,
          // @see Store
          animation: 150,
          // ms, animation speed moving items when sorting, `0` — without animation
          handle: 'tr',
          ghostClass: 'sortable-ghost',
          // Class name for the drop placeholder
          chosenClass: 'sortable-chosen',
          // Class name for the chosen item
          dataIdAttr: 'data-id',
          forceFallback: false,
          // ignore the HTML5 DnD behaviour and force the fallback to kick in
          fallbackClass: 'sortable-fallback',
          // Class name for the cloned DOM Element when using forceFallback
          fallbackOnBody: false,
          // Appends the cloned DOM Element into the Document's Body

          scroll: true,
          // or HTMLElement
          scrollSensitivity: 30,
          // px, how near the mouse must be to an edge to start scrolling.
          scrollSpeed: 10,
          // px

          // dragging ended
          onEnd: function onEnd() {
            var $box = $(el).closest('.widget-body');
            $box.find('.btn-save-sort-order').addClass('sort-button-active').show();
            $.each($box.find('tbody tr'), function (index, sort) {
              $(sort).find('.order-column').text(index + 1);
            });
          }
        });
      });
      $('.btn-save-sort-order').off('click').on('click', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        if (_self.hasClass('sort-button-active')) {
          var $box = _self.closest('.widget-body');
          $box.find('.btn-save-sort-order').addClass('button-loading');
          var items = [];
          console.log($box.find('tbody tr'));
          $.each($box.find('tbody tr'), function (index, sort) {
            items.push(parseInt($(sort).find('td:first-child').text()));
            $(sort).find('.order-column').text(index + 1);
          });
          $.ajax({
            type: 'POST',
            cache: false,
            url: route('simple-slider.sorting'),
            data: {
              items: items
            },
            success: function success(res) {
              RealDriss.showSuccess(res.message);
              $box.find('.btn-save-sort-order').removeClass('button-loading').hide();
              _self.removeClass('sort-button-active');
            },
            error: function error(res) {
              RealDriss.showError(res.message);
              _self.removeClass('sort-button-active');
            }
          });
        }
      });
    }
  }]);
  return SimpleSliderAdminManagement;
}();
$(document).ready(function () {
  new SimpleSliderAdminManagement().init();
});
/******/ })()
;