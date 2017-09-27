var arraySlider = ['Css/Img/slider1.jpg', 'Css/Img/slider2.jpg', 'Css/Img/slider3.jpg'];
var imagen = $('#imagen');
var pos = $(imagen).attr('data-pos');

$(document).ready(function(){ 
  setInterval (slide, 6000);
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