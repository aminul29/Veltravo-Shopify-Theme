jQuery( document ).ready(function( $ ) {
"use strict"
/*-----------------------------------------------------------------------------------*/
/* 	LOADER
/*-----------------------------------------------------------------------------------*/
$("#loader").delay(1000).fadeOut("slow");
/*-----------------------------------------------------------------------------------*/
/*		STICKY NAVIGATION
/*-----------------------------------------------------------------------------------*/
$(".sticky").sticky({topSpacing:0});
/*-----------------------------------------------------------------------------------*/
/*  FULL SCREEN
/*-----------------------------------------------------------------------------------*/
$('.full-screen').superslides({});
/*-----------------------------------------------------------------------------------
    Animated progress bars
/*-----------------------------------------------------------------------------------*/
$('.progress-bars').waypoint(function() {
  $('.progress').each(function(){
    $(this).find('.progress-bar').animate({
      width:$(this).attr('data-percent')
     },200);
});},
	{ 
	offset: '100%',
    triggerOnce: true 
});
/* ==========================================================================
    countdown timer
========================================================================== */
$('.countdown').downCount({
     date: '12/12/2018 12:00:00' // M/D/Y
});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE PORTFOLIO
/*-----------------------------------------------------------------------------------*/
var $container = $('.port-wrap .items');
    $container.imagesLoaded(function () {
    $container.isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'masonry'
});	
});
$('.portfolio-filter li a').on('click', function () {
    $('.portfolio-filter li a').removeClass('active');
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector
    });
return false;
});
//Togle Menu on click in Header
$(".menu-shows").on('click', function(){
	$(".menu-shows, .menu-shows-inner, .menu").toggleClass("active");
});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE PORTFOLIO
/*-----------------------------------------------------------------------------------*/
var $container = $('.port-wrap .items');
    $container.imagesLoaded(function () {
    $container.isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'masonry'
});	
});
$('.portfolio-filter li a').on('click', function () {
    $('.portfolio-filter li a').removeClass('active');
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector
    });
