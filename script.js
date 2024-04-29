const navIcon = document.getElementById("nav-icon");
const closeIcon = document.getElementById("close-icon");
const menu = document.querySelector(".menu-wrap");
const menuShadow = document.querySelector(".menu__shadow")

navIcon.addEventListener("click", function() {
    menu.classList.add("show");
    console.log(menu)
})
closeIcon.addEventListener("click", function() {
    menu.classList.remove("show");
})
menuShadow.addEventListener("click", function() {
    menu.classList.remove("show");
})