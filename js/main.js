let container = document.querySelector(".menu-btn");
let navActive = document.querySelector(".menu-nav");


container.addEventListener("click", function(e){
  container.classList.toggle("menu-btn_active");
  navActive.classList.toggle("menu-nav-active")
});
