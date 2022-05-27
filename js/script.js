$(function ($) {

    ///  about slider
    
    $('.about-slider').slick({
        slidesToShow: 4,
        arrows: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });
});