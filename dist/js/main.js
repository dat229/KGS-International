$(document).ready(function(){
    $(window).scroll(function(event){
        var body = $('html,body').scrollTop();
        if(body > 80){
            $('.header').addClass('scroll');
        }
        else {
            $('.header').removeClass('scroll');
        }
    })

    $(window).scroll(function(event){
        var body = $('html,body').scrollTop();
        if(body > 120){
            $('.header-tablet').addClass('scroll');
        }
        else {
            $('.header-tablet').removeClass('scroll');
        }
    })

    $(window).scroll(function(event){
        var body = $('html,body').scrollTop();
        if(body > 80){
            $('.header-mobile').addClass('scroll');
        }
        else {
            $('.header-mobile').removeClass('scroll');
        }
    })
})


$(document).ready(function(){
    $('.header-mobile-icon').on("click", function() {
        $('.header-mobile-menu').addClass('show');
        // $('.gray-close').addClass('show');
    });

    $('.header-mobile-menu-close').on("click", function() {
        $('.header-mobile-menu').removeClass('show');
        // $('.gray-close').removeClass('show');
    });

})
  