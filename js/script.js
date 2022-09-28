$(document).ready(function () {
    'use strict';

    /* nicescroll */

    $('html').niceScroll({

        cursorcolor: '#E41B17',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px solid #E41B17'

    });

})

$(document).ready(function () {
    $('.carousel').carousel({
        interval: 6000
    });

    /* Show color option one clik on the gear */
    $('.gear-check ').click(function () {
        $('.color-box').fadeToggle();
    })

    /* Change color theme */

    var colorLi = $('.color-box ul li')

    colorLi
    .eq(0).css("backgroundColor","#E41B17").end()
    .eq(1).css("backgroundColor","#009AFF").end()
    .eq(2).css("backgroundColor","#FFD500").end()
    .eq(3).css("backgroundColor","#E426D5");

    colorLi.click(function () {
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    })

})

/* loanding screen */

$(document).ready(function () {
    $(".laoding-overlay .spinner").fadeOut(5000,function () {
        $("body").css("overflow","auto");
        $(this).parent().fadeOut(5000, function () {
            $(this).remove()
        });
    });
});

/* Scolltop */

$(document).ready(function () {
    var scrollButton = $('#scroll-top');
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    })
    scrollButton.click(function () {
        $("html,body").animate({scrollTop:0},600)
    })

})

