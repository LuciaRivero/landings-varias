$(document).ready(function() {
  function validarEmail(email) {
    /* 
      Agregamos var para hacer que esta varibla sea de scope local a la función.
      Cambiamos nombre de variable para que se entienda mejor que es
    */
    var expresion = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // Validamos todo y si algo no esta bien retornamos false
    if (email == '' || email == null || expresion.test(email) != true) {
      return false;
    }

    // Si llegó acá es porque es un mail válido
    return true;
  }

  function validarForm() {
    // Agregamos var a todas las declaraciones de variables
    var email = $('#email').val();
    var telefono = $('#telefono').val();
    var nombre = $('#nombre').val();
    var provincia = $('#Provincia').val();

    var esValidoElForm = false;
    // Borrar todo el contenido del div msj
    $('#msj').empty();

    if (nombre && email && telefono && provincia > 1) {
      // no hace falta ir a buscar el valor de nuevo ya que lo tenemos en la variable email.
      if (validarEmail(email)) {
        $('#msj').append('<li>Muchas gracias</li>');
        esValidoElForm = true;
      } else {
        $('#msj').append('<li> ingresa un Email valido</li>');
      }
    } else {
      $('#msj').append('<li>Por favor completa los campos</li>');
    }

    // Dado que en todos los casos voy a mostrar el msj lo puedo poner después de validar cada cosa
    $('#msj').show();

    return esValidoElForm;
  }

	$('#msj').hide(); //esconde el div que contiene este id
	var msj = [];

$('#enviar').on('click', function(event) {
  // Con esto nos aseguramos que no se ejecute el submit del formulario
  event.preventDefault();

  if (validarForm()) {
    // Si el formulario es válido entonces podemos serializarlo
    var formularioSerializado = $('#contacto').serialize();
    console.log(formularioSerializado);
    // mandar datos al server!!! :)
  }
});

//Desplazo!
$('.movi').on('click', function(e){
 	e.preventDefault();
 	link = $(this).attr('href');
 	$('html, body').animate({
 		scrollTop:$(link).offset().top},
 		2000);
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





