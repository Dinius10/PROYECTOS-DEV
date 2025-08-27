var altura;
var banner; 
var owl1;
var alto_header;
var alto_body;

jQuery(window).on("load",function() {
    jQuery(".overlay").addClass("in");
    jQuery("body").removeClass("preloader");

     calcularcabecera();
     intro();
});

function intro()
{
    var wow = new WOW();
    wow.init();
    
    var inicio = 1
    setInterval(function(){
        jQuery("#inicio .columna-imagenes-intro img").removeClass("activo");
        jQuery("#inicio .columna-imagenes-intro img").eq(inicio).addClass("activo");
        inicio++;
        if(inicio == 3)
        {
            inicio = 0 ;
        }
    }, 4000);
}

function calcularcabecera()
{
    alto_body = jQuery(window).innerHeight() ;
    alto_header = Math.round(jQuery("header").outerHeight()) + 1;
    banner = jQuery("#inicio").innerHeight();
    altura = jQuery("header").innerHeight();

    jQuery("#anexos").innerHeight(alto_body - alto_header + 2);

    if(jQuery(window).width() < 768)
    {
        jQuery("header .container .lista-menu").css("padding-top",altura);
    }else{
        jQuery("header .container .lista-menu").css("padding-top",0);
    }
}


jQuery(window).resize(function() {
    setTimeout(function(){ 
        calcularcabecera();
    }, 1000);

    // jQuery(".borde-conetendor-imagen").attr("style","");
    jQuery("header").removeClass("open");
    jQuery(".burguer").removeClass("open");
    jQuery(".lista-menu").removeClass("open");
    jQuery(".contenedor-redes,.contenedor-iconos").fadeOut();
});

jQuery(document).ready(function(){




    jQuery(".burguer").click(function(e){
        e.preventDefault();
        jQuery("header").toggleClass("open");
        jQuery(".burguer").toggleClass("open");
        jQuery(".lista-menu").toggleClass("open");
    });

    jQuery('.lista-menu a[href^="#"],.lista-menu-desktop a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        jQuery("header").removeClass("open");
        jQuery(".burguer").removeClass("open");
        jQuery(".lista-menu").removeClass("open");
        calcularcabecera();
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

    jQuery("#capacitaciones .capa .abrir-capa").click(function(e){
         e.preventDefault(); 
         jQuery(this).closest(".capa").find(".cuerpo").stop().slideToggle();
         jQuery(this).find(".mas").toggle(); 
         jQuery(this).find(".meno").toggle(); 
    });

    jQuery("#gestion-desktop .boton").click(function(e){
         e.preventDefault(); 
         jQuery("#gestion-desktop .boton").removeClass("activo")
         var indice = jQuery("#gestion-desktop .boton").index(this);
         jQuery(this).addClass("activo");
         jQuery("#gestion-desktop .bloque-gestion").removeClass("activo");
         jQuery("#gestion-desktop .bloque-gestion").eq(indice).addClass("activo");
    })


    var s1 = jQuery('.slider-1');
    s1.owlCarousel({
        items : 1, 
        margin:15,
        loop:true,
        dots:true,  
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,  
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
        loop:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,      
    });

    jQuery("#fortalicemineto .fortalicemineto.item-anterior").click(function (e) {
        e.preventDefault();        
        s2.trigger('prev.owl.carousel');
    });

    jQuery("#fortalicemineto .fortalicemineto.item-siguiente").click(function (e) {
        e.preventDefault();
        s2.trigger('next.owl.carousel');
    });


    var s3 = jQuery('.slider-3');
    s3.owlCarousel({
    items : 1, 
    margin:2,    
    loop:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,     
    });

    jQuery("#sostenibilidad .item-anterior").click(function (e) {
        e.preventDefault();        
        s3.trigger('prev.owl.carousel');
    });

    jQuery("#sostenibilidad .item-siguiente").click(function (e) {
        e.preventDefault();
        s3.trigger('next.owl.carousel');
    });

    var s4 = jQuery('.slider-4');
    s4.owlCarousel({
    items : 1, 
    margin:2,    
    loop:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,       
    });

    var s5 = jQuery('.slider-5');
    s5.owlCarousel({
    items : 1, 
    margin:2,    
    loop:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,       
    });

    jQuery("#desarrollo .item-anterior").click(function (e) {
        e.preventDefault();        
        s5.trigger('prev.owl.carousel');
    });

    jQuery("#desarrollo .item-siguiente").click(function (e) {
        e.preventDefault();
        s5.trigger('next.owl.carousel');
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
        calcularcabecera();
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
});


jQuery(document).on("scroll", onScroll);

function onScroll(event){
    if(jQuery(window).scrollTop() > altura)
    {
        jQuery("header").addClass("fondo");
    }else{
        jQuery("header").removeClass("fondo");
    }

    var scrollPos = jQuery(document).scrollTop();
    jQuery('section').each(function () {
        var currLink = jQuery(this);
        var tag = currLink.attr("id");
        if (Math.round(Math.round(currLink.offset().top) - alto_header) <= Math.round(scrollPos) && Math.round(Math.round(currLink.offset().top)  - alto_header) + Math.round(currLink.outerHeight()) > Math.round(scrollPos)) {
            jQuery('nav.lista-menu a[href="#'+tag+'"]').stop().addClass("seleccionado");  
        }else{
            jQuery('nav.lista-menu a[href="#'+tag+'"]').stop().removeClass("seleccionado").stop();
        }
    })
}
