/*===============================================================================
                            services
            ================================================================================*/
$(function() {
    //    animate on scroll 
    new WOW().init();
});

/*===============================================================================
                work
================================================================================*/

$(function() {

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


/*===============================================================================
                team
================================================================================*/

$(function() {
    $("#team-members").owlCarousel({
        items: 3,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            }

        }

    });
});

/*===============================================================================
                testimonials
================================================================================*/

$(function() {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
    });
});
/*===============================================================================
                counter
================================================================================*/

$(function() {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/*===============================================================================
                clients
================================================================================*/

$(function() {
    $("#clients-lists").owlCarousel({
        items: 6,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            },
            // breakpoint from 992 up
            992: {
                items: 6
            }
        }
    });
});



/*===============================================================================
                navbar
================================================================================*/

//  navigator smooth scrolling 

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();

        }
    });
});

// smooth scroll

$(function() {
    $("a.smooth-scroll").click(function() {
        event.preventDefault();

        // get/return id like #about, #work #team ... 
        var section = $(this).attr("href");

        $('html,body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");

    });
});

// close mobile menu on click
$(function() {
    $(".navbar-collapse ul li a").on("click touch", function() {
        $(".navbar-toggle").click();
    });
});