
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 450) {
            $('.icon-container').css({
              'display': 'block'
            });
            $('.navbar-container').css({
              'background': '#92AAF9',
              'opacity': '0.6'
            });
            $('.navbar-container .navbar a ').css({
              'color': 'black'
            });
        } else {
            $('.icon-container').css({
                'display': 'none'
            });
            $('.scrollup').css({
                'cursor': 'pointer'
            });
            $('.navbar-container').css({
              'background': 'transparent'
            });
            $('.navbar-container .navbar a ').css({
              'color': '#5a5d7a'
            });
        }
    });
});

$(function () {
    $('.icon-container').click(function () {
        $('html').animate({ scrollTop: 0 }, 750);
        console.log("ANimate")
    });
    $('.icon-container').css({
        '':''
    })
});