return false;
});
/*-----------------------------------------------------------------------------------*/
/*    PIE CHART
/*-----------------------------------------------------------------------------------*/
$('#pie-1').pieChart({
	barColor: '#8c5f0b',
    trackColor: '#fff',
    lineCap: 'round',
    lineWidth: 4,
    	onStep: function (from, to, percent) {
    		$(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
});
$('#pie-2').pieChart({
	barColor: '#8c5f0b',
    trackColor: '#fff',
    lineCap: 'round',
    lineWidth: 4,
    	onStep: function (from, to, percent) {
    	$(this.element).find('.pie-value').text(Math.round(percent) + '%');
	}
});
$('#pie-3').pieChart({
	barColor: '#8c5f0b',
    trackColor: '#fff',
    lineCap: 'round',
    lineWidth: 4,
    	onStep: function (from, to, percent) {
        	$(this.element).find('.pie-value').text(Math.round(percent) + '%');
		}
});
$('#pie-4').pieChart({
	barColor: '#8c5f0b',
    trackColor: '#fff',
    lineCap: 'round',
    lineWidth: 4,
    	onStep: function (from, to, percent) {
        	$(this.element).find('.pie-value').text(Math.round(percent) + '%');
		}
});


/*-----------------------------------------------------------------------------------*/
/*    Parallax
/*-----------------------------------------------------------------------------------*/
jQuery.stellar && jQuery.stellar({
   horizontalScrolling: false,
   scrollProperty: 'scroll',
   positionProperty: 'position',
});

var initRevolutionSlider = function (selector, options, shouldShow) {
	if (typeof $.fn.revolution !== "function") {
		return;
	}
	$(selector).each(function () {
		var $slider = $(this);
		var sliderOptions = $.extend({}, options);
		var customDelay = parseInt($slider.attr("data-rev-delay"), 10);
		var customGridHeight = parseInt($slider.attr("data-rev-gridheight"), 10);
		var customMinHeight = parseInt($slider.attr("data-rev-min-height"), 10);
		var customStopAtSlide = parseInt($slider.attr("data-rev-stop-at-slide"), 10);
		var customStopAfterLoops = parseInt($slider.attr("data-rev-stop-after-loops"), 10);
		var customNavigationType = $slider.attr("data-rev-navigation-type");
		var customNavigationArrows = $slider.attr("data-rev-navigation-arrows");
		var customStopLoop = $slider.attr("data-rev-stop-loop");

		if ($slider.data("rev-initialized") || $slider.hasClass("revslider-initialised")) {
			return;
		}

		if (!isNaN(customDelay) && customDelay > 0) {
			sliderOptions.delay = customDelay;
		}
		if (!isNaN(customGridHeight) && customGridHeight > 0) {
			sliderOptions.gridheight = customGridHeight;
		}
		if (!isNaN(customMinHeight) && customMinHeight > 0) {
			sliderOptions.minHeight = customMinHeight;
		}
		if (customNavigationType) {
			sliderOptions.navigationType = customNavigationType;
		}
		if (customNavigationArrows) {
			sliderOptions.navigationArrows = customNavigationArrows;
		}
		if (customStopLoop) {
			sliderOptions.stopLoop = customStopLoop;
		}
		if (!isNaN(customStopAtSlide) && customStopAtSlide > 0) {
			sliderOptions.stopAtSlide = customStopAtSlide;
		}
		if (!isNaN(customStopAfterLoops) && customStopAfterLoops >= 0) {
			sliderOptions.stopAfterLoops = customStopAfterLoops;
		}

		if (shouldShow) {
			$slider.show();
		}
		$slider.revolution(sliderOptions);
		$slider.data("rev-initialized", true);
	});
};

var initOwlSlider = function (selector, options) {
	if (typeof $.fn.owlCarousel !== "function") {
		return;
	}
	$(selector).each(function () {
		var $carousel = $(this);
		if ($carousel.hasClass("owl-loaded")) {
			return;
		}
		$carousel.owlCarousel(options);
	});
};

var initFlexSlider = function (selector, options) {
	if (typeof $.fn.flexslider !== "function") {
		return;
	}
	$(selector).each(function () {
		var $slider = $(this);
		if ($slider.data("flexslider")) {
			return;
		}
		$slider.flexslider(options);
	});
};

var initCarousels = function () {
	/*-----------------------------------------------------------------------------------*/
	/* 	SLIDER REVOLUTION
	/*-----------------------------------------------------------------------------------*/
	initRevolutionSlider(".tp-banner", {
		sliderType:"standard",
		sliderLayout:"auto",
		delay:9000,
		minHeight:500,
		gridwidth:0,
		navigationType:"bullet",
		navigationArrows:"solo",
		navigationStyle:"preview4",
		gridheight:500
	});

	/*-----------------------------------------------------------------------------------*/
	/* 	SLIDER REVOLUTION
	/*-----------------------------------------------------------------------------------*/
	initRevolutionSlider('.tp-banner-full', {
		dottedOverlay:"none",
		delay:7000,
		startwidth:1200,
		startheight:500,
		navigationType:"bullet",
		navigationArrows:"solo",
		navigationStyle:"preview4",
		parallax:"mouse",
		parallaxBgFreeze:"on",
		parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
		keyboardNavigation:"on",
		shadow:0,
		fullWidth:"on",
		fullScreen:"off",
		shuffle:"off",
		autoHeight:"off",
		forceFullWidth:"on",
		fullScreenOffsetContainer:""
	}, true);

	/*-----------------------------------------------------------------------------------*/
	/* 	TESTIMONIAL SLIDER
	/*-----------------------------------------------------------------------------------*/
	initOwlSlider("#testi-slide", {
		items : 1,
		autoplay:true,
		loop:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		navigation : true,
		nav: true,
		navText: ["<i class='lnr lnr-arrow-left'></i>","<i class='lnr lnr-arrow-right'></i>"],
		pagination : true,
		singleItem	: true
	});

	/*-----------------------------------------------------------------------------------*/
	/* 	Single SLIDER
	/*-----------------------------------------------------------------------------------*/
	initOwlSlider(".singl-slide", {
		items : 1,
		autoplay:true,
		loop:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		navigation : true,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		pagination : true,
		singleItem	: true
	});

	/*-----------------------------------------------------------------------------------*/
	/* 	TESTIMONIAL SLIDER
	/*-----------------------------------------------------------------------------------*/
	initOwlSlider(".deal-slide", {
		items : 1,
		autoplay:true,
		loop:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		navigation : true,
		nav: true,
		navText: ["<span>Previous Deal</span>","<span>Next Deal</span>"],
		pagination : true,
		lazyLoad:true,
		nav: true,
		singleItem	: true
	});

	/*-----------------------------------------------------------------------------------*/
	/* 	TESTIMONIAL SLIDER
	/*-----------------------------------------------------------------------------------*/
	initOwlSlider(".item-slide-5", {
		items : 5,
		autoplay:true,
		loop:true,
		margin: 30,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		lazyLoad:true,
		nav: true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:3,
			},
			1000:{
				items:4,
			},
			1200:{
				items:5,
			}
		},
		animateOut: 'fadeOut'
	});

	/*-----------------------------------------------------------------------------------*/
	/* 	TESTIMONIAL SLIDER
	/*-----------------------------------------------------------------------------------*/
	initOwlSlider(".item-slide-4", {
		items : 4,
		autoplay:true,
		loop:false,
		margin: 30,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		lazyLoad:true,
		nav: true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000:{
				items:4,
			}
		},
		animateOut: 'fadeOut'
	});

	/*-----------------------------------------------------------------------------------*/
	/* 	CASE SLIDER
	/*-----------------------------------------------------------------------------------*/
	initOwlSlider(".item-slide-3", {
		items : 3,
		autoplay:true,
		loop:false,
		margin: 30,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		lazyLoad:true,
		nav: true,
		responsive:{
			0:{
				items:1,
			},
			800:{
				items:2,
			},
			1000:{
				items:3,
			},
		},
		animateOut: 'fadeOut'
	});

	/*-----------------------------------------------------------------------------------*/
	/* 	CASE SLIDER
	/*-----------------------------------------------------------------------------------*/
	initOwlSlider(".item-slide-2", {
		items : 2,
		autoplay:true,
		loop:false,
		margin: 30,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		lazyLoad:true,
		nav: true,
		responsive:{
			0:{
				items:1,
			},
			800:{
				items:2,
			},
			1000:{
				items:2,
			},
		},
		animateOut: 'fadeOut'

	});

	/*-----------------------------------------------------------------------------------*/
	/* 	CASE SLIDER
	/*-----------------------------------------------------------------------------------*/
	initOwlSlider("#blog-slide", {
		items : 3,
		autoplay:true,
		loop:false,
		margin: 30,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		lazyLoad:true,
		nav: true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000:{
				items:3,
			},
		},
		animateOut: 'fadeOut'
	});

	/*-----------------------------------------------------------------------------------*/
	/* 	CASE SLIDER
	/*-----------------------------------------------------------------------------------*/
	initOwlSlider("#blog-slide-2", {
		items : 2,
		autoplay:true,
		loop:false,
		margin: 30,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		lazyLoad:true,
		nav: true,
		responsive:{
			0:{
				items:1,
			},
			800:{
				items:2,
			},
			1000:{
				items:2,
			},
		},
		animateOut: 'fadeOut'

	});

	/*-----------------------------------------------------------------------------------*/
	/* 	CASE SLIDER
	/*-----------------------------------------------------------------------------------*/
	initOwlSlider("#client-slide-1", {
		items : 4,
		autoplay:true,
		loop:true,
		margin: 30,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		navText: ["<i class='lnr lnr-arrow-left'></i>","<i class='lnr lnr-arrow-right'></i>"],
		lazyLoad:true,
		nav: true,
		responsive:{
			0:{
				items:1,
			},
			800:{
				items:2,
			},
			1000:{
				items:4,
			},
		},
		animateOut: 'fadeOut'

	});

	/*-----------------------------------------------------------------------------------
		TESTNMONIALS STYLE 1
	/*-----------------------------------------------------------------------------------*/
	initFlexSlider('.free-slide', {
		mode: 'fade',
		animation: "fade",
		auto: true
	});

	/*-----------------------------------------------------------------------------------*/
	/* 	Thumb Slider
	/*-----------------------------------------------------------------------------------*/
	initFlexSlider('.thumb-slider', {
		animation: "slide",
		controlNav: "thumbnails"
	});
};

initCarousels();
$(document).on('shopify:section:load shopify:section:reorder', initCarousels);
$(document).on('shown.bs.tab', 'a[data-toggle="tab"]', initCarousels);
/*-----------------------------------------------------------------------------------*/
/* 	COUNTER
/*-----------------------------------------------------------------------------------*/
if (typeof $.fn.counterUp === "function") {
	$('.counter').counterUp({
		delay: 10,
		time: 300
	});
}
/*-----------------------------------------------------------------------------------*/
/* 	ANIMATION
/*-----------------------------------------------------------------------------------*/
var wow = new WOW({
    boxClass:     'animate',      // animated element css class (default is wow)
    animateClass: 'animated', 	// animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       false        // trigger animations on mobile devices (true is default)
});
wow.init();

});

