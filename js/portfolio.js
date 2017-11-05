$(document).ready(function(){

  $(window).resize(function() { // Enter in the function when the window is rezised
    console.log($(window).height());
    $('#content, #about, #services, #skills, #portfolio, #footer').height($(window).height()); // Set the height of the window to the .content
  });

  $(window).trigger('resize'); // Add listener to resize function

  $(window).scroll(function(){
    var $scrollTop = $(window).scrollTop(),
        $windowHeight = $(window).height();

    if($scrollTop > 0) {
        $("nav").addClass("fixed");
    }
    else {
        $("nav").removeClass("fixed");
    }
  });

	$('.js-scrollTo').on('click', function() { // On click on the anchor .js-scrollTo
		var page = $(this).attr('href'); // Select the href

		$('html, body').animate( { scrollTop: $(page).offset().top }, 600 ); // Scroll animation
		return false;
	});

  (function($) {
    "use strict";

    $(".bar").each(function() {
      var $bar = $(this),
          $pct = $bar.find(".pct"),
          data = $bar.data("bar");
      setTimeout(function() {
        $bar
          .css("background-color", data.color)
          .animate({
            "width": $pct.html()
        }, data.speed || 2000, function() {
          $pct.css({
            "color": data.color,
            "opacity": 1
          });
        });
      }, data.delay || 0);
    });
  })(jQuery);

  setTimeout(function(){

  }, 3000);

  // var mySwiper = new Swiper ('.swiper-container', {
  //   effect: 'coverflow',
  //   centeredSlides: true,
  //   slidesPerView: 1.5,
  //   loop: true,
  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows : false,
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // })
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 1.5,
    loop: true,
    keyboard: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
