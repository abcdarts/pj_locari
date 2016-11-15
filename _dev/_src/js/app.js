(function(){

	$(function(){

        var winW = $(window).width();

		var sideNavFixed = function(){
			var changeScrollPos = $('.c_hdr_content').height() + $('.main_area').height();
			var scroll = $(window).scrollTop();
            var winW = $(window).width();

			if(scroll > changeScrollPos){
				$('.aside_content').css({
					'position': 'absolute',
                    'top': scroll - changeScrollPos + 15,
                    'right': 0
				});
			}else{
				$('.aside_content').css({
					'position': 'relative',
					'top': 'auto'
				});
			}

			$(window).on('scroll', function(){
                changeScrollPos = $('.c_hdr_content').height() + $('.main_area').height();
				scroll = $(window).scrollTop();

				if(scroll > changeScrollPos){
					$('.aside_content').css({
						'position': 'absolute',
                        'top': scroll - changeScrollPos + 15,
						'right': 0
					});
				}else{
					$('.aside_content').css({
						'position': 'relative',
						'top': 'auto'
					});
				}
			});
		}

        $(window).on('resize', function(){
            winW = $(window).width();
        });

        if(winW > 768){
	        sideNavFixed();
        }

	});
})();
