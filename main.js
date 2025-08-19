$(function(){
var isScrollingDown = false;
$(window).on('wheel', function(event) {
    isScrollingDown = event.originalEvent.deltaY > 0; 
    console.log(isScrollingDown) 
});
const unitTitle = new SplitType('.unit-title > p',{types : 'chars'})
let fullpage = $('#fullpage').fullpage({
    speed : 800,
    afterLoad : function(anchor, index){
        if(index === 1){
            $.fn.fullpage.setAllowScrolling(true); 
            $('.premium-first-slide, .premium-last-slide').removeClass('on');
        }
        if(index === 2){
            $.fn.fullpage.setAllowScrolling(false); 
        }
        if(index === 3){
            $.fn.fullpage.setAllowScrolling(true);
            $('.premium-first-slide, .premium-last-slide').removeClass('on'); 
        }

        if(index === 2 && premiumSlide.realIndex === 0){
            $('.premium-first-slide').addClass('on active')
        } else{
            $('.premium-first-slide').removeClass('on')
        }
        if(index === 2 && premiumSlide.realIndex === 5){
            $('.premium-last-slide').addClass('on')
        } else{
            $('.premium-last-slide').removeClass('on')
        }
    },
    onLeave : function(anchor, index){
        if(index === 1){
            $('.premium-slide').removeClass('on')
            //$('.header').removeClass('dark fill')
			$('.header').addClass('dark fill')
			$('.scroll-box').addClass('dark')
			$('.quick-menu').addClass('on')
        }
        if(index === 2){
            $('.header').removeClass('dark fill')
            $('.header').addClass('dark')
			$('.scroll-box').addClass('dark')
            setTimeout(function(){
                $('.premium-slide').addClass('on')
            }, 0)
			$('.quick-menu').removeClass('on')
        }
        if(index === 3){
            $('.header').addClass('dark fill')
            $('.premium-slide').removeClass('on')
			$('.scroll-box').removeClass('dark')
			$('.quick-menu').removeClass('on')
        }
		if(index === 4){
            $('.header').removeClass('fill')
            $('.premium-slide').removeClass('on')
			$('.scroll-box').removeClass('dark')
			$('.quick-menu').removeClass('on')
			gsap.to(unitTitle.chars,{
				opacity : 1,
				y : 0,
				stagger : 0.02,
			})
        } else{
			gsap.to(unitTitle.chars,{
				opacity : 0,
				y : -100,
				stagger : 0.02,
			})		
		}
        if(index === 5){
            $('.header').removeClass('dark fill')
            $('.header').addClass('dark')
            $('.premium-slide').removeClass('on')
            $('.main-section-location').removeClass('fp-active')
			$('.quick-menu').addClass('on')
        }
        if(index === 6){
            $('.header').removeClass('dark fill')
            $('.header').addClass('dark')
            $('.premium-slide').removeClass('on')
			$('.scroll-box').addClass('dark')
            $('.main-section-location').addClass('fp-active')
			$('.quick-menu').addClass('on')
        }
    }
})
$('.header').addClass('dark fill')
$('.scroll-box').addClass('dark')

setTimeout(function(){
	$('.quick-menu').addClass('on')
},1000)

let visualSlide = new Swiper('.visual-slide',{
	autoplay : {
		delay : 4000
	},
	loop : true,
	speed : 1000,
	effect : 'fade',
})

let premiumSlide = new Swiper('.premium-slide',{
    speed : 800,
    mousewheel : true,
    on : {
        slideChange : function(){
            let thisIndex = this.realIndex + 1
            let totalIndex = this.slides.length;
            setTimeout(function(){
                if(thisIndex === 1){ 
                    $('.premium-first-slide').addClass('on') 
                } else{
                    $('.premium-first-slide').removeClass('on') 
                }

                if(thisIndex === totalIndex){ 
                    $('.premium-last-slide').addClass('on') 
                } else{
                    $('.premium-last-slide').removeClass('on') 
                }
                
            }, 500)
        },
    },
    pagination : {
        el : '.premium-pagination'
    }
})

$(window).on('wheel',function(){
    if($('.premium-last-slide').hasClass('on') && isScrollingDown){
        $.fn.fullpage.moveTo(3) 
    } 
    if($('.premium-first-slide').hasClass('on') && !isScrollingDown){ 
        $.fn.fullpage.moveTo(1)
    }
})

	
	let unitSlide = new Swiper('.unit-slide',{
		spaceBetween : 1000,
		speed : 700,
		on : {
			slideChange : function(){
				let realIndex = this.realIndex + 1;
				$('.unit-btn-box > li').removeClass('on')
				$('.unit-btn-box > li:nth-child(' + realIndex + ")").addClass('on')
				$('.unit-con > li').removeClass('on')
				$('.unit-con > li:nth-child(' + realIndex + ")").addClass('on')
			}
		},
		loop : true,
		autoplay : {
			delay : 3000,
		}
	})
	$('.unit-btn-box > li').on('click', function() {
		var slideIndex = $(this).data('slide')-1;
		unitSlide.slideToLoop(slideIndex);
		$('.unit-btn-box > li').removeClass('on')
		$('.unit-btn-box > li:nth-child(' + (slideIndex + 1) + ')').addClass('on')
		$('.unit-con > li').removeClass('on')
		$('.unit-con > li:nth-child(' + (slideIndex + 1) + ')').addClass('on')
		console.log(slideIndex)
	});
})