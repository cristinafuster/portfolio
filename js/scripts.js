$(window).on('scroll', retraer);

			function retraer(){
				
				var scrollRealizado = $(window).scrollTop();
				
				if (scrollRealizado > 50) {

					$('nav').css({
						'line-height': '50px',
						'height': '50px'
					});
				
				} else {
					
					$('nav').css({
						'line-height': '90px',
						'height': '90px'
					});

				}
			}
