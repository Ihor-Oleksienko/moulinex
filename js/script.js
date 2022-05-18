
$(document).ready(function() { 
	
$('#thumbs img').click(function(){
    $('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
});
	
	
$('.hamburger').click(function(){
    $('.hamburger-block, .hamburger-icons, .menu').toggleClass('open');
});
    
    
    $('.product-thumb').click(function(){
        $('.product-thumb').removeClass('active');
        $(this).addClass('active');
    });
    
    $('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
    
    var swiper = new Swiper('.product-img-swiper', {
      direction: 'horizontal',
      mousewheelControl: true,
      slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
          },
      breakpoints: {
        1023: {
          direction: 'vertical',
          spaceBetween: 15
        },
      }
    });
    
    var swiper = new Swiper('.survey-list', {
        direction: 'horizontal',
        mousewheelControl: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        roundLengths: true,
        navigation: {
        nextEl: '.survey-next',
        prevEl: '.survey-prev',
      },
        breakpoints: {
        900: {
          slidesPerView: 3,
            spaceBetween: 60,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 20
            
        },
      }
    });
    
   var swiper = new Swiper('.reviews-list', {
        direction: 'horizontal',
        mousewheelControl: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 12,
        roundLengths: true,
        navigation: {
        nextEl: '.reviews-next',
        prevEl: '.reviews-prev',
      },
       breakpoints: {
        900: {
          slidesPerView: 4
        },
        767: {
          slidesPerView: 2
        },
      }
    });
    
     var swiper = new Swiper('.video-list', {
        direction: 'horizontal',
        mousewheelControl: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
        nextEl: '.video-next',
        prevEl: '.video-prev',
      },
      breakpoints: {
        900: {
          slidesPerView: 3,
            spaceBetween: 34,
        },
        767: {
          slidesPerView: 2
        },
      }
    });
    
     
})	