$(function () {
  $('.header').load('../common/header.html');
  $('.footer').load('../common/footer.html');

  //vasol
  $('.vasol .etc').each(function(index){
    //$(this).addClass('on'+ index);
    $(this).delay(100 * index).animate({
      opacity : 1
  }, 4000, 'easeInOutBounce');
  });

  $(window).scroll(function(){
    let scrollBar = $(window).scrollTop();

    if(scrollBar === 0) {
      $('.vasol .etc').each(function(index){
        $(this).removeClass('on' + index)
      });
    }
  });//scroll()

  //our story
  var swiper = new Swiper(".mini_slide", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      980: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1370: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      790: {
        slidesPerView: 4,
        spaceBetween: 35,
      },
      520: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
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
    $('.vision #pc .item').mouseenter(function () {
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
  let visionTop = $('.vision').offset().top;

  $(window).scroll(function () {
    let scrollBar = $(window).scrollTop();
    console.log(scrollBar)

    if (scrollBar > visionTop - 500) {
      //alert()
      $('.with .box').each(function(index){
        $(this).addClass('on' + index)
      });
    } else if (scrollBar === 0) {
      $('.with .box').each(function(index){
        $(this).removeClass('on' + index)
      });
    }

    if(matchMedia("screen and (max-width: 520px)").matches) {
      if (scrollBar > visionTop - 580) {
        //alert()
        $('.with .box').each(function(index){
          $(this).addClass('on' + index)
        });
      } else if (scrollBar === 0) {
        $('.with .box').each(function(index){
          $(this).removeClass('on' + index)
        });
      }
    }
  });//scroll()
});//script end