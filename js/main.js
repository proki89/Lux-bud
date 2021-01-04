$('.team-carousel').slick({
    autoplay: true,
    autoplaySpeed: 3500,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4
            }
        }
    ]
});

