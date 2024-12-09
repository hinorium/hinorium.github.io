(function ($) {
    "use strict";

    /* -----------------------------------
           Login
    ----------------------------------- */
    $('.login-icon').on('click', function () {
        $('.login').addClass('login-open');
    });
    $('.close').on('click', function () {
        $('.login').removeClass('login-open');
    });

   
})(jQuery);

$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 100) {
            $('#go_top').css('display', 'flex');
        } else {
            $('#go_top').hide();
        }
    });
    $('#go_top').click(function(){
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });
});
