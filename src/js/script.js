function myFunction(x) {
  x.classList.toggle("change");
  if (document.getElementById("myDropdown").classList.contains("close")) {
    document.getElementById("myDropdown").classList.remove("close");
    document.getElementById("myDropdown").classList.add("show");
  } else {
    document.getElementById("myDropdown").classList.add("close");
}}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// text slider

$('.bxslider').bxSlider({
  mode: 'vertical',
  pager:false,
  controls:false,
  infiniteLoop:true,
  auto:true,
  speed:300,
  pause:2000
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
