//gnb
$(document).ready(function(){
	$('.depth1').mouseenter(function(){
		$(this).next().stop().show();
	})
	$('.depth1').mouseleave(function(){
		$(this).next().stop().hide();
	})
	$('.submenu').mouseenter(function(){
		$(this).stop().show();
	})
	$('.submenu').mouseleave(function(){
		$(this).stop().hide();
	})

	// gnb search
	$('.searchbtn').click(function(){
		$(this).toggleClass('on')
		if($(this).hasClass('on')==true){
			$(this).next().stop().fadeIn()
		}
		else{
			$(this).next().stop().fadeOut()
		}
		$('.searchbox').val('')
	})
})