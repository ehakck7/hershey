//gnb
$(document).ready(function(){
	$('.depth1').mouseenter(function(){
		$(this).next().stop().show();
	})
	$('.depth1').mouseleave(function(){
		$(this).next().stop().hide();
	})
	$('.sub-menu').mouseenter(function(){
		$(this).stop().show();
	})
	$('.sub-menu').mouseleave(function(){
		$(this).stop().hide();
	})

	// gnb search
	$('.btn-search').click(function(){
		$(this).toggleClass('on')
		if($(this).hasClass('on')==true){
			$(this).next().stop().fadeIn()
		}
		else{
			$(this).next().stop().fadeOut()
		}
		$('.search-box').val('')
	})
})