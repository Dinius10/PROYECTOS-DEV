var altura;
var banner; 
var owl1;


jQuery(window).on("load",function() {
    jQuery(".overlay").addClass("in");
    jQuery("body").removeClass("preloader");

     calcularcabecera();
});

function calcularcabecera()
{
    banner = jQuery("#inicio").innerHeight();
    altura = jQuery("header").innerHeight();

    // if(jQuery(window).width() < 768)
    // {
    //     jQuery("#inicio").css("padding-top",altura);
    // }else{
    //     jQuery("#inicio").css("padding-top",0);
    // }
}


jQuery(window).resize(function() {
    setTimeout(function(){ 
        calcularcabecera();
    }, 1000);

    // jQuery(".borde-conetendor-imagen").attr("style","");
    jQuery(".burguer").removeClass("open");
    jQuery(".lista-menu").removeClass("open");
    jQuery(".contenedor-redes,.contenedor-iconos").fadeOut();
});

jQuery(document).ready(function(){

    var wow = new WOW();
    wow.init();

    jQuery('.counter').counterUp({
        delay: 10,
        time: 1000,
    });



    jQuery(".burguer").click(function(e){
        e.preventDefault();
        altura = jQuery("header").innerHeight();
        jQuery(".lista-menu").css("padding-top",altura);
        jQuery(".burguer").toggleClass("open");
        jQuery(".lista-menu").toggleClass("open");
    });

    jQuery('.lista-menu a[href^="#"],.lista-menu-desktop a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        jQuery(".burguer").removeClass("open");
        jQuery(".lista-menu").removeClass("open");
      
        var target = this.hash;
        var menu = target;
        target = jQuery(target); 
         if(jQuery(target).length > 0)
        { 
            jQuery(".lista-menu a,.lista-menu-desktop a").removeClass("active");
            jQuery(this).addClass("active");

            setTimeout(function(){
                jQuery('html, body').stop().animate({
                    'scrollTop': target.offset().top - altura +1}, 600, 'swing', function () {
                    //window.location.hash = menu;
                });
             },400);
        }
    });

    jQuery('.cerrar-columna-detalle').click(function (e) {
        e.preventDefault();
        jQuery(".columna-detalle").removeClass("activo");
        jQuery('html, body').stop().animate({
        'scrollTop': jQuery("#sectores").offset().top - altura + 1}, 600, 'swing', function () {
        });
    });


    jQuery('.btn-siguiente').click(function (e) {
        e.preventDefault();
        
        var target = this.hash;
        var menu = target;
        target = jQuery(target); 
         if(jQuery(target).length > 0)
        { 

            setTimeout(function(){
                jQuery('html, body').stop().animate({
                    'scrollTop': target.offset().top - altura + 1}, 600, 'swing', function () {
                    //window.location.hash = menu;
                });
             },400);
        }
    });

    jQuery(".icono-descarga").click(function(e){
         e.preventDefault();  
         jQuery(".fila-botones").fadeToggle();
    })


    var s1 = jQuery('.slider-1');
    s1.owlCarousel({
    items : 1, 
    margin:15,
    loop:false,
    dots:false,  
    onTranslate:function(event)
    {


        var items     = event.item.count;     // Number of items
        var item      = event.item.index; 
        var itemperpage =  event.page.size;
        var paginas = event.page.count;

        if(item == 0)
        {
            jQuery("#retos .cifras.item-anterior").addClass("disable");  
        }else{
            jQuery("#retos .cifras.item-anterior").removeClass("disable");
        }

        if(item == (items - itemperpage)){
            jQuery("#retos .cifras.item-siguiente").addClass("disable");  
        }else{
            jQuery("#retos .cifras.item-siguiente").removeClass("disable");  
        }
    }     
    });

    jQuery("#retos .cifras.item-anterior").click(function (e) {
        e.preventDefault();        
        s1.trigger('prev.owl.carousel');
    });

    jQuery("#retos .cifras.item-siguiente").click(function (e) {
        e.preventDefault();
        s1.trigger('next.owl.carousel');
    });

    jQuery(".sector-desktop .icono-sector").click(function(e)
    {
        e.preventDefault();
        var indice = jQuery(".sector-desktop .icono-sector").index(this);
        jQuery(".sector-desktop .icono-sector").removeClass("activo");
        jQuery(".detalle-sector").removeClass("activo");
        jQuery(".sector-desktop .btn-descargar").removeClass("activo");
        jQuery(this).addClass("activo");
        jQuery(".detalle-sector").eq(indice).addClass("activo");
        jQuery(".sector-desktop .btn-descargar").eq(indice).addClass("activo");
    })

    jQuery(".sector-mobile .icono-sector").click(function(e)
    {
        e.preventDefault();
        var esteboton = jQuery(this);
        var siguientecolumna = esteboton.closest(".columna-icono").next();
        var indice = jQuery(".sector-mobile .icono-sector").index(this);
        jQuery(".sector-mobile .icono-sector").removeClass("activo");
        jQuery(".columna-detalle").removeClass("activo");
        esteboton.addClass("activo");
        jQuery(".columna-detalle").eq(indice).addClass("activo");
        jQuery('html, body').stop().animate({
            'scrollTop': siguientecolumna.offset().top - altura + 1}, 600, 'swing', function () {
        });
    }) 


    var s2 = jQuery('.slider-2');
    s2.owlCarousel({
    items : 1, 
    margin:2,    
    loop:false,
    dots:true,
    onTranslate:function(event)
    {
        var items     = event.item.count;     // Number of items
        var item      = event.item.index; 
        var itemperpage =  event.page.size;
        var paginas = event.page.count;

        if(item == 0)
        {
            jQuery("#retos .apoyo.item-anterior").addClass("disable");  
        }else{
            jQuery("#retos .apoyo.item-anterior").removeClass("disable");
        }

        if(item == (items - itemperpage)){
            jQuery("#retos .apoyo.item-siguiente").addClass("disable");  
        }else{
            jQuery("#retos .apoyo.item-siguiente").removeClass("disable");  
        }
    }         
    });

    jQuery("#retos .apoyo.item-anterior").click(function (e) {
        e.preventDefault();        
        s2.trigger('prev.owl.carousel');
    });

    jQuery("#retos .apoyo.item-siguiente").click(function (e) {
        e.preventDefault();
        s2.trigger('next.owl.carousel');
    });


    var s3 = jQuery('.slider-3');
    s3.owlCarousel({
    items : 1, 
    margin:2,    
    loop:false,
    dots:true,
    onTranslate:function(event)
    {
        var items     = event.item.count;     // Number of items
        var item      = event.item.index; 
        var itemperpage =  event.page.size;
        var paginas = event.page.count;

        if(item == 0)
        {
            jQuery("#sostenibilidad .item-anterior").addClass("disable");  
        }else{
            jQuery("#sostenibilidad .item-anterior").removeClass("disable");
        }

        if(item == (items - itemperpage)){
            jQuery("#sostenibilidad .item-siguiente").addClass("disable");  
        }else{
            jQuery("#sostenibilidad .item-siguiente").removeClass("disable");  
        }
    }         
    });

    jQuery("#sostenibilidad .item-anterior").click(function (e) {
        e.preventDefault();        
        s3.trigger('prev.owl.carousel');
    });

    jQuery("#sostenibilidad .item-siguiente").click(function (e) {
        e.preventDefault();
        s3.trigger('next.owl.carousel');
    });


    jQuery("#frente-pandemia .tab").click(function(){
        var indice = jQuery("#frente-pandemia .tab").index(this);
        jQuery("#frente-pandemia .tab").removeClass("active");
        jQuery("#frente-pandemia .cuerpo-tab").removeClass("active");
        jQuery(this).addClass("active");
        jQuery("#frente-pandemia .cuerpo-tab").eq(indice).addClass("active");
    });

    jQuery("#sostenibilidad .tab").click(function(){
        var indice = jQuery("#sostenibilidad .tab").index(this);
        jQuery("#sostenibilidad .tab").removeClass("active");
        jQuery("#sostenibilidad .cuerpo-tab").removeClass("active");
        jQuery(this).addClass("active");
        jQuery("#sostenibilidad .cuerpo-tab").eq(indice).addClass("active");
    });

    jQuery('.lista-menu a[href^="#"],.menu-desktop .contenedor-franja a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        jQuery(".burguer").removeClass("open");
        jQuery(".lista-menu").removeClass("open");
      
        var target = this.hash;
        var menu = target;
        target = jQuery(target); 
         if(jQuery(target).length > 0)
        { 
            jQuery(".lista-menu a,.menu-desktop .contenedor-franja a .circulo").removeClass("active");
            jQuery(this).addClass("active");

            setTimeout(function(){
                jQuery('html, body').stop().animate({
                    'scrollTop': target.offset().top - altura +1}, 600, 'swing', function () {
                    //window.location.hash = menu;
                });
             },400);
        }
    });


    jQuery('.menu-desktop .flecha-inicio a[href^="#"],.flecha-abajo').on('click', function (e) {
        e.preventDefault();
      
        var target = this.hash;
        var menu = target;
        target = jQuery(target); 
         if(jQuery(target).length > 0)
        { 

            setTimeout(function(){
                jQuery('html, body').stop().animate({
                    'scrollTop': target.offset().top - altura +1}, 600, 'swing', function () {
                    //window.location.hash = menu;
                });
             },400);
        }
    });

    jQuery(".acordion").click(function(){
        jQuery(".cuerpo-acordion").slideUp();
        if(jQuery(this).find("i").hasClass("fa-chevron-up"))
        {
            jQuery(this).find("i").removeClass("fa-chevron-up");
        }else{
            jQuery(".acordion").find("i").removeClass("fa-chevron-up"); 
            jQuery(this).find("i").addClass("fa-chevron-up");
        }
        jQuery(this).next(".cuerpo-acordion").stop().slideToggle();
    })

    // jQuery('.grupo-slides-mobile').slick({
    //     dots: true,
    //     arrows: false,
    //     slidesToShow: true,
    //     slidesToScroll: true,
    //     infinite: false
    // })


});


jQuery(document).on("scroll", onScroll);

function onScroll(event){
    if(jQuery(window).scrollTop() > altura)
    {
        jQuery("header").addClass("fondo");
    }else{
        jQuery("header").removeClass("fondo");
    }
}