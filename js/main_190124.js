//arrival -s
$(document).ready(function(){
	var num=0;
	var arrival;
	$('.slidelist span').click(function(){
		if($('.slideul').is(':animated')==false){
			$('.slidelist span').removeClass('on');
			$(this).addClass('on');
			num=$(this).index();
			$('.slideul').animate({left:-500*num},800) 
		}
	})
	$('.next').click(function(){
		if($('.slideul').is(':animated')==false){
			num++;
			if(num>3){
				num=0;
			}
			animation(num);
		}
	})
	$('.prev').click(function(){
		if($('.slideul').is(':animated')==false){
			num--;
			if(num<0){
				num=3;
			}
			animation(num);
		}
	})

	function animation(num){
		$('.slidelist span').removeClass('on');
		$('.slidelist span:eq('+num+')').addClass('on');
		$('.slideul').animate({left:-500*num},800)
	}

	function arrivalauto(){
		$('.next').trigger('click');
	}

	arrival=setInterval(arrivalauto, 3000)

	$('.prev').mouseenter(function(){
		clearInterval(arrival);
	})
	$('.next').mouseenter(function(){
		clearInterval(arrival);
	})
	$('.prev').mouseleave(function(){
		clearInterval(arrival);
		arrival=setInterval(arrivalauto, 3000)
	})
	$('.next').mouseleave(function(){
		clearInterval(arrival);
		arrival=setInterval(arrivalauto, 3000)
	})

	// transform: translateY(140px); transition: 1s all ease; opacity: 0;
	// 스크롤 액션
	var boxoffset=$('.history_box').offset().top;
	
	$(window).scroll(function(){
		var scrollpos=$(window).scrollTop();

		// history - 박스
		if(scrollpos > $('.historywrap').offset().top-($(window).height()/2)){
			$('.history_box').css({
				'opacity' : '1',
				'transform' : 'translateY(0px)'
			})
		}
		else{
			$('.history_box').css({
				'opacity' : '0',
				'transform' : 'translateY(140px)'
			})
		}

		// product - 글씨
		if(scrollpos > $('.productwrap').offset().top-($(window).height()-400)){
			$('.productwrap > .conttitle').css({
				'opacity' : '1',
				'transform' : 'translateY(0px)'
			})
		}
		else{
			$('.productwrap > .conttitle').css({
				'opacity' : '0',
				'transform' : 'translateY(140px)'
			})
		}

		// product - 컨텐츠
		if(scrollpos > $('.productwrap').offset().top-($(window).height()-500)){
			$('.product').css({
				'opacity' : '1',
				'transform' : 'translateY(0px)'
			})
		}
		else{
			$('.product').css({
				'opacity' : '0',
				'transform' : 'translateY(140px)'
			})
		}
		
		// arrival - 글씨
		if(scrollpos > $('.arrival').offset().top-($(window).height()-400)){
			$('.arrival > .conttitle').css({
				'opacity' : '1',
				'transform' : 'translateY(0px)'
			})
		}
		else{
			$('.arrival > .conttitle').css({
				'opacity' : '0',
				'transform' : 'translateY(140px)'
			})
		}

		// arrival - 컨텐츠
		if(scrollpos > $('.arrival').offset().top-($(window).height()-500)){
			$('.slideul').css({
				'opacity' : '1',
				'transform' : 'translateY(0px)'
			})
		}
		else{
			$('.slideul').css({
				'opacity' : '0',
				'transform' : 'translateY(140px)'
			})
		}

		// recipe - 글씨
		if(scrollpos > $('.recipe').offset().top-($(window).height()/2)){
			$('.recipe > .conttitle').css({
				'opacity' : '1',
				'transform' : 'translateY(0px)'
			})
		}
		else{
			$('.recipe > .conttitle').css({
				'opacity' : '0',
				'transform' : 'translateY(140px)'
			})
		}

		// recipe - 컨텐츠
		if(scrollpos > $('.recipe').offset().top-($(window).height()/2)){
			$('.recipe_cont').css({
				'opacity' : '1',
				'transform' : 'translateY(0px)'
			})
		}
		else{
			$('.recipe_cont').css({
				'opacity' : '0',
				'transform' : 'translateY(140px)'
			})
		}

		// bgvideo - 글씨
		if(scrollpos > $('.bgvideo').offset().top-($(window).height()/2)){
			$('.videotxt').css({
				'opacity' : '1',
				'transform' : 'translateY(0px)'
			})
		}
		else{
			$('.videotxt').css({
				'opacity' : '0',
				'transform' : 'translateY(140px)'
			})
		}

		// sns - 글씨
		if(scrollpos > $('.sns').offset().top-($(window).height()/2)){
			$('.sns > .conttitle').css({
				'opacity' : '1',
				'transform' : 'translateY(0px)'
			})
		}
		else{
			$('.sns > .conttitle').css({
				'opacity' : '0',
				'transform' : 'translateY(140px)'
			})
		}

		// sns - 컨텐츠
		if(scrollpos > $('.sns').offset().top-($(window).height()/2)){
			$('.snsul').css({
				'opacity' : '1',
				'transform' : 'translateY(0px)'
			})
		}
		else{
			$('.snsul').css({
				'opacity' : '0',
				'transform' : 'translateY(140px)'
			})
		}

		// top menu
		if(scrollpos > boxoffset){
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

})

// sns -s
function heart1(){ // sns box1
	var heart=document.getElementById('heart1');
	if(heart.className=='heart'){
		heart.className='heart_on';
	}
	else{
		heart.className='heart';
	}
}
function heart2(){ // sns box2
	var heart=document.getElementById('heart2');
	if(heart.className=='heart'){
		heart.className='heart_on';
	}
	else{
		heart.className='heart';
	}
}
function heart3(){ // sns box3
	var heart=document.getElementById('heart3');
	if(heart.className=='heart'){
		heart.className='heart_on';
	}
	else{
		heart.className='heart';
	}
}




/* 
제이쿼리로 짠 슬라이드 (append사용)
$(document).ready(function(){
	var arrival;
	var num=0;
	arrival=setInterval(auto, 3000) 
	$('.next').click(function(){
		auto()
	})
	$('.prev').click(function(){
		$('.slideul').animate({left: '500px'},1000,function(){
			$('.slideul').css('left', '0px');
			$('.slideul').prepend($('.slideul li:last'));
		})
	})

	function auto(){
		$('.slideul').animate({left: '-500px'},1000,function(){
			$('.slideul').append($('.slideul li:first'));
			$('.slideul').css('left', '0px');
		})
	}
	
	$('.next').mouseenter(function(){
		clearInterval(arrival);
	})
	$('.next').mouseleave(function(){
		clearInterval(arrival);
		arrival=setInterval(auto, 3000) 
	})
	$('.prev').mouseenter(function(){
		clearInterval(arrival);
	})
	$('.prev').mouseleave(function(){
		clearInterval(arrival);
		arrival=setInterval(auto, 3000) 
	})
}) */


/* 	
	스크립트로 짠 슬라이드
	window.onload=function(){
		sumnum();
	} */


/* 	var imgwidth=500;
	var currnetnum=0;
	var count=0;
	var slidelist;

	function prevbtn(){ // 슬라이드 왼쪽 버튼
		count--;
		if(count<0){
			count=slidelist.length-1;
		}
		slidebtn(count);
	}
	
	function nextbtn(){ // 슬라이드 오른쪽 버튼
		count++;
		if(count>slidelist.length-1){
			count=0
		}
		slidebtn(count);
	}
	
	function slidebtn(num){ // 슬라이드 리스트
		if(currnetnum!=num){
			slidelist[currnetnum].className='';
			slidelist[num].className='on';
	
			currnetnum=num;
		}
		document.getElementById('slideul').style.left=-(imgwidth*num)+'px';
	}
	function sumnum(){ // 현재 위치값 계산
		slidelist=document.getElementById('slidelist').getElementsByTagName('span');
		for(i=0; i<slidelist.length; i++){
			slidelist[i].num=i;
			slidelist[i].onclick=function(){
				slidebtn(this.num);
				count=this.num;
			}
		}
		
	} */