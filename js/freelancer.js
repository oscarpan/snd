// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    $('#statistics').bind('inview', function (event, visible) {
        if (visible == true) {
            // Counter
            $('.counter').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count'),
                    durationTime = $this.attr('data-duration');
                $({ countNum: $this.text()}).animate({
                        countNum: countTo
                    },
                    {
                        duration: Math.floor(durationTime),
                        easing:'linear',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }
                    });
            });
        }
    });

    $('#testimonials-slider').slick({
        infinite: true,
        autoplay: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: true,
            }
        }]
    });

    $('#past-clients-slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                dots: true,
            }
        }]
    });



    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict
