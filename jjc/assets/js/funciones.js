var alto_mobile = 0;

jQuery(window).on("load",function() {
    jQuery(".overlay").fadeOut("slow",function(){
        jQuery("body").removeClass("preloader");
        jQuery(".imagen-fondo").addClass("abierto");
        jQuery(".triangulo").addClass("activo");
        jQuery("nav.lista-menu").addClass("activo");
        jQuery("header.cabecera-mobile").addClass("activo");
        intro();
    });
});

function intro()
{

    if(jQuery(window).width() <= 767)
    {
        alto_mobile = Math.round(jQuery("header.cabecera-mobile").outerHeight()) + 1;
    }else{
        alto_mobile = 0;
    }

    if(window.location.hash)
    {
        var tag = window.location.hash;

        if(tag == "#inicio")
        {
            alto_mobile = 0;
        }

        if(jQuery(tag).length > 0)
        {
            jQuery(document).off("scroll", onScroll);
            jQuery('nav.lista-menu a[href="'+tag+'"]').addClass("activo");
            jQuery(tag).addClass("activo");
            jQuery('html,body').animate({
            scrollTop: Math.round(jQuery(tag).offset().top) - alto_mobile
            },1000, 'swing',function(){
                jQuery(document).on("scroll", onScroll);
            });
        }

    }
}

jQuery(window).resize(function() {
    if(jQuery(window).width() <= 767)
    {
        alto_mobile = Math.round(jQuery("header.cabecera-mobile").outerHeight()) + 2;
    }else{
        alto_mobile = 0;
    }
});

jQuery(document).ready(function(){
    var wow = new WOW();
    wow.init();

	jQuery('nav.lista-menu a[href^="#"],a.linklogo').on('click', function (e) {
        e.preventDefault();
        
        var target = this.hash;
        target = jQuery(target); 
        if(target.length > 0)
        { 
            var alto = Math.round(target.offset().top) - alto_mobile;
            jQuery(".seccion").removeClass("activo");
            jQuery("nav.lista-menu a").stop().removeClass("activo");
            jQuery(this).addClass("activo");
            target.stop().addClass("activo");
            jQuery(document).off("scroll", onScroll);
            jQuery('html, body').stop().animate({
                'scrollTop': alto}, 600, 'swing', function () {
                jQuery(document).on("scroll", onScroll);
            });
        }
    });
});

jQuery(document).on("scroll", onScroll);

function onScroll(event){
    var scrollPos = jQuery(document).scrollTop();
    jQuery('section.seccion').each(function () {
        var currLink = jQuery(this);
        var tag = currLink.attr("id");
     
        if (Math.round(Math.round(currLink.offset().top) - alto_mobile) <= Math.round(scrollPos) && Math.round(Math.round(currLink.offset().top)  - alto_mobile) + Math.round(currLink.outerHeight()) > Math.round(scrollPos)) {
            currLink.addClass("activo");
            jQuery('nav.lista-menu a[href="#'+tag+'"]').stop().addClass("activo");  
        }else{

             currLink.removeClass("activo")
            jQuery('nav.lista-menu a[href="#'+tag+'"]').stop().removeClass("activo").stop();
        }
    })
}