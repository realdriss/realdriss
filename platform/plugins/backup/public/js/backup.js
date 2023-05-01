/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************************************!*\
  !*** ./platform/plugins/backup/resources/assets/js/backup.js ***!
  \***************************************************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BackupManagement = /*#__PURE__*/function () {
  function BackupManagement() {
    _classCallCheck(this, BackupManagement);
  }
  _createClass(BackupManagement, [{
    key: "init",
    value: function init() {
      var table_backup = $('#table-backups');
      table_backup.on('click', '.deleteDialog', function (event) {
        event.preventDefault();
        $('.delete-crud-entry').data('section', $(event.currentTarget).data('section'));
        $('.modal-confirm-delete').modal('show');
      });
      table_backup.on('click', '.restoreBackup', function (event) {
        event.preventDefault();
        $('#restore-backup-button').data('section', $(event.currentTarget).data('section'));
        $('#restore-backup-modal').modal('show');
      });
      $('.delete-crud-entry').on('click', function (event) {
        event.preventDefault();
        $('.modal-confirm-delete').modal('hide');
        var deleteURL = $(event.currentTarget).data('section');
        $.ajax({
          url: deleteURL,
          type: 'DELETE',
          success: function success(data) {
            if (data.error) {
              RealDriss.showError(data.message);
            } else {
              table_backup.find('a[data-section="' + deleteURL + '"]').closest('tr').remove();
              RealDriss.showSuccess(data.message);
            }
          },
          error: function error(data) {
            RealDriss.handleError(data);
          }
        });
      });
      $('#restore-backup-button').on('click', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        $.ajax({
          url: _self.data('section'),
          type: 'GET',
          success: function success(data) {
            _self.removeClass('button-loading');
            _self.closest('.modal').modal('hide');
            if (data.error) {
              RealDriss.showError(data.message);
            } else {
              RealDriss.showSuccess(data.message);
              window.location.reload();
            }
          },
          error: function error(data) {
            _self.removeClass('button-loading');
            RealDriss.handleError(data);
          }
        });
      });
      $(document).on('click', '#generate_backup', function (event) {
        event.preventDefault();
        $('#name').val('');
        $('#description').val('');
        $('#create-backup-modal').modal('show');
      });
      $('#create-backup-modal').on('click', '#create-backup-button', function (event) {
        event.preventDefault();
        var _self = $(event.currentTarget);
        _self.addClass('button-loading');
        var name = $('#name').val();
        var description = $('#description').val();
        var error = false;
        if (name === '' || name === null) {
          error = true;
          RealDriss.showError('Backup name is required!');
        }
        if (description === '' || description === null) {
          error = true;
          RealDriss.showError('Backup description is required!');
        }
        if (!error) {
          $.ajax({
            url: $('div[data-route-create]').data('route-create'),
            type: 'POST',
            data: {
              name: name,
              description: description
            },
            success: function success(data) {
              _self.removeClass('button-loading');
              _self.closest('.modal').modal('hide');
              if (data.error) {
                RealDriss.showError(data.message);
              } else {
                table_backup.find('.no-backup-row').remove();
                table_backup.find('tbody').append(data.data);
                RealDriss.showSuccess(data.message);
              }
            },
            error: function error(data) {
              _self.removeClass('button-loading');
              RealDriss.handleError(data);
            }
          });
        } else {
          _self.removeClass('button-loading');
        }
      });
    }
  }]);
  return BackupManagement;
}();
$(document).ready(function () {
  new BackupManagement().init();
});
/******/ })()
;