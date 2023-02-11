const openBtn = document.querySelector(".harmburger-icon")
const menu = document.querySelector(".menu-items")
const closeBtn = document.querySelector(".close-btn")

openBtn.addEventListener("click", function openMenu() {
    menu.style.display ="block";
})

closeBtn.addEventListener("click", function closeMenu() {
    menu.style.display ="none";
})