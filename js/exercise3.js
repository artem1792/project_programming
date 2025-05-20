const menu = document.querySelector(".main-nav");
const logo = document.querySelector(".bi");
const burgers = document.querySelectorAll(".burger__line");

const burgerBtn = document.querySelector(".burger");

burgerBtn.addEventListener("click", ()=>{
    menu.classList.toggle("menu--open")
    logo.classList.toggle("menu--open--text")
    
    burgers.forEach(burger => {
        burger.classList.toggle("menu--open--burger")
    });
})