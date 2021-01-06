"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  //console.log(window.scrollY);
  //console.log(`navbarHeight: ${navbarHeight}`); 
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolliong when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  //ASAP I can notice the data and return
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  //When there is a link, and ID clicked, can see the result(console)
  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior:'smooth'});

});
