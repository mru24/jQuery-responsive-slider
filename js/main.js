$(document).ready(function() {

// *****************JQUERY SLIDER***********************

  const slider = $('#review-slider');
	const leftArrow = $('.slider-arrow.left');
	const rightArrow = $('.slider-arrow.right');
	const slides = $('.review-slide');

  var autoplay = true;

  $(slider).mouseover(function() {
    autoplay = false;
    console.log(autoplay);
  })

  // SLIDER DOTS
  const dotsContainer = $('#dots');

  for (var i = 0; i < slides.length; i++) {
    dotsContainer.append('<li class="dot"></li>');
  }

  const dot = $('.dot');
  $(dot[0]).addClass('active');

  const nextDot = function() {
    var active = $('.dot.active');
    active.removeClass('active');
    active.next().addClass('active');
    if(active.is(':last-child')) {
      $(dot[0]).addClass('active');
    }
  }
  const prevDot = function() {
    var active = $('.dot.active');
    active.removeClass('active');
    active.prev().addClass('active');
    if(active.is(':first-child')) {
      $(dot[dot.length - 1]).addClass('active');
    }
  }
  // SLIDER DOTS END



  const setHeight = function() {
    var height = $('.review-slide.active').css('height');
    // console.log(height);
    $(slider).css('height', height);
  }

	const nextSlide = function() {
		var active = $('.review-slide.active');
		var past = $('.review-slide.past');
		past.removeClass('past');
		active.removeClass('active');
		active.addClass('past');
		active.next().addClass('active');
		if(active.is(':last-child')) {
			$(slides[0]).addClass('active');
		}
    setHeight();
    nextDot();
	};

	const prevSlide = function() {
		var active = $('.review-slide.active');
		var past = $('.review-slide.past');
		active.removeClass('active');
		past.removeClass('past');
		past.addClass('active');
		past.prev().addClass('past');
		if(past.is(':first-child')) {
			$(slides[slides.length - 1]).addClass('past');
		}
    setHeight();
    prevDot();
	};

  var player = function() {
    setInterval(nextSlide, 3000);
  }
  var clearPlayer = function() {
    clearInterval(player);
  }

  // for (var i = 0; i < slides.length; i++) {
  //   $(dot[i]).click(function() {
  //     $(slides).removeClass('active');
  //     $(slides).removeClass('past');
  //     $(slides[i]).addClass('active');
  //     $(slides[i - 1]).addClass('past');
  //   });
  // };

  $(slides[0]).addClass('past');
  $(slides[1]).addClass('active');
  setHeight();

	leftArrow.click(function() {
    clearPlayer();
		nextSlide();
	});

	rightArrow.click(function() {
    clearPlayer();
		prevSlide();
	});

  // AUTO SLIDER
  if(autoplay) {
    player();
  }



// *****************JQUERY SLIDER END***********************




});
