/* 1. Выбор элементов на странице */
/* 1.1 Выбор по ID */
const h1 = document.getElementById("title")
console.log(h1)

/* 1.2 Выбор одного элемента по селектору */
const menu = document.querySelector(".menu")
console.log(menu)

/* 1.3 Выбор нескольких элементов по селектору */
const paragraphs = document.querySelectorAll("p")
console.log(paragraphs)

/* -------------------------------------------------------------------------------------------------------------------------- */

/* 2. Прочитать или изменить содержимое тега */
console.log(h1.textContent);
console.log(h1.innerHTML);
console.log(h1.outerHTML);
console.log(h1.innerText);
console.log(h1.outerText);

h1.textContent = 'Новый заголовок <i class="bi bi-alipay"></i>';
h1.innerHTML = 'Новый заголовок <i class="bi bi-alipay"></i>';
// h1.innerHTML = "";

/* -------------------------------------------------------------------------------------------------------------------------- */

/* 3. Работа со стилями (атрибут style) */
h1.style.color = "red";
h1.style.fontSize = "48px";
console.log(h1.style)

/* -------------------------------------------------------------------------------------------------------------------------- */

/* 4. Работа с классами (атрибут class) */
menu.classList.add("border"); // добавили класс

const h2 = document.querySelector(".blue");
h2.classList.remove("blue"); // удалить класс

console.log(menu.classList.contains("border")) // проверить есть ли такой класс у элемента

/* -------------------------------------------------------------------------------------------------------------------------- */

/* 5. Работа с атрибутами */
const firstLink = document.querySelector(".menu li:first-child a");
console.log(firstLink.getAttribute("href")) // узнать значение атрибута

firstLink.setAttribute("href", "https://midis.ru/"); // установить/изменить атрибут
firstLink.setAttribute("target", "_blank")

firstLink.removeAttribute("target"); // удалить атрибут