$(document).ready(function(){
    $('.p-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        cssEase: 'ease-in-out',
        speed: 1080,
        fade: false,
        focus: 'center',
        centerMode: true, // Enable center mode
        centerPadding: '0', // Adjust padding as needed
    });
    // Add this inside your document ready function
  $('.p-wrapper').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.p-box').removeClass('center blur');
    $('.p-box[data-slick-index="' + nextSlide + '"]').addClass('center');
    $('.p-box[data-slick-index="' + (nextSlide - 1) + '"]').addClass('blur');
    $('.p-box[data-slick-index="' + (nextSlide + 1) + '"]').addClass('blur');
  });
});
