$(function(){

    //메뉴버튼
    $('.menu_btn').click(function () {
        $('.gnb').animate({
            'left': '0',
        }, 700)
    });//menu_btn.click()
    $('.close_btn').click(function () {
        $('.gnb').animate({
            'left': '-50%'
        }, 700)
    });//close_btn.click()

    //2차메뉴
    $('.gnb .depth01').click(function(){
        if($(this).next().css('display') === 'none') {
            $('.gnb .depth02').slideUp();
            $(this).next().slideDown();
            $('.gnb .depth01').css({
                'background-color' : '#faebd7',
                'color' : '#333'
            });
            $(this).css({
                'background-color' : '#fff',
                'color' : '#D3E1BE'
            })
        } else {
            $(this).next().slideUp();
            $(this).css({
                'background-color' : '#faebd7',
                'color' : '#333'
            })
        }
    })//depth01.click()
   
    $('.gnb .depth01').mouseenter(function(){
        $(this).css({
            'background-color' : '#fff',
            'color' : '#D3E1BE'
        });
    })//depth01.mouseenter()
    $('.gnb .depth01').mouseleave(function(){
        $(this).css({
            'background-color' : '#faebd7',
            'color' : '#333'
        });
    })//depth01.mouseover()

    //푸터
    setInterval(function () {
        $('.ft_top').toggleClass('active');
    }, 700, 'linear')

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