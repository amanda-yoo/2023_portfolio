$(document).ready(function(){
	var wWidth = $(window).innerWidth();

	nav();
	titType();

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

function experience(){
	function experienceScroll(){
		var projectHeight = $('.js-project-wrap').offset().top - 400,
			projectLastHeight = $('.js-contact-wrap').offset().top - 200,
			currentScroll = $(document).scrollTop();
		
		if(projectHeight < currentScroll){
			$('.js-exp-conbox').addClass('on');
		}else{
			$('.js-exp-conbox').removeClass('on');
		}
		if(projectLastHeight < currentScroll){
			$('.js-exp-conbox').removeClass('on');
		}
	};
	experienceScroll();
	$(window).scroll(function(){
		experienceScroll();
	});

	$('.js-exp-conbox').off('click');
	$('.js-exp-info').stop().fadeOut(100);
	$('.js-exp-conbox').mouseenter(function(){
		$('.js-exp-conbox').not(this).children('.js-exp-info').stop().fadeOut(300);
		$(this).children('.js-exp-info').stop().fadeIn(300);
	});
	$('.js-exp-conbox').mouseleave(function(){
		$(this).children('.js-exp-info').stop().fadeOut(300);
	});
}

function mExperience(){
	$('.js-exp-conbox').off('mouseenter');
	$('.js-exp-conbox').off('mouseleave');
	$('.js-exp-info').stop().fadeOut(100);
	$('.js-exp-conbox').on('click', function(){
		$('.js-exp-conbox').not(this).children('.js-exp-info').stop().fadeOut(300);
		$(this).children('.js-exp-info').stop().fadeIn(300);
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