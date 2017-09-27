$(document).ready(main); // ejecuta la fuoncion main una vez que todo el doc este cargado//
 
var contador = 1; //declaramos variable//
 
function main(){ //funcion main que cuando reciba un click se ejecute//
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){ //condiconal//
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
 
	});
 
};
