var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
function ocultar(){
 document.getElementById('infor-1').style.display="none";
}
function mostrar(){
  document.getElementById('infor-1').style.display="block";
 }
 function ocultar1(){
  document.getElementById('infor-2').style.display="none";
 }
 function mostrar1(){
   document.getElementById('infor-2').style.display="block";
  }
  function ocultar2(){
    document.getElementById('infor-3').style.display="none";
  }
  function mostrar2(){
    document.getElementById('infor-3').style.display="block";
  }
  function ocultar3(){
    document.getElementById('infor-4').style.display="none";
   }
   function mostrar3(){
     document.getElementById('infor-4').style.display="block";
    }