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
var banner; 
jQuery(window).on("load",function() {
        jQuery(".overlay").addClass("in");
	//jQuery(".overlay").fadeOut("slow",function(){
		jQuery("body").removeClass("preloader");
        //jQuery(".imagen-fondo").addClass("abierto");
	//});
    banner = jQuery(".banner").innerHeight();
    altura = jQuery(".cabecera").innerHeight();
    altura_secciones =  jQuery(window).height() - altura;
    if(jQuery(window).width() < 375)
    {
        jQuery(".fondo-imagen").css("height",altura_secciones);
    }else{
        jQuery(".fondo-imagen").css("height",altura_secciones - altura);
    }

    jQuery(".banner").css("padding-top",altura);

});


jQuery(window).resize(function() {
    setTimeout(function(){ 
        altura = jQuery(".cabecera").innerHeight();
        altura_secciones =  jQuery(window).height()  - altura;
        banner = jQuery(".banner").innerHeight();
        if(jQuery(window).width() < 375)
        {
            jQuery(".fondo-imagen").css("height",altura_secciones);
        }else{
            jQuery(".fondo-imagen").css("height",altura_secciones - altura);
        }
        
        jQuery(".banner").css("padding-top",altura);

    }, 1000);

    jQuery(".borde-conetendor-imagen").attr("style","");
    jQuery(".burguer").removeClass("open");
    jQuery("nav.lista-menu").removeClass("open");
});



jQuery(document).ready(function(){
     jQuery(".parallax").parallaxer();

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

	jQuery('nav.lista-menu a[href^="#"],.menu-desktop .contenedor-franja a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        jQuery(".burguer").removeClass("open");
        jQuery("nav.lista-menu").removeClass("open");
      
        var target = this.hash;
        var menu = target;
        target = jQuery(target); 
         if(jQuery(target).length > 0)
        { 
            jQuery("nav.lista-menu a,.menu-desktop .contenedor-franja a .circulo").removeClass("active");
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

    jQuery(".links-operaciones").click(function(e){
        e.preventDefault();
        var indice = jQuery(".links-operaciones").index(this);
        console.log(indice);
        jQuery(".links-operaciones").removeClass("abierto");
        jQuery(this).addClass("abierto");

        jQuery("#operaciones .contenedor-imagen").removeClass("abierto");
        jQuery("#operaciones .contenedor-imagen").eq(indice).addClass("abierto");
    });

    jQuery(".rojo .tab").click(function(){
        var indice = jQuery(".rojo .tab").index(this);
        jQuery(".rojo .tab").removeClass("active");
        jQuery(".rojo .cuerpo-tab").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".rojo .cuerpo-tab").eq(indice).addClass("active");
    });

    jQuery(".azul .tab").click(function(){
        var indice = jQuery(".azul .tab").index(this);
        jQuery(".azul .tab").removeClass("active");
        jQuery(".azul .cuerpo-tab").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".azul .cuerpo-tab").eq(indice).addClass("active");
    });

    jQuery(".amarillo .tab").click(function(){
        var indice = jQuery(".amarillo .tab").index(this);
        jQuery(".amarillo .tab").removeClass("active");
        jQuery(".amarillo .cuerpo-tab").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".amarillo .cuerpo-tab").eq(indice).addClass("active");
    });

    jQuery(".naranja .tab").click(function(){
        var indice = jQuery(".naranja .tab").index(this);
        jQuery(".naranja .tab").removeClass("active");
        jQuery(".naranja .cuerpo-tab").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".naranja .cuerpo-tab").eq(indice).addClass("active");
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

    jQuery('.grupo-slides-mobile').slick({
        dots: true,
        arrows: false,
        slidesToShow: true,
        slidesToScroll: true,
        infinite: false
    })
    
});

jQuery(document).on("click",".flecha",ocultar); 

