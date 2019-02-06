var HeroBottom = $('#header').offset().top + $('#header').height();

// on scroll,
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > HeroBottom) {
        $('.nav').addClass('pastHero');
    } else {
        $('.nav').removeClass('pastHero');
   }

});
