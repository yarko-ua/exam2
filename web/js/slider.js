$('header').slick({
    infinite: true,
    dots: true,
    dotsClass: 'header-dots',
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 200,
    accessibility: true,
    arrows: false,
    appendDots: $('.header'),
    adaptiveHeight: true,
});

$('.news-slider').slick({
    accessibility: true,
    dots: true,
    dotsClass: 'news-dots',
    prevArrow: '<div class="prev"><i class="fas fa-angle-left"></i></div>',
    nextArrow: '<div class="next"><i class="fas fa-angle-right"></i></div>',
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    respondTo: 'window',
    responsive: [
        {
            breakpoint: 2000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 958,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});