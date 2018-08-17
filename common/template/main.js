$(function () {
	function mouseOverTrue() {
		$(this).css({
			backgroundColor: '#A2A6AD',
			color: '#FFFFFF'
		});
	};

	function mouseOverFalse() {
		$(this).css({
			backgroundColor: '#91989F',
			color: '#FFFFFF'
		});
	};

	function highlightA() {
		$("#ProductDesignSub").css({
			backgroundColor: '#0064FA',
			color: '#FFFFFF'
		});
	};
	
	function unHighlightA() {
		$("#ProductDesignSub").css({
			backgroundColor: '#91989F',
			color: '#FFFFFF'
		});
	};

	function highlightB() {
		$('#WoodworkSub').css({
			backgroundColor: '#D0104C',
			color: '#FFFFFF'
		});
	};

	function highlightC() {
		$('#GenerativeArtSub').css({
			backgroundColor: '#F2FF3E',
			color: '#91989F'
		});
	};

	function highlightD() {
		$('#AboutSub').css({
			backgroundColor: '#616C75',
			color: '#FFFFFF'
		});
	};

	$('.go-to-sectionA').each(function () {
		var el = scrollableElement('htmi', 'body');

		$(this).on('click', function (event) {
			event.preventDefault();
			$(el).animate({
				scrollTop: 200
			}, 250);
		});
	});



	function scrollableElement() {
		var i, len, el, $el, scrollable;
		for (i = 0, len = arguments.length; i < len; i++) {
			el = arguments[i],
				$el = $(el);
			if ($el.scrollTop() > 0) {
				return el;
			} else {
				$el.scrollTop(1);
				scrollable = $el.scrollTop() > 0;
				$el.scrollTop(0);
				if (scrollable) {
					return el;
				}
			}
		}
		return [];
	}

	$('.ProductDesign').each(function () {
		var $window = $(window),
			$header = $('.ProductDesign'),
			headerOffsetTop = $header.offset().top,
			H = $('.ProductDesign').height;
		
		$window.on('scroll', function () {
			if ($window.scrollTop() > headerOffsetTop) {
				highlightA();
			}/*else if($window.scrollTop() > headerOffsetTop+H){
				$('ProductDesignSub').css('backgroundColor', '#91989F');
			}*/
		});
	})

	$('#ProductDesignSub')
		.on('mouseover', mouseOverTrue)
		.on('mouseout', mouseOverFalse)
		.on('click', highlightA);

	$('#WoodworkSub')
		.on('mouseover', mouseOverTrue)
		.on('mouseout', mouseOverFalse)
		.on('click', highlightB);

	$('#GenerativeArtSub')
		.on('mouseover', mouseOverTrue)
		.on('mouseout', mouseOverFalse)
		.on('click', highlightC);

	$('#AboutSub')
		.on('mouseover', mouseOverTrue)
		.on('mouseout', mouseOverFalse)
		.on('click', highlightD);
});
