$(function () {

    $('.header').load('common/header.html');
    $('.footer').load('common/footer.html');

    //brand
    setInterval(function(){
        $('.brand .image').toggleClass('active')
    }, 1000);

    //best
    var swiper = new Swiper(".best_slide", {
        slidesPerView: 2,
        spaceBetween: 15,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints : {
            1100 : {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            830 : {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            500 : {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
      });

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

window.onload = () => {

    //event
    let itemList = document.querySelectorAll('.event .item_wrap');
    let prevBtn = document.querySelector('.event .btn .prev');
    let nextBtn = document.querySelector('.event .btn .next');

    let i = 0;
    nextBtn.addEventListener('click', () => {
        i++;
        console.log(nextBtn);
        if (i >= itemList.length) {
            i = 0;
        }
        itemList.forEach(item => {
            item.classList.remove('on');
        })
        itemList[i].classList.add('on');
    });//nextBtn.click()
    prevBtn.addEventListener('click', () => {
        i--;
        if(i < 0) {
            i = itemList.length -1;
        }
        itemList.forEach(item => {
            item.classList.remove('on');
        });
        itemList[i].classList.add('on');
    });//prevBtn.click()
}