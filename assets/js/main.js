// Owl Carosel Js code
$(document).ready(function(){
    // Mian slider activation
    $(".owl-carousel").owlCarousel({
        'items': 1,
        'loop':true,
        'autoplay':true,
        'autoplaySpeed':true
    });

    // Counter up 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
  });