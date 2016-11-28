(function(){

	$(function(){

        var winW = $(window).width();

		var sideNavFixed = function(){
			var changeScrollPos = $('.c_hdr_content').height() + $('.main_area').height();
			var scroll = $(window).scrollTop();
            var winW = $(window).width();
            var contentH = $('.main_content').height();
            var asideH = $('.aside_content').height();

			if(scroll > changeScrollPos){
				$('.aside_content').css({
					'position': 'absolute',
                    'top': scroll - changeScrollPos + 15,
                    'bottom': 'auto',
                    'right': 0
				});
			}else{
				$('.aside_content').css({
					'position': 'relative',
                    'bottom': 'auto',
					'top': 'auto'
				});
			}

			$(window).on('scroll', function(){
                changeScrollPos = $('.c_hdr_content').height() + $('.main_area').height();
				scroll = $(window).scrollTop();

				if(scroll > changeScrollPos && scroll - (contentH + changeScrollPos - asideH) <= 0){
                    // スクロール中位置固定されて追従している場合
					$('.aside_content').css({
						'position': 'absolute',
                        'top': scroll - changeScrollPos + 15,
                        'bottom': 'auto',
						'right': 0
					});
				}else if(scroll > changeScrollPos && scroll - (contentH + changeScrollPos - asideH) >= 0){
                    // 下で位置固定されている場合
                    $('.aside_content').css({
						'position': 'absolute',
                        'top': 'auto',
                        'bottom': 30,
						'right': 0
					});
                }else{
                    // 上で位置固定されていない場合
					$('.aside_content').css({
						'position': 'relative',
						'top': 'auto',
                        'bottom': 'auto'
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
