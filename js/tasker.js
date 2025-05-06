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
    newTask.innerHTML = `<span>${text}</span>`;
    container.append(newTask);

    tasks = document.querySelectorAll(".task");
    console.log(tasks); 
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
    // let value =

    let newTasks= [...tasks];
    newTasks = newTasks.filter(function(item) {
        return item.innerHTML.indexOf(value) != -1;
    })
    
    container.innerHTML = "";
})