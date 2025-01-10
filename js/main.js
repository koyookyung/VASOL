$(function () {

    $('.header').load('common/header.html');
    $('.footer').load('common/footer.html');

    //brand
    setInterval(function(){
        $('.brand .image').toggleClass('active')
    }, 1000);

    //event
    var swiper = new Swiper(".event_slide", {
        direction: "vertical",
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      
      $('.event .item').mouseenter(function(){
        $('.event .cat').toggleClass('active');
      });//item.mouseenter()

    //review
    var swiper = new Swiper(".review_slide", {
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});//script end