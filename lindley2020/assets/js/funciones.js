var precarga;
var ruta;
var alto_header;

function onScroll(event){
    var scrollPos = jQuery(document).scrollTop();
    jQuery('section.seccion').each(function () {
        var currLink = jQuery(this);
        var tag = currLink.attr("id");
        if (Math.round(Math.round(currLink.offset().top) - alto_header) <= Math.round(scrollPos) && Math.round(Math.round(currLink.offset().top)  - alto_header) + Math.round(currLink.outerHeight()) > Math.round(scrollPos)) {
            jQuery('nav.menu a[href="#'+tag+'"],nav.menu-mobile a[href="#'+tag+'"]').stop().addClass("seleccionado");  
        }else{
            jQuery('nav.menu a[href="#'+tag+'"],nav.menu-mobile a[href="#'+tag+'"]').stop().removeClass("seleccionado").stop();
        }
    })
}

function intro()
{
    jQuery("body").removeClass("preloader");
    jQuery("header.cabecera").removeClass("escondido",function()
    {
        jQuery(".circulo .fondo-rojo").addClass("desaparecer");
        jQuery(".barra-roja-desktop,.barra-roja-mobile").removeClass("escondido");
    });
}


function carga()
{
    alto_header = Math.round(jQuery("header.cabecera").outerHeight()) + 1;
    var ancho = jQuery(window).width();
    var alto = jQuery(window).innerHeight();
    var alto_barra = jQuery(".barra-roja-mobile").innerHeight();

    jQuery("#loader").html("");

    if(ancho >= 992)
    {
        ruta = "assets/img/desktop/data.json";
    }else if(ancho >= 768 && ancho <= 991)
    {
        ruta = "assets/img/tablet/data.json";
    }else{
        ruta = "assets/img/mobile/data.json";
    }


    if(ancho < 992)
    {
        jQuery("#anexos").css({"margin-bottom":alto_barra});
    }else{
        jQuery("#anexos").attr("style","");
    }

    precarga = lottie.loadAnimation({
      container: document.getElementById('loader'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: ruta,
    });
    
    setTimeout(function(){

        jQuery(".barra-roja-desktop").css({"padding-top":alto_header - 1});
        lottie.play();
        precarga.addEventListener('complete', function() { 
            jQuery(".overlay").fadeOut("slow",function(){
                intro();
            });
        });

        if(window.location.hash)
        {
            var tag = window.location.hash;
            if(jQuery(tag).length > 0)
            {
                jQuery(document).off("scroll", onScroll);
                jQuery('nav.menu a[href="'+tag+'"],nav.menu-mobile a[href="'+tag+'"]').addClass("seleccionado");

                jQuery('html,body').animate({
                scrollTop: Math.round(jQuery(tag).offset().top) - alto_header + 1
                },600, 'swing',function(){
                    jQuery(document).on("scroll", onScroll);

                });
            }
        }
    },250);
}

jQuery(document).on("scroll", onScroll);
jQuery(window).on("load",function(){
    carga();
})

jQuery(window).resize(function() {
    carga();
});

jQuery(document).ready(function(){
    jQuery(".burguer").click(function(e){
        e.preventDefault();
        jQuery(".burguer i").toggleClass("fa-times");
        jQuery("nav.menu,nav.menu-mobile").toggleClass("open");
    });


	jQuery('nav.menu a[href^="#"],nav.menu-mobile a[href^="#"]').on('click', function (e) {
        e.preventDefault();
      
        var target = this.hash;
        var menu = target;
        target = jQuery(target); 


        if(target.length > 0)
        { 
            jQuery(".burguer").removeClass("open");
            jQuery("nav.menu,nav.menu-mobile").removeClass("open");
            jQuery("nav.menu a,nav.menu-mobile a").stop().removeClass("seleccionado");
            jQuery(this).addClass("seleccionado");

            jQuery(document).off("scroll", onScroll);
            jQuery('html, body').stop().animate({
                scrollTop: Math.round(target.offset().top) - alto_header + 1}, 600, 'swing', function () {
                //window.location.hash = menu;
                jQuery(document).on("scroll", onScroll);
                history.replaceState({},"",menu);
            });
        }
    });

    jQuery(".link-logo").click(function(e){
        e.preventDefault();

        var target = this.hash;
        var menu = target;
        target = jQuery(target);

        if(target.length > 0)
        { 
            jQuery(document).off("scroll", onScroll);
            jQuery('html, body').stop().animate({
                scrollTop: 0}, 600, 'swing', function () {
                //window.location.hash = menu;
                jQuery(document).on("scroll", onScroll);
                history.replaceState({},"",menu);
            });
        } 
    });


    jQuery('.grupo-redes .icono-red').click(function(e) {
        e.preventDefault();
        var url = jQuery(this).attr("href");
        var left = Number((screen.width / 2) - (700 / 2));
        var top = Number((screen.height / 2) - (500 / 2));
        window.open(url, "", 'height=500,width=500,top=' + top + ',left=' + left);
    });

    var owl1 = jQuery('.owl-carousel-1');
    owl1.owlCarousel({
        center: true,
        items : 3, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        margin:0,
        loop:true,
        autoplay:false,
        autoHeight: false,
      /*  autoplayTimeout:7000,*/
        autoplayHoverPause:false,
        dots:false,      
        responsive:{
            0:{
                items:1,
                autoHeight:true,
            },
            768:{
                items:3,
                autoHeight:true,
            },
            1200:{
                items:3,
                autoHeight:true,
            }
        }      
    });

    jQuery(".carrusel-control-left").click(function (e) {
        e.preventDefault();        
        owl1.trigger('prev.owl.carousel');
    });

    jQuery(".carrusel-control-right").click(function (e) {
        e.preventDefault();
        owl1.trigger('next.owl.carousel');
    });

    jQuery(".circulo-rojo").click(function(){
        jQuery(".fila-reporte").removeClass("activo");
        jQuery(this).closest(".fila-reporte").toggleClass("activo");
    });

    jQuery(".circulo-anexo").click(function(){
        jQuery(".bloque-circulo-anexos").removeClass("activo");
        jQuery(this).closest(".bloque-circulo-anexos").toggleClass("activo");
    });

    jQuery(".botonera .boton-barra").click(function(){
        var indice = jQuery(this).index();
        if(jQuery(this).hasClass("activo"))
        {
            jQuery(this).removeClass("activo");
            jQuery(".barra-iconos-mobile").eq(indice).removeClass("activo");
            
        }else{

            jQuery(".botonera .boton-barra").removeClass("activo");
            jQuery(".barra-iconos-mobile").removeClass("activo");
            jQuery(this).addClass("activo");
            jQuery(".barra-iconos-mobile").eq(indice).toggleClass("activo")
        }
    });


    jQuery(".capa").click(function(){
        var boton = jQuery(this).closest(".boton-seccion");
        boton.stop().toggleClass("abierto");
    });

});