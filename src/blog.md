---
title: How To Get Dark Mode Design Right
layout: 'layouts/blog.html'
summary: Here you can find some interesting blogs
custom_css: "
p, h3{
  color: black;
}
main img{
  width:40rem;
}

.grid{
  padding: 2rem;
  background-color: #FFA015;
  text-decoration;
}

@media (min-width: 800px) {
  .grid{
    display: grid;
    grid-template-columns: 2;
    column-gap:2rem;
    padding: 2rem;
    background-color: #FFA015;
    text-decoration: none;
    margin-bottom: 2rem;
  }
  h3, p{
    grid-column: 1;
  }
  img{
    grid-row: 1/3;
    grid-column: 2;}
}"
---
