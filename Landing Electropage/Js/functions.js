var arraySlider = ['IMG/electro1.jpg', 'IMG/electro2.jpg', 'IMG/electro3.jpg','IMG/electro4.jpg'];
var imagen = $('#imagen');
var pos = $(imagen).attr('data-pos');

$(document).ready(function(){ 
  setInterval (slide, 5000);
}); //documentReady

function slide(){
  $(imagen).fadeOut('slow', function(){

    $(this).attr('src', arraySlider[pos]);

    $(this).fadeIn('slow', function(){
       if (pos < arraySlider.length-1){
         pos ++;
        console.log(pos);
      }else{
       pos = 0;
        console.log(pos);
      } //else

    });//fadeIn

  });//fadeOut

} //slide