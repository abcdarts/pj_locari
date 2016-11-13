(function(){

	$(function(){

		var sideNavFixed = function(){
			var changeScrollPos = $('.c_hdr_content').height() + $('.main_area').height();
			var scroll = $(window).scrollTop();

			if(scroll > changeScrollPos){
				$('.aside_content').css({
					'position': 'fixed',
					'top': 15,
					'left': 'auto',
					'margin-left': '714px'
				});
			}else{
				$('.aside_content').css({
					'position': 'relative',
					'top': 'auto',
					'margin-left': '0'
				});
			}

			$(window).on('scroll', function(){
				scroll = $(window).scrollTop();

				if(scroll > changeScrollPos){
					$('.aside_content').css({
						'position': 'fixed',
						'top': 15,
						'left': 'auto',
						'margin-left': '714px'
					});
				}else{
					$('.aside_content').css({
						'position': 'relative',
						'top': 'auto',
						'margin-left': '0'
					});
				}
			});
		}

		sideNavFixed();

	});
})();
