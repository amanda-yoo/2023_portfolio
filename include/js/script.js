$(document).ready(function(){
	var $width = $(window).innerWidth(),
		wWidth = windowWidth();

	nav();
	titType();
	windowWidth();

	event();

	function event(){
		if(wWidth < 1025){
			mBtnTop();
			mExperience();
		}else{
			btnTop();
			experience();
		}
	}

	$(window).resize(function(e){
		$width = $(window).innerWidth();
		wWidth = windowWidth();
		
		event();
	});
	
})

function Mobile(){
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function windowWidth() {
	if ($(document).innerHeight() > $('window').innerHeight()) {
		if(Mobile()){
			return $(window).innerWidth();
		}else{
			return $(window).innerWidth() + 17;
		}		
	} else {
		return $(window).innerWidth();
	}
}

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

function experience(){
	$(window).scroll(function(){
		var projectHeight = $('.js-project-wrap').offset().top - 400,
			projectLastHeight = $('.js-contact-wrap').offset().top - 200;
		var currentScroll = $(document).scrollTop();
		
		if(projectHeight < currentScroll){
			$('.js-exp-conbox').addClass('on');
		}else{
			$('.js-exp-conbox').removeClass('on');
		}
		if(projectLastHeight < currentScroll){
			$('.js-exp-conbox').removeClass('on');
		}
	});

	$('.js-exp-conbox').off('click');
	$('.js-exp-conbox').mouseenter(function(){
		$('.js-exp-conbox').not(this).children('.js-exp-info').stop().fadeOut();
		$(this).children('.js-exp-info').stop().fadeIn();
	});
	$('.js-exp-conbox').mouseleave(function(){
		$(this).children('.js-exp-info').stop().fadeOut();
	});

	// $('.js-exp-menu > li > a').on('click', function(){
	// 	$('.js-exp-menu > li').removeClass('on');
	// 	$(this).parent().addClass('on');
	// 	$('.js-exp-conbox').removeClass('on').hide();
	// 	if($(this).parent().hasClass('legacy')){
	// 		$('.js-exp-list-wrap').css('height', '700px');
	// 		$('.js-exp-conbox.legacy').addClass('on').show();
	// 	}else if($(this).parent().hasClass('new')){
	// 		$('.js-exp-list-wrap').css('height', '850px');
	// 		$('.js-exp-conbox.new').addClass('on').show();
	// 	}else{
	// 		$('.js-exp-list-wrap').css('height', '1400px');
	// 		$('.js-exp-conbox').addClass('on').show();

	// 	}
	// })
}

function mExperience(){
	$('.js-exp-conbox').off('mouseenter');
	$('.js-exp-conbox').off('mouseleave');
	$('.js-exp-conbox').on('click', function(){
		$('.js-exp-conbox').not(this).children('.js-exp-info').stop().fadeOut();
		$(this).children('.js-exp-info').stop().fadeIn();
	});
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