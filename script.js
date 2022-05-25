$(document).ready(function() {

    $('.fa-hamburger').click(function() {
        $(this).toggleClass('fa-times');
        console.log('c1');
        $('nav').toggleClass('nav-toggle');
        console.log('c2');
    })

    $('.dot1').click(function() {

        $('.vid1').css('display', 'block');
        $('.vid2').css('display', 'none');
        $('.vid3').css('display', 'none');
    })

    $('.dot2').click(function() {

        $('.vid1').css('display', 'none');
        $('.vid2').css('display', 'block');
        $('.vid3').css('display', 'none');
    })

    $('.dot3').click(function() {

        $('.vid1').css('display', 'none');
        $('.vid2').css('display', 'none');
        $('.vid3').css('display', 'block');
    })

    $(window).on('scroll load',function() {

        if($(window).scrollTop() > 10) {

            $('.header').addClass('header-active')
          
        }else{
            $('.header').removeClass('header-active')
        }
    })
})