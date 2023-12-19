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
            nextEl: ".students-button-next",
            prevEl: ".students-button-prev",
        },
        pagination: {
            el: ".students-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });
})

$(document).ready(function(){
    var show_question = $('.show-question-d');

    show_question.each(function() {
        $(this).on('click', function() {
            var fa_question_item = $(this).parents('.fa-question-left-item');
            fa_question_item.toggleClass('active');
        });
      });

});

//xử lý hiển thị và chọn giá trị của select ở trang parents
$(document).ready(function(){
    $('.time-left-date select').each(function(){
        var classMonth = "";
        // if ($(this).attr('id') === 'month_d1'){
        //     classMonth = mount
        // }
        var $this = $(this), numberOfOptions = $(this).children('option').length;
        
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');
    
        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
      
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
      
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val(),
                value : $this.children('option').eq(i).val(),
                // class: 'text'
            }).appendTo($list);
            if ($this.children('option').eq(i).is(':selected')){
              $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
            }
        }
      
        var $listItems = $list.children('li');
      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
      
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.find('li.is-selected').removeClass('is-selected');
            $list.find('li[rel="' + $(this).attr('rel') + '"]').addClass('is-selected');
            $list.hide();
        });
      
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    
    });
})

// $(document).ready(function(){
//     function setDays(monthIndex) {
//         var daysCount = 31;
//         if(monthIndex=='january' || monthIndex=='march' || monthIndex=='may' ||
//         monthIndex=='july' || monthIndex=='august' || monthIndex=='october' ||
//         monthIndex=='december'){
//             daysCount=31;
//         }else if(monthIndex=='april' || monthIndex=='june' || monthIndex=='september' ||
//         monthIndex=='november'){
//             daysCount = 30;
//         }  
//         else{
//             daysCount = 28;
//         }
//         // console.log(daysCount);
//         var selectDay = $(".time-left-date #day_d1");
//         // var ulDay = $(".time-left-date-d1 .select-options").eq(0);
//         // console.log(ulDay.eq(0));
    
//         if (selectDay.length > 0) {
//             // console.log("dat")
//             var optionCount = selectDay.children('option').length;
//             // var liCount = ulDay.children('li').length;
    
//             if (optionCount < daysCount) {
//                 for (var i = optionCount; i < daysCount; i++) {
//                     selectDay.append($("<option></option>")
//                         .attr("value", i + 1)
//                         .text(i + 1));
//                     // liCount.append($("<li></li>")
//                     //     .rel(i+1)
//                     //     .attr("value", i + 1)
//                     //     .text(i + 1));
//                 }
//             } else {
//                 for (var i = daysCount; i < optionCount; i++) {
//                     selectDay.children('option[value=' + (i + 1) + ']').remove();
//                     // liCount.children('li[rel=' + (i + 1) + ']').remove();
//                 }
//             }
//         }
//     }

//     $(".time-left-date .select-options li").each(function(){
//         $(this).on( "click", function() {
//             var relValue = $(this).attr("rel");
//             setDays(relValue);
//         })
//     });
// })