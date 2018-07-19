(function($) {

    $('.slider-wrap').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        navText: ['', '']
    });
    $('.owl-nav').addClass('offset-md-5');

    $('.popup').click(function (e) {
        if (e.target.className.indexOf('js-popup-close') !== -1) {
            $(this).fadeOut();
        }
    });

    $('.check').on('change', function() {
        if($(this).hasClass('checked')) {
            $(this).removeClass('checked');
            $('.submit').attr('disabled', true);
        } else {
            $(this).addClass('checked');
            $('.submit').removeAttr('disabled');
        }
    })
    $('.js-popup-open').on('click', function() {
        $('.popup').fadeIn();
    });
})(jQuery);
