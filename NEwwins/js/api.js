tinymce.init({
    selector: 'textarea#default',
    width: '100%',
    height: 500,
    plugins:[
        'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
        'searchreplace', 'wordcount', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media', 
        'table', 'emoticons', 'template', 'codesample'
    ],
    toolbar: 'language | undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify |' + 
    'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
    'forecolor backcolor emoticons',
    menu: {
        favs: {title: 'menu', items: 'code visualaid | searchreplace | emoticons'}
    },
    menubar: 'favs file edit view insert format tools table',
    content_style: 'body{font-family:Helvetica,Arial,sans-serif; font-size:16px}',
    content_langs: [
        { title: 'English', code: 'en' },
        { title: 'Spanish', code: 'es' },
        { title: 'French', code: 'fr' },
        { title: 'German', code: 'de' },
        { title: 'Portuguese', code: 'pt' },
        { title: 'Chinese', code: 'zh' }
      ]
});