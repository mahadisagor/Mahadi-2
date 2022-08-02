$(function(){

    $('.slider-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        vertical:true,
        nextArrow:'.up',
        prevArrow:'.down',
        arrows:true,
        centerMode:true,
        centerPadding:false,
      });

});