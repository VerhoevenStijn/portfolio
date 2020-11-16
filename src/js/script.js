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