function ocultar(event)
{
    event.preventDefault();
    jQuery(".flecha ").off("click");
    var n = jQuery(".contenido-texto .item-texto.is-active").index() + 1;
    var r = n;
    if (jQuery(this).hasClass("flecha-izquierda")) {
        r = n - 1;
    } else {
        r = n + 1;
    }

    movimiento(n, r);  
}

function movimiento(e, i)
{
    var t = jQuery(".contenedor-slider");
    var L = !1;

    t.find(".contenido-texto .item-texto:nth-child(" + e + ")").removeClass("in is-active") ;
    setTimeout(function() {
        t.find(".fondo-contenido-slide").addClass("out"); 
        t.find(".fondo-contenido-slide").one("transitionend", function(e) { 
            setTimeout(function() {
                t.find(".fondo-contenido-slide").removeClass("out").addClass("in");
            }, 50); 

            setTimeout(function() {
                t.find(".contenido-texto .item-texto:nth-child(" + i + ")").addClass("in is-active");
            }, 400)
        })
    }, 100);

    if (L = !0)
    {
        var n = "izquierdo";
        if(i > e)
        {
            n = "derecho";
        }

        t.find(".contenedor-imagenes").removeClass().addClass("contenedor-imagenes").addClass("noTransition").addClass(n), 
            setTimeout(function() {
                t.find(".contenedor-imagenes").removeClass("noTransition").addClass("withTransition"), 
                
                setTimeout(function() {
                    t.find(".contenedor-imagenes").removeClass("withTransition")
                }, 50), 

                t.find(".contenedor-imagenes .item-slide:nth-child(" + e + ")").removeClass("in").addClass("out"); 
                t.find(".contenedor-imagenes .item-slide:nth-child(" + i + ")").removeClass("out").addClass("in");  
                t.find(".contenedor-imagenes .item-slide:nth-child(" + e + ")").one("transitionend", function(n) {
                    t.find(".contenedor-imagenes .item-slide:nth-child(" + e + ")").removeClass("out").removeClass("is-active"); 
                    t.find(".contenedor-imagenes .item-slide:nth-child(" + i + ")").removeClass("in").addClass("is-active");  
                    t.find(".contenedor-imagenes .item-slide:nth-child(" + e + ")").one("transitionend", function(t) {
                        L = !1;
                    })
                })
            }, 50)
    } else
        t.find(".contenedor-imagenes .item-slide:nth-child(" + e + ")").removeClass("in").addClass("out"); 
        t.find(".contenedor-imagenes .item-slide:nth-child(" + i + ")").removeClass("out").addClass("in"); 
        t.find(".contenedor-imagenes .item-slide:nth-child(" + e + ")").one("transitionend", function(n) {
            t.find(".contenedor-imagenes .item-slide:nth-child(" + e + ")").removeClass("is-active"); 
            t.find(".contenedor-imagenes .item-slide:nth-child(" + i + ")").addClass("is-active");
            L = !1;
        })
    jQuery(".flecha ").on("click");
}

jQuery(document).on("scroll", onScroll);

function onScroll(event){
    var scrollPos = jQuery(document).scrollTop();

    if(scrollPos > (banner - altura))
    {
        jQuery(".menu-desktop").addClass("open");
    }else{
        jQuery(".menu-desktop").removeClass("open");
    }

    jQuery('section.seccion').each(function () {
        var currLink = jQuery(this);
        var tag = currLink.attr("id");

        if (Math.round(Math.round(currLink.offset().top) - altura) <= Math.round(scrollPos) && Math.round(Math.round(currLink.offset().top)  - altura) + Math.round(currLink.outerHeight()) > Math.round(scrollPos)) {
            jQuery(".menu-desktop a[href='#"+tag+"']").addClass("active");
            jQuery(".menu-desktop a[href='#"+tag+"'] .circulo").addClass("active");
        }else{
            jQuery(".menu-desktop a[href='#"+tag+"']").removeClass("active");            
            jQuery(".menu-desktop a[href='#"+tag+"'] .circulo").removeClass("active");
        }
    })
}


