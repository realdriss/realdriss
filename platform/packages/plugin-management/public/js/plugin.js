(()=>{function e(o){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(o)}function o(o,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,(i=r.key,a=void 0,a=function(o,t){if("object"!==e(o)||null===o)return o;var n=o[Symbol.toPrimitive];if(void 0!==n){var r=n.call(o,t||"default");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(o)}(i,"string"),"symbol"===e(a)?a:String(a)),r)}var i,a}var t=function(){function e(){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"init",value:function(){$("#plugin-list").on("click",".btn-trigger-change-status",(function(e){e.preventDefault();var o=$(e.currentTarget);o.addClass("button-loading"),$.ajax({url:route("plugins.change.status",{name:o.data("plugin")}),type:"PUT",success:function(e){e.error?RealDriss.showError(e.message):(RealDriss.showSuccess(e.message),$("#plugin-list #app-"+o.data("plugin")).load(window.location.href+" #plugin-list #app-"+o.data("plugin")+" > *"),window.location.reload()),o.removeClass("button-loading")},error:function(e){RealDriss.handleError(e),o.removeClass("button-loading")}})})),$(document).on("click",".btn-trigger-remove-plugin",(function(e){e.preventDefault(),$("#confirm-remove-plugin-button").data("plugin",$(e.currentTarget).data("plugin")),$("#remove-plugin-modal").modal("show")})),$(document).on("click","#confirm-remove-plugin-button",(function(e){e.preventDefault();var o=$(e.currentTarget);o.addClass("button-loading"),$.ajax({url:route("plugins.remove",{plugin:o.data("plugin")}),type:"DELETE",success:function(e){e.error?RealDriss.showError(e.message):(RealDriss.showSuccess(e.message),window.location.reload()),o.removeClass("button-loading"),$("#remove-plugin-modal").modal("hide")},error:function(e){RealDriss.handleError(e),o.removeClass("button-loading"),$("#remove-plugin-modal").modal("hide")}})}))}}])&&o(t.prototype,n),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();$(document).ready((function(){(new t).init()}))})();