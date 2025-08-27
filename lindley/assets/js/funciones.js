/*var slideRight = new Menu({
    wrapper: '#o-wrapper',
    type: 'slide-right',
    menuOpenerClass: '.c-button',
    maskId: '#c-mask'
});

jQuery(document).on('click', '#c-button--slide-right', function(e) {
    e.preventDefault;
    slideRight.open();
});*/

var altura = jQuery(".cabecera-desktop").innerHeight();

jQuery(window).on("load",function() {
	jQuery(".overlay").fadeOut("slow",function(){
		jQuery("body").removeClass("preloader");
        jQuery(".imagen-fondo").addClass("abierto");

        intro();
	});

    
});

function intro()
{
    jQuery("header.cabecera").removeClass("escondido",function(){
        setTimeout(function(){
            jQuery(".imagen-giratoria").addClass("girar");
            setInterval(function(){
                jQuery(".imagen-carrusel").toggleClass("active");
            }, 3500);
        },1500);
        
    });
}

jQuery(window).resize(function() {
    altura = jQuery(".cabecera-desktop").innerHeight();
});

jQuery(document).ready(function(){

    var wow = new WOW();
    wow.init();

    jQuery(".burguer").click(function(e){
        e.preventDefault();
        jQuery(".burguer").toggleClass("open");
        jQuery("nav.lista-menu").toggleClass("open");
    });


	jQuery('nav.lista-menu a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        jQuery(".burguer").removeClass("open");
        jQuery("nav.lista-menu").removeClass("open");
      
        var target = this.hash;
        var menu = target;
        target = jQuery(target); 


        if(jQuery(target).length > 0)
        { 
            jQuery("nav.lista-menu a").removeClass("active");
            jQuery(this).addClass("active");

            setTimeout(function(){
                jQuery('html, body').stop().animate({
                    'scrollTop': target.offset().top - altura}, 600, 'swing', function () {
                    //window.location.hash = menu;
                });
             },400);
        }
    });

    jQuery(".hitos .previo-hito").click(function(){
        jQuery(".hitos .detalle").removeClass("activo");
        jQuery(".hitos .previo-hito").addClass("activo");
        jQuery(this).removeClass("activo");
        var indice = jQuery(".hitos .previo-hito").index(this);

        jQuery(".hitos .detalle").eq(indice).addClass("activo");
    });

    jQuery(".hitos .detalle").click(function(){
        jQuery(".hitos .detalle").removeClass("activo");
        jQuery(".hitos .previo-hito").addClass("activo");
        jQuery(this).removeClass("activo");
        var indice = jQuery(".hitos .detalle").index(this);

        jQuery(".hitos .previo-hito").eq(indice).addClass("activo");
    });


    var owl1 = jQuery('.owl-carousel-1');
    owl1.owlCarousel({
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        margin:5,
        loop:true,
        autoplay:false,
      /*  autoplayTimeout:7000,*/
        autoplayHoverPause:false,
        dots:true,      
        responsive:{
            0:{
                items:1,
                autoHeight:true,
            },
            768:{
                items:1,
                autoHeight:true,
            }
        }      
    });

    jQuery(".carrusel-control.left").click(function (e) {
        e.preventDefault();        
        owl1.trigger('prev.owl.carousel');
    });

    jQuery(".carrusel-control.right").click(function (e) {
        e.preventDefault();
        owl1.trigger('next.owl.carousel');
    });
});

jQuery('.bloque-columna-rosada').on('mouseenter touchstart', function(){ 
     jQuery(this).addClass("abierto");
});

jQuery('.bloque-columna-rosada').on('mouseleave touchend', function(){
     jQuery(this).removeClass("abierto");
});