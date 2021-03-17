// Hamburger

let burger = document.querySelector(".hamburger");
let counter = false;
const menu = document.querySelector(".menu");
document.querySelector(".hamburger").addEventListener("click", toggleNav);

function toggleNav(e) {
   if (!counter) {
      burger.classList.add("open");
      menu.classList.add("visible");
      counter = !counter;
   }
   else if (counter) {
      burger.classList.remove("open");
      menu.classList.remove("visible");
      counter = !counter;
   }
}

// Hamburger Hover
burger.addEventListener("onmouseover", hoverBurger);

function hoverBurger(e) {
   burger.style.opacity = "1";
}
