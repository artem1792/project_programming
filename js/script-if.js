/* нахождение минимума среди двух чисел */

let x, y, min

x = parseInt(prompt("Введите первое число"))
y = parseInt(prompt("Введите второе число"))

if (x < y) {
    min = x
} 
else {
    min = y
}

alert("min = " + min)