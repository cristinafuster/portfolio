$(window).on('scroll', retraer);

			function retraer(){
				
				var scrollRealizado = $(window).scrollTop();
				
				if (scrollRealizado > 50) {

					$('nav.navbar').css({
						'line-height': '50px',
						'height': '50px'
					});
				
				} else {
					
					$('nav.navbar').css({
						'line-height': '90px',
						'height': '90px'
					});

				}
			}

///experimento//

$(window).on('scroll', mostrar);

	function mostrar(){

	let scrollActual = $(window).scrollTop();
	let altoPantalla = $(window).innerHeight() / 2; 
	let profundidadBoton  = $('#languages .boton, #experience .devider').offset().top;
	let scrollObjetivo = profundidadBoton - altoPantalla;

	if(scrollActual >= scrollObjetivo) {

	$('#languages .boton, #experience .devider').addClass('visible');

	}
}

////fin del experimento///




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
