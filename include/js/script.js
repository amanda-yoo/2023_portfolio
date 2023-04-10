$(document).ready(function(){
	var wWidth = $(window).innerWidth();

	nav();
	titType();
	popUp();
	proTab();

	event();

	function event(){
		if(wWidth < 1025){
			mBtnTop();
		}else{
			btnTop();
		}
	}

	$(window).resize(function(e){
		var wWidth = $(window).innerWidth();
		event();
	});
	
})

function nav(){
	$('.js-btn-nav').on('click',function(e){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).addClass('inactive');
			$('.js-nav').stop().fadeOut(300);
		}else{
			$(this).addClass('active');
			$(this).removeClass('inactive');
			$('.js-nav').stop().fadeIn(300);
		}
	});
	$('.js-nav-menu > li > a').on('click',function(e){
		var cnt = $(this).parent('li').index(),
			target = $('.js-main-contents > article').eq(cnt).offset().top;
		$('html, body').stop().animate({'scrollTop': target},400);
		$('.js-btn-nav').removeClass('active').addClass('inactive');
		$('.js-nav').stop().fadeOut(300);
	});
}

function titType(){
	var typingBool = false; 
	var typingIdx = 0;
	var typingTxt = $('.js-cover-tit').text();
	typingTxt = typingTxt.split('');

	if(typingBool == false){
		typingBool = true;
		var tyInt = setInterval(typing, 200);
	}

	function typing(){
		if(typingIdx < typingTxt.length){ 
			$('.js-cover-typing').append(typingTxt[typingIdx]);
			typingIdx++; 
		} else{ 
			clearInterval(tyInt); 
		} 
	}
}


function btnTop(){
	$(window).scroll(function(e){
		if ($('html, body').scrollTop() > 200) {
			$('.js-btn-top').addClass('on');
		} else {
			$('.js-btn-top').removeClass('on');
		}
	});
	btnTopScroll();
}

function mBtnTop(){
	$(window).scroll(function(e){
		if($(this).scrollTop() > 70){
			$('.js-btn-top').addClass('on');
		}else{
			$('.js-btn-top').removeClass('on');
		}
	});
	btnTopScroll();
}

function btnTopScroll(){
	$('.js-btn-top').on('click',function(e){
		$('html, body').stop().animate({
			'scrollTop': 0
		},400);
		return false;
	});
}

function popUp(){
	$('.js-nonopen').on('click', function(){
		$('.js-dim').stop().fadeIn();
		$('.js-popup').removeClass('out').addClass('on');
		$('.js-popup').stop().fadeIn();
	});
	$('.js-btn-pop-close').on('click', function(){
		$('.js-dim').stop().fadeOut();
		$('.js-popup').removeClass('on').addClass('out').stop().fadeOut();
	});
	$('.js-dim').on('click', function(){
		$('.js-dim').stop().fadeOut();
		$('.js-popup').removeClass('on').addClass('out').stop().fadeOut();
	})
}

function proTab(){
	$('.js-pro-tab li a').on('click', function(){
		$('.js-pro-tab li').removeClass('on');
		$(this).parent('li').addClass('on');

		var cnt = $(this).parent('li').index();
		$('.js-help-text').children('p').removeClass('on').eq(cnt).addClass('on');

		$('.js-pro-conbox').stop().fadeOut();
		if($(this).parent('li').hasClass('new')){
			$('.js-pro-conbox.new').stop().fadeIn();
		}else if($(this).parent('li').hasClass('legacy')){
			$('.js-pro-conbox.legacy').stop().fadeIn();
		}else if($(this).parent('li').hasClass('all')){
			$('.js-pro-conbox').stop().fadeIn();
		}
	})
}