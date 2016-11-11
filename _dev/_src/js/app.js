(function(){

	$(function(){

		// ロールオーバー
		var RollOver = function(){
			$('img.js-rollover, input.js-rollover, button.js-rollover').each(function(){
				this.originalSrc = $(this).attr('src');
				this.rolloverSrc = this.originalSrc.replace(/(\.gif|\.jpg|\.png)/, "_on$1");
			});
			$('img.js-rollover, input.js-rollover, button.js-rollover').hover(function(){$(this).attr('src',this.rolloverSrc);},function(){$(this).attr('src',this.originalSrc);});
			window.onunload=function(){
				$('img.js-rollover, input.js-rollover').attr('src',this.originalSrc);
			}
		}

		// ウィンドウサイズによって強制的にグロナビを表示・非表示にする
		var NavShow = function(){

			var BP = 768,
				winW;

			$(window).on('resize',function(){
				winW = $(window).width();

				if(winW <= BP){
					$('nav.sp_navigation').css({'display':'none'});
				}else{
					$('nav.sp_navigation').css({'display':'block'});
				}
			});
		}

		var SPNav = function(){
			$('.menu-button').on('click',function(){
				$('nav.sp_navigation').slideToggle();
				$(this).parent().toggleClass('is-open');
			});
		}

		var SmoothScroll = function(){
			$('a.js-smoothscroll').click(function(){
		        var speed = 500;
		        var href= $(this).attr("href");
		        var target = $(href == "#" || href == "" ? 'html' : href);
		        var position = target.offset().top;
		        $("html, body").animate({scrollTop:position}, speed, "swing");
		        return false;
		    });
		}

		// NavShow();
		setTimeout(function(){
			RollOver();
		},5000);
		SPNav();
		SmoothScroll();
	});
})();
