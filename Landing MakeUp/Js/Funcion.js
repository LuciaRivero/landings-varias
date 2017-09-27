$(document).ready(function(){
	$('#msj').hide(); //esconde el div que contiene este id
	var msj = [];



$('#enviar').on('click', function(){
	email = $('#email').val();
	validarEmail(email);

});
//Desplazo!
$('.movi').on('click', function(e){
 	e.preventDefault();
 	link = $(this).attr('href');
 	$('html, body').animate({
 		scrollTop:$(link).offset().top},
 		5000);
 });

//Vermas!
$('.verMas').on('click',function(){
			var vid= $(this).data('id');
			var id='#' + vid;
			//necesito preguntar si esta en none o block
			console.log($(id).css('display'));
			if($(id).css('display') === "none"){
				//oculto todos antes
				$('.extra').hide();
				//piso el ocultar todo con la especificidad
				$(id).css('display','block');
				console.log($(id).css('display'));
			
			}else{
				if($(id).css('display') === "block"){
					$(id).css('display','none');
					console.log($(id).css('display'));
				}

			}
	})
//finVermas!
//Modal
$('.img_peque').on('click', function(){
		imagen = $(this).data('img');
		url ='Css/Img/' + imagen;
		console.log(url);
		$('#img_grande').attr('src', url);
		//$('#img_grande').show();
})
//finModal
}); //findocumentready

var contacto = document.getElementById('contacto');
//contacto.addEventListener('submit', validarEmail);

 function validarForm(){		
	email = $('#email').val();
	telefono = $('#telefono').val();
	nombre = $('#nombre').val();
	select = $('#Provincia').val();

	if (nombre && email && telefono) {
	 	if(validarEmail($('#email').val())) {
	 		$('#msj').show();
	 		$('#msj').append(' <li>Muchas gracias</li>');
	 	} else {
	 		$('#msj').show();
	 		$('#msj').append('<li> ingresa un Email valido</li>');
	 	}
	} else {
	 	$('#msj').show();
		$('#msj').append('<li>Por favor completa los campos</li>');
	}
 }


function validarEmail(email){
exprn = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if(email == '' || email == null) {
	console.log("esta vacio");
} else {
	if(exprn.test(email) != true) {
		return false;
	} else { 
		return true;
	}
}
}
// };

//SELECT
var	options = ['Elegir','Buenos Aires','Catamarca','Chaco','Chubut','Cordoba','Corrientes','Entre Rios'];
var select = $('#Provincia');

for (i = 0; i < options.length; i++) {
	value = i+1;
	option = '<option value="'+value+'">' +options[i]+'</option>';
	select.append(option); 
}


// $('.movi').on('click', function(){
// 	id = $(this).data('id');

// 	$('html, body').animate({
// 		scrollTop : $(id).offset().top
// 	}, 800);

// });





