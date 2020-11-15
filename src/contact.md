---
title: 'Contact'
layout: 'layouts/page.html'
custom_css: "form{
  background-color: #FFA015;
  padding: 2rem;
  grid-column: 1;
  height: 100%;
}

.mapouter{
  position:relative;
  text-align:right;
  height:615px;
  width:400px;
  grid-column: 2;
  margin-top: 2rem;
}

.gmap_canvas{
  overflow:hidden;
  background:none!important;
  height:615px;
  width:400px;
}

input{
  padding: 2rem;
  background-color: #FFA015;
  border: 0.5rem solid black;
  margin-bottom: 2rem;
  color: black;
}

textarea{
  background-color: #FFA015;
  border: 0.5rem solid black;
  padding: 2rem;
  color: black;
  margin-bottom: 2rem;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
}
input:nth-child(9){
  background-color: black;
  color: white;
  text-transform: uppercase;
}

::placeholder{
  color: black;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
}
@media (min-width: 800px){
main {
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: 2;
}
.mapouter{
  position:relative;
  text-align:right;
  height:615px;
  width:590px;
  grid-column: 2;
  margin-top: 0rem;
  margin-left: 2rem;
}

.gmap_canvas{
  overflow:hidden;
  background:none!important;
  height:615px;
  width:590px;
}
}"
---

<main>
<form class="" action="index.html" method="post">
  <h2>Contact me</h2>
    <p>Fill in following form and I will contact you ASAP</p>
  <input type="text" name="" placeholder="last name"><br>
  <input type="text" name="" placeholder="first name"><br>
  <textarea name="name" rows="8" cols="30" placeholder="your message"></textarea><br>
  <input type="submit" name="" value="submit">
</form>

<div class="mapouter"><div class="gmap_canvas"><iframe width="590" height="615" id="gmap_canvas" src="https://maps.google.com/maps?q=Antwerpen,%202018&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://google-map-generator.com">google map generator</a></div>
</div>
</main>
