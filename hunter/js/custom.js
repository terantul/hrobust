(function($) {

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
    function smoothScroll(e) {
        let tar = '#'+ $(e.target).attr('data-target');
        console.log(tar);
        $('html, body').animate({scrollTop:$(tar).position().top - 120}, 1000);
    }
    $('.smooth-btn').click(function(e){
        console.log(1);
        smoothScroll(e)
    });
})(jQuery);
