$(document).ready(function(){
    // PARA QUE APAREZCA MARCADO CADA PESTAÑA
    $('ul.tabs li a:first').addClass('active');
    // DESAPARECER LOS OTROS ARTICULOS
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show()
        return false;
    });

    // SEGUNDOS TAPS

     $('ul.tabs2 li a').click(function(){
         
        $('ul.tabs2 li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show()
        return false;
    });
});