import CKEditorUploadAdapter from './ckeditor-upload-adapter';

class EditorManagement {
    initCkEditor(element, extraConfig) {
        ClassicEditor
            .create(document.querySelector('#' + element), {
                fontSize: {
                    options: [
                        9,
                        11,
                        13,
                        'default',
                        17,
                        16,
                        18,
                        19,
                        21,
                        22,
                        23,
                        24
                    ]
                },
                heading: {
                    options: [
                        {model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph'},
                        {model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1'},
                        {model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2'},
                        {model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3'},
                        {model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4'}
                    ]
                },
                placeholder: ' ',
                toolbar: {
                    items: [
                        'heading',
                        '|',
                        'fontColor',
                        'fontSize',
                        'fontBackgroundColor',
                        'fontFamily',
                        'bold',
                        'italic',
                        'underline',
                        'link',
                        'strikethrough',
                        'bulletedList',
                        'numberedList',
                        '|',
                        'codeBlock',
                        'outdent',
                        'indent',
                        '|',
                        'htmlEmbed',
                        'imageInsert',
                        'blockQuote',
                        'insertTable',
                        'mediaEmbed',
                        'undo',
                        'redo',
                        'findAndReplace',
                        'removeFormat',
                        'sourceEditing'
                    ]
                },
                language: 'en',
                image: {
                    toolbar: [
                        'imageTextAlternative',
                        'imageStyle:inline',
                        'imageStyle:block',
                        'imageStyle:side'
                    ]
                },
                table: {
                    contentToolbar: [
                        'tableColumn',
                        'tableRow',
                        'mergeTableCells',
                        'tableCellProperties',
                        'tableProperties'
                    ]
                },
                ...extraConfig,
            })
            .then(editor => {
                editor.plugins.get('FileRepository').createUploadAdapter = loader => {
                    return new CKEditorUploadAdapter(loader, RV_MEDIA_URL.media_upload_from_editor, editor.t);
                };

                // create function insert html
                editor.insertHtml = (html) => {
                    const viewFragment = editor.data.processor.toView(html);
                    const modelFragment = editor.data.toModel(viewFragment);
                    editor.model.insertContent(modelFragment);
                }
                window.editor = editor;
                this.CKEDITOR[element] = editor;

                const minHeight = $('#' + element).prop('rows') * 90;
                const className = `ckeditor-${element}-inline`;
                $(editor.ui.view.editable.element)
                    .addClass(className)
                    .after(`
                    <style>
                        .ck-editor__editable_inline {
                            min-height: ${minHeight - 100}px;
                            max-height: ${minHeight + 100}px;
                        }
                    </style>
                `);

                // debounce content for ajax ne
                let timeout;
                editor.model.document.on('change:data', () => {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        editor.updateSourceElement();
                    }, 150)
                });

                // insert media embed
                editor.commands._commands.get("mediaEmbed").execute = function (url) {
                    editor.insertHtml(`[media url="${url}"][/media]`);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    uploadImageFromEditor(blobInfo, callback) {
        let formData = new FormData();
        if (typeof blobInfo.blob === 'function') {
            formData.append('upload', blobInfo.blob(), blobInfo.filename());
        } else {
            formData.append('upload', blobInfo);
        }

        $.ajax({
            type: 'POST',
            data: formData,
            url: RV_MEDIA_URL.media_upload_from_editor,
            processData: false,
            contentType: false,
            cache: false,
            success(res) {
                if (res.uploaded) {
                    callback(res.url);
                }
            }
        });
    }

    initTinyMce(element) {
        tinymce.init({
            menubar: true,
            selector: '#' + element,
            min_height: $('#' + element).prop('rows') * 110,
            resize: 'vertical',
            plugins: 'code autolink advlist visualchars link image media table charmap hr pagebreak nonbreaking hanbiroclip anchor insertdatetime lists textcolor wordcount imagetools  contextmenu  visualblocks',
            extended_valid_elements: 'input[id|name|value|type|class|style|required|placeholder|autocomplete|onclick]',
            toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link image table | alignleft aligncenter alignright alignjustify  | numlist bullist indent  |  visualblocks code',
            convert_urls: false,
            image_caption: true,
            image_advtab: true,
            image_title: true,
            placeholder: '',
            contextmenu: 'link image inserttable | cell row column deletetable',
            images_upload_url: RV_MEDIA_URL.media_upload_from_editor,
            automatic_uploads: true,
            block_unsupported_drop: false,
            file_picker_types: 'file image media',
            images_upload_handler: this.uploadImageFromEditor.bind(this),
            file_picker_callback: callback => {
                let $input = $('<input type="file" accept="image/*" />').click();

                $input.on('change', e => {
                    this.uploadImageFromEditor(e.target.files[0], callback);

                })
            }
        });
    }

    initEditor(element, extraConfig, type) {
        if (!element.length) {
            return false;
        }

        let current = this;
        switch (type) {
            case 'ckeditor':
                $.each(element, (index, item) => {
                    current.initCkEditor($(item).prop('id'), extraConfig);
                });
                break;
            case 'tinymce':
                $.each(element, (index, item) => {
                    current.initTinyMce($(item).prop('id'));
                });
                break;
        }
    }

    init() {
        let $ckEditor = $('.editor-ckeditor');
        let $tinyMce = $('.editor-tinymce');
        let current = this;
        if ($ckEditor.length > 0) {
            current.initEditor($ckEditor, {}, 'ckeditor');
        }
        if ($tinyMce.length > 0) {
            current.initEditor($tinyMce, {}, 'tinymce');
        }

        this.CKEDITOR = {};

        $(document).on('click', '.show-hide-editor-btn', event => {
            event.preventDefault();
            let _self = $(event.currentTarget);
            let $result = $('#' + _self.data('result'));
            if ($result.hasClass('editor-ckeditor')) {
                if (this.CKEDITOR[_self.data('result')] && typeof this.CKEDITOR[_self.data('result')] !== 'undefined') {
                    this.CKEDITOR[_self.data('result')].destroy();
                    this.CKEDITOR[_self.data('result')] = null;
                    $('.editor-action-item').not('.action-show-hide-editor').hide();
                } else {
                    current.initCkEditor(_self.data('result'), {}, 'ckeditor');
                    $('.editor-action-item').not('.action-show-hide-editor').show();
                }
            } else if ($result.hasClass('editor-tinymce')) {
                tinymce.execCommand('mceToggleEditor', false, _self.data('result'));
            }
        });

        this.manageShortCode();

        return this;
    }

    manageShortCode() {
        const self = this;
        $('.list-shortcode-items li a').on('click', function (event) {
            event.preventDefault();

            if ($(this).data('has-admin-config') == '1') {
                $('.short-code-admin-config').html('');
                $('.short_code_modal').modal('show');
                $('.half-circle-spinner').show();

                $.ajax({
                    type: 'GET',
                    url: $(this).prop('href'),
                    success: res => {
                        if (res.error) {
                            Botble.showError(res.message);
                            return false;
                        }

                        $('.short-code-data-form').trigger('reset');
                        $('.short_code_input_key').val($(this).data('key'));
                        $('.half-circle-spinner').hide();
                        $('.short-code-admin-config').html(res.data);
                        Botble.initResources();
                        Botble.initMediaIntegrate();
                        if ($(this).data('description') !== '' && $(this).data('description') != null) {
                            $('.short_code_modal .modal-title strong').text($(this).data('description'));
                        }
                    },
                    error: data => {
                        Botble.handleError(data);
                    }
                });

            } else {
                if ($('.editor-ckeditor').length > 0) {
                    self.CKEDITOR[$('.add_shortcode_btn_trigger').data('result')].insertHtml('[' + $(this).data('key') + '][/' + $(this).data('key') + ']');
                } else {
                    tinymce.get($('.add_shortcode_btn_trigger').data('result')).execCommand(
                        'mceInsertContent',
                        false,
                        '[' + $(this).data('key') + '][/' + $(this).data('key') + ']'
                    );
                }
            }
        });

        $.fn.serializeObject = function () {
            let o = {};
            let a = this.serializeArray();
            $.each(a, function () {
                if (o[this.name]) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });

            return o;
        };

        $('.add_short_code_btn').on('click', function (event) {
            event.preventDefault();
            let formElement = $('.short_code_modal').find('.short-code-data-form');
            let formData = formElement.serializeObject();
            let attributes = '';

            $.each(formData, function (name, value) {
                let element = formElement.find('*[name="' + name + '"]');
                let shortcodeAttribute = element.data('shortcode-attribute');
                if ((!shortcodeAttribute || shortcodeAttribute !== 'content') && value) {
                    name = name.replace('[]', '');
                    if (Array.isArray(value)) {
                        value.map(function (i, e) {
                            attributes += ' ' + name + '_' + (e + 1) + '="' + i + '"';
                        });
                    } else {
                        attributes += ' ' + name + '="' + value + '"';
                    }
                }
            });

            let content = '';
            let contentElement = formElement.find('*[data-shortcode-attribute=content]');
            if (contentElement != null && contentElement.val() != null && contentElement.val() !== '') {
                content = contentElement.val();
            }

            const $shortCodeKey = $(this).closest('.short_code_modal').find('.short_code_input_key').val();

            if ($('.editor-ckeditor').length > 0) {
                self.CKEDITOR[$('.add_shortcode_btn_trigger').data('result')].insertHtml('<div>[' + $shortCodeKey + attributes + ']' + content + '[/' + $shortCodeKey + ']</div>');
            } else {
                tinymce.get($('.add_shortcode_btn_trigger').data('result')).execCommand(
                    'mceInsertContent',
                    false,
                    '<div>[' + $shortCodeKey + attributes + ']' + content + '[/' + $shortCodeKey + ']</div>'
                );
            }

            $(this).closest('.modal').modal('hide');
        });
    }
}

$(document).ready(() => {
    window.EDITOR = new EditorManagement().init();
    window.EditorManagement = window.EditorManagement || EditorManagement;
});
