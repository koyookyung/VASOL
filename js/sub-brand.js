$(function () {
  $('.header').load('../common/header.html');
  $('.footer').load('../common/footer.html');

  //vasol
  $(window).scroll(function(){
    let scrollBar = $(window).scrollTop();

    if(scrollBar >= 0) {
      $('.vasol .etc').each(function(index){
        $(this).addClass('on' + index)
      });
    } else if (scrollBar === 0) {
      $('.vasol .etc').each(function(index){
        $(this).removeClass('on' + index)
      });
    }
  });//scroll()

  //our story
  var swiper = new Swiper(".mini_slide", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });
  var swiper2 = new Swiper(".main_sldie", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });

  //vision
  $('.vision .item').mouseenter(function () {
    $(this).animate({
      'bottom': '100px'
    }, 1000, 'easeOutElastic')
  }).mouseleave(function () {
    $(this).animate({
      'bottom': '0'
    })
  })

  //with
  console.log($('.with').offset().top)
  let withTop = $('.with').offset().top;

  $(window).scroll(function () {
    let scrollBar = $(window).scrollTop();
    console.log(scrollBar)

    if (scrollBar >= 4000) {
      //alert()
      $('.with .box').each(function(index){
        $(this).addClass('on' + index)
      });
    } else if (scrollBar === 0) {
      $('.with .box').each(function(index){
        $(this).removeClass('on' + index)
      });
    }
  });//scroll()
});//script end