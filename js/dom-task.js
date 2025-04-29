/* Задание 1. */
const paragraph = document.querySelector(".test-text");
paragraph.innerHTML = "Привет, <b>мир!</b> Меня зовут <i>имя.</i>";

paragraph.style.background = "aqua";
paragraph.style.color = "blue";
paragraph.style.border = "2px solid blue";

/* Задание 2. */
const mail = document.getElementById("email");
mail.setAttribute("value", "mail@mail.ru")
mail.setAttribute("disabled", "disabled")

const checkbox = document.getElementById("remember");
checkbox.setAttribute("checked", "checked");

const btn = document.getElementById("btn");
btn.setAttribute("value", "Войти");

/* Задание 3. */
const link = document.createElement("a")
link.textContent = "ссылка на сайт"
link.setAttribute("href", "https://midis.ru/")
link.setAttribute("target", "_blank");
link.classList.add("hover")
link.classList.add("hover:hover")

const block = document.getElementById("block");
block.append(link);

/* Задание 4. */
const btn1 = document.getElementById("btn1");
const circle = document.querySelector("circle");

btn1.addEventListener("click", function(){
    circle.style.transform = "translateY(-15px)";
})