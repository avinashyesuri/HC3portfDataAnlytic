var typed = new Typed(".text",{
    strings:[ "Data Analyst", "Data Visualization Specialist","Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});



$('.slider_a').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        const offset = 502 - (502 * percentage) / 100;
        bar.style.strokeDashoffset = offset;
    });
});

$(document).ready(function() {
    // Initially show the services section
    $('#services').show();

    // Handle the toggle button click event
    $('#toggle-services').click(function() {
        // Check if the services section is visible
        if ($('#services').is(':visible')) {
            // Hide the services section
            $('#services').hide();
        } else {
            // Show the services section
            $('#services').show();
        }
    });
});


$(document).ready(function() {
    $('#toggle-contact-form').click(function() {
        var $contactForm = $('.contact-form');
        
        if ($contactForm.hasClass('fade-in')) {
            $contactForm.removeClass('fade-in').addClass('fade-out');
            setTimeout(function() {
                $contactForm.hide(); // Hide element after animation
            }, 1000); // Match the CSS animation duration
        } else {
            $contactForm.show(); // Show element before animation
            $contactForm.removeClass('fade-out').addClass('fade-in');
        }
    });
});
