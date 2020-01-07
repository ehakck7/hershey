//arrival -s
$(document).ready(function(){
	var slide = $('.slide-list').bxSlider({
		auto: true,
		spedd: 1500,
		slideWidth: 500,
		slideMargin : 10,
		minSlides: 3,
		maxSlides: 3,
		controls : false,
		pagerCustom: '.slide-pager',
	});
	$('.slide-btn .prev').click(function(){
		slide.goToPrevSlide();
		return false;
	});
	$('.slide-btn .next').on('click', function(){
		slide.goToNextSlide();
		return false;
	});

	// 스크롤 액션
	$(window).scroll(function(){
		var scrollpos=$(window).scrollTop();
		var sectionHeight = []

		function motion(sectionClass){
			var section = $('.'+sectionClass)
			section.find('.motion').css({
				'opacity' : '1',
				'transform' : 'translateY(0px)'
			})
		}

		function scrollAction(i, sectionClass){
			switch(i){
				case 1 : 
					motion(sectionClass)
					break;
				case 2 : 
					motion(sectionClass)
					break;
				case 3 : 
					motion(sectionClass)
					break;
				case 4 : 
					motion(sectionClass)
					break;
				case 5 : 
					motion(sectionClass)
					break;
				case 6 : 
					motion(sectionClass)
					break;
				case 7 : 
					motion(sectionClass)
					break;
			}
		}

		$('.container > section').each(function(i){
			sectionHeight[i] = $(this).offset().top
			if(scrollpos > sectionHeight[i]-400){
				var sectionClass = $(this).attr('class') 
				scrollAction(i, sectionClass)
			}
		})

		// top menu
		if(scrollpos > sectionHeight[1]){
			$('.topbtn').css('display', 'inline-block')
		}
		else{
			$('.topbtn').css('display', 'none')
		}
	});
	
	//top menu - 맨위로 애니메이션
	$('.topbtn').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	// sns -s
	$('.sns-list li .sns-icon .heart').each(function(){
		$(this).click(function(){
			$(this).toggleClass('on')
		})
	})
})