jQuery(function () {
    jQuery(".testimonials-content").owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            800:{
                items:3,
            },
            1500:{
                items:3,
            }
        }
    });
});