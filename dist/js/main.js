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
        if(body > 110){
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

$(document).ready(function(){
    var language_list = $('.language-list-item');

    language_list.on('click', function() {
        var languageListContainer = $(this).closest('.language-list');
    
        if (languageListContainer.length > 0) {
            var languageMain = languageListContainer.siblings('.language-main');
            
            if (languageMain.length > 0) {
                var picture_language = $(this).find('picture img').attr('src');
                var name_language = $(this).find('.language-list-item-text').text();
    
                var pictureMain = languageMain.find('picture img')[0];
                var textMain = languageMain.find('.text span')[0];

                if (pictureMain && textMain) {
                    pictureMain.src = picture_language;
                    textMain.textContent = name_language;
                }
            }
        }
    });


    var languageMain = $('.language-main');

    languageMain.on('click', function() {
        var languageList = $(this).siblings('.language-list');

        if (languageList.length > 0) {
            var languageListElement = languageList.first();
            languageListElement.toggleClass('show-language')
            // if (languageListElement.hasClass('show-language')) {
            //     languageListElement.removeClass('show-language');
            // } else {
            //     languageListElement.addClass('show-language');
            // }
        }
    });

})

// $(document).on('click', function(event) {
//     var clickedElement = $(event.target);

//     if (!clickedElement.hasClass('show-language') && !clickedElement.hasClass('language-main')
//     && !clickedElement.hasClass('header-mobile-support-language') && !clickedElement.hasClass('header-tablet-top-support-language')
//     && !clickedElement.hasClass('header-support-language')) {
//         console.log("dat")
//         $('.language-list.show-language').removeClass('show-language');
//     }
// });

$(document).ready(function(){
    var swiper = new Swiper(".swiper-graduated-student", {
        cssMode: true,
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            480: {
              slidesPerView: 2,
            //   spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
            //   spaceBetween: 40,
            },
            991: {
              slidesPerView: 4,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });
})