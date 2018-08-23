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


$(window).on('scroll', mostrar);

	function mostrar(){

	let scrollActual = $(window).scrollTop();
	let altoPantalla = $(window).innerHeight() / 2; 
	let profundidadBoton  = $('#experience .devider, #languages .boton').offset().top;
	let scrollObjetivo = profundidadBoton - altoPantalla;

	if(scrollActual >= scrollObjetivo) {

	$('#experience .devider, #languages .boton').addClass('visible');

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

	$('#navbarToggler').removeClass('show');
}

