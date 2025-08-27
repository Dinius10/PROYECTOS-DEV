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
var altura;

jQuery(window).on("load",function() {

	jQuery(".overlay").fadeOut("slow",function(){
		jQuery("body").removeClass("preloader");
        jQuery(".imagen-fondo").addClass("abierto");
        intro();
	});
    altura = jQuery(".cabecera").innerHeight();
    jQuery(".banner").css("padding-top",altura);
    
});

function intro()
{
    jQuery(".banner .contenedor-triangulo").addClass("active");
    jQuery(".banner .lista-imagenes").addClass("active");
}

jQuery(window).resize(function() {
    setTimeout(function(){ 
        altura = jQuery(".cabecera").innerHeight();
        jQuery(".banner").css("padding-top",altura);
    }, 1000);

    jQuery(".borde-conetendor-imagen").attr("style","");
    jQuery(".burguer").removeClass("open");
    jQuery("nav.lista-menu").removeClass("open");
});

jQuery(document).ready(function(){

  /*  jQuery("#telefono").keypress(function(e) {
        var r = e.keyCode || e.which;
        return r > 45 && r < 65 || 8 == r
    });

    jQuery('#carouselExampleIndicators').carousel({
      interval: 4000
    })*/

    var wow = new WOW();
    wow.init();

    jQuery(".burguer").click(function(e){
        e.preventDefault();
        altura = jQuery(".cabecera").innerHeight();
        jQuery("nav.lista-menu").css("padding-top",altura);
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

    jQuery(".links-operaciones").click(function(e){
        e.preventDefault();
        var indice = jQuery(".links-operaciones").index(this);
        console.log(indice);
        jQuery(".links-operaciones").removeClass("abierto");
        jQuery(this).addClass("abierto");

        jQuery("#operaciones .contenedor-imagen").removeClass("abierto");
        jQuery("#operaciones .contenedor-imagen").eq(indice).addClass("abierto");

    });

    jQuery(".seccion").each(function(t, e) {
        
            cambios(e);
        
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

function cambios(e)
{
    
    var i, n, r, a, c = jQuery(e);

    l = c.find(".contenedor-imagen");

    l.on("mouseenter", function() {
        if(jQuery(window).width() >= 768)
        {
            (n = jQuery(this).find(".borde-conetendor-imagen")).off("transitionend.reduce"); 
            i = n.find("img"); 
            a = n.width(); 
            r = n.height(); 
            n.css({
                height: r,
                width: a
            }); 

            jQuery(this).addClass("active"); 
            i.addClass("active"); 

            jQuery(e).find(".columna-contenido  .cuerpo-contenido").addClass("active");
            c.find(".btn-descarga").addClass("active");;

            n.css({
                right: i.data("right"),
                left: i.data("left"),
                width: i.data("width")
            });
        }
    });

    l.on("mouseleave", function() {
        if(jQuery(window).width() >= 768)
        {
            n.on("transitionend.reduce", function(){
                jQuery(this).css({
                    height: "100% !important",
                    width: "100% !important"
                });
            }); 

            jQuery(this).removeClass("active"); 
            i.removeClass("active"); 
            jQuery(".columna-contenido .cuerpo-contenido").removeClass("active");
            c.find(".btn-descarga").removeClass("active");;
            if(i.data("right") == "auto")
            {
                n.css({
                    left: 0,
                    width: "100%"
                })
            }else{
                n.css({
                    right: 0,
                    width: "100%"
                })
            }
        }
    });
}


jQuery('.bloque-columna-rosada').on('mouseenter touchstart', function(){ 
     jQuery(this).addClass("abierto");
});

jQuery('.bloque-columna-rosada').on('mouseleave touchend', function(){
     jQuery(this).removeClass("abierto");
});