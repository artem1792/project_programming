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
