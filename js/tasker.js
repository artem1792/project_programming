const btnCreateTask = document.getElementById("btn-create-task");
const textTask = document.getElementById("text-task");
const container = document.querySelector(".container");

let tasks = document.querySelectorAll(".task");
console.log(tasks);

// Добавление новой задачи
btnCreateTask.addEventListener("click", function(event){
    event.preventDefault(); // отменяем действие браузера по умолчанию - перезагрузку страницы
    console.log("click");
    let text = textTask.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `<span>${text}</span>
                <i tabindex="0" class="bi bi-pencil-square btn-edit"></i>
                <i tabindex="0" class="bi bi-trash-fill btn-remove"></i>`;
    container.append(newTask);

    tasks = document.querySelectorAll(".task");
    console.log(tasks); 
});

// Удаление и редактирование задачи
container.addEventListener("click", (event) => {
    const btn = event.target; // элемент, по которому кликнул пользователь
    if (btn.classList.contains("btn-remove")) {
        btn.closest(".task").outerHTML = "";
    }
    if (btn.classList.contains("btn-edit")) {
        btn.closest(".task").querySelector("span").setAttribute("contenteditable", "true");
    }
    tasks = document.querySelectorAll(".task");
});

// Тестовая кнопка
const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let tasks = document.querySelectorAll(".task"); // NodeList
    for (let task of tasks) {
        // if (task.classList.contains("important")) {
        //     task.classList.remove("important")
        // } else {
        //     task.classList.add("important")
        // }
        task.classList.toggle("important")
    }
})

// Сортировка по имени
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

function compare(a, b) {
    if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return 1 ;
    if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
    if (a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return -1;
}
btn1.addEventListener("click", function() {
    let newTasks = [...tasks].sort(compare);
    container.innerHTML = "";
    for (let i in newTasks) {
        container.append(newTasks[i])
    }
})

function compareReverse(a, b) {
    if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return -1 ;
    if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
    if (a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return 1;
}
btn2.addEventListener("click", function() {
    let newTasks = [...tasks].sort(compareReverse);
    container.innerHTML = "";
    for (let i in newTasks) {
        container.append(newTasks[i])
    }
})

// Оставить только срочные
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function() {
    let newTasks = [...tasks];
    container.innerHTML = "";
    for (let task of newTasks) {
        if (task.classList.contains("important"))
            container.append(task);
    }
})

// Фильтровать по имени
const btn4 = document.getElementById("btn4");

btn4.addEventListener("click", function() {
    let value = document.getElementById("text-task1").value;

    let newTasks= [...tasks];
    newTasks = newTasks.filter(function(item) {
        return item.innerHTML.indexOf(value) != -1;
    });
    container.innerHTML = "";
    for (let item of newTasks) {
        container.append(item);
    }
})

// Сбросить
const btn5 = document.getElementById("btn5");

btn5.addEventListener("click", function() {
    let newTasks = [...tasks];
    container.innerHTML = "";
    for (let i in newTasks) {
        container.append(newTasks[i]);
    }
});

// -------------------------------------------------------------------------

// function myMax() {
//     let max = arguments[0] || 0;
//     for(let i = 1; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[1];
//         }
//     }
// }
// console.log(myMax(4,-1));

// -------------------------------------------------------------------------
// Пример всплытия
// const tags = document.querySelectorAll("*");
// let i = 0;
// for (let tag of tags) {
//     tag.addEventListener("click", (event) => {
//         i++;
//         console.log("Этап " + i);
//         console.log("Целевой элемент");
//         console.log(event.target);
//         console.log("Элемент, который поймал событие");
//         console.log(event.currentTarget);
//     });
// }