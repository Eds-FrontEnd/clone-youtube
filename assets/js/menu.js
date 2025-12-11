const menu = document.getElementById("menu");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});
