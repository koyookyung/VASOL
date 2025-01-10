$(function(){
    //메뉴버튼
    $('.menu_btn').click(function () {
        $('.gnb').animate({
            'left': '0',
        }, 700)
    });//menu_btn.click()
    $('.close_btn').click(function () {
        $('.gnb').animate({
            'left': '-25%'
        }, 700)
    });//close_btn.click()

    //2차메뉴
    $('.gnb .text > li').mouseenter(function () {
        $(this).find('.depth02').stop().slideDown()
    }).mouseleave(function () {
        $(this).find('.depth02').stop().slideUp()
    });

    //푸터
    setInterval(function () {
        $('.ft_top').toggleClass('active');
    }, 1000, 'linear')

    //탑버튼
    let topBtn = $('.top_btn');

    topBtn.click(function () {
        $('html, body').animate({
            scrollTop: 0
        });
    });//topBtn.click()

    //console.log($('.main_menu').offset().top)

    $(window).scroll(function () {
        let scrollBar = $(window).scrollTop();
        console.log(scrollBar);

        if (scrollBar > 600) {
            
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut()
        }
    });//window.scroll()
});//script end