if (typeof youplay !== 'undefined') {
    youplay.init({
        parallax: true,
        navbarSmall: false,
        fadeBetweenPages: true,
        php: {
            twitter: './php/twitter/tweet/php',
            instagram: './php/instagram/instagram.php'
        }
    });
}

$(".countdown").each(function () {
    $(this).countdown($(this).attr('data-end'),
        $(this).html(
            event.strftime([
                '<div class="countdown-item">',
                '<span>Days</span>',
                '<span><span>%D</span></span>',
                '</div>',
                '<div class="countdown-item">',
                '<span>Hours/span>',
                '<span><span>%H</span></span>',
                '</div>',
                '<div class="countdown-item">',
                '<span>Minutes</span>',
                '<span><span>%M</span></span>',
                '</div>',
                '<div class="countdown-item">',
                '<span>Seconds</span>',
                '<span><span>%S</span></span>',
                '</div>'
            ].join(''))
        ));
});


$(document).ready(function () {
    $('.video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    $('.mfp-youtube').click(function () {
        return false;
    });
});

