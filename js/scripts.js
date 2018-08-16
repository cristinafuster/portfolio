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




$(document).ready(function(){

	$('.desplazar').on('click', navegar);


});




function navegar(){

	let objetivo = $(this).data('seccion');

	let profundidad = $(objetivo).offset().top;

	$('html').animate({
		scrollTop: profundidad
	}, 1000);

	$('.menu').removeClass('abierto');
}
