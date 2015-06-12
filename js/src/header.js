// header
	var $header = $('.header'),
	    headerHeight,
	    headerNavMinWidth = 0;

// header affix
	$(window).on('scroll', function() {
		if ($('.header').length) {
			if (window.pageYOffset > headerHeight) {
				$header.addClass('fixed');
			} else {
				$header.removeClass('fixed');
			}
		};
	});

// header height
	function headerHeightCal() {
		if ($('.header').length) {
			headerHeight = $header.height();
		};
	}