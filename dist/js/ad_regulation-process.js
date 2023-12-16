$(document).ready(function(){
    var leftAd =  $(".ad-regulation-left");
    var leftContent = $(".ad-regulation-left .content");
    var rightAd = $(".ad-regulation-right");

    var heightTop = 150;

    if ($(window).width() > 992) {
        heightTop = 150;
    }
    else if ($(window).width() > 769) {
        heightTop = 90;
    }
    else if ($(window).width() > 667) {
        heightTop = 90;
    }
    else{
        heightTop = 80;
    }
    console.log(rightAd)
    if(leftAd.length>0 && leftContent.length>0 && rightAd.length >0){
        $(window).on("scroll", function() {
        var scrollTop = $(this).scrollTop();
        var rightAdBottom = rightAd.offset().top + rightAd.height();
        //   var leftAdBottom = leftAd.offset().top + leftAd.height();

        if (scrollTop >= rightAdBottom - leftContent.height()- heightTop) {
            leftContent.css({position: "static", top: rightAdBottom - leftAd.height() });
        } else {
            leftContent.css({position: "fixed", top: heightTop});
        }

        if (scrollTop <= rightAd.offset().top) {
            leftContent.css({position: "static"});
        }

        leftContent.width(leftAd.width());
        });
    }
  });

  $(document).ready(function(){

    var listGroupItem = $('a.list-group-item');
  
      $(document).scroll(function(){
          listGroupItem.each(function(){
              var container = $(this).attr('href');
              var containerOffset = $(container).offset().top;
              var containerHeight = $(container).outerHeight();
              var containerBottom = containerOffset + containerHeight;
              var scrollPosition = $(document).scrollTop()+100;
      
              if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                  $(this).addClass('active');
              } else{
                  $(this).removeClass('active');
              }
          });
      });
  
  });