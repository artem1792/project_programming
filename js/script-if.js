{
    /* нахождение минимума среди двух чисел */

    let x, y, z, min

    x = parseInt(prompt("Введите первое число"))
    y = parseInt(prompt("Введите второе число"))
    z = parseInt(prompt("Введите третье число"))
    min = x

    if (y < min) {
        min = y
    }
    if (z < min) {
        min = z
    }

    alert("min = " + min)
}

{
    /* вывести нечетные числа от 0 до 10 */

    for (let i = 1; i < 10; i += 2) {
        console.log(i)
    }
}

{
    /* Найти кол-во нечетных чисел в последовательности. 
    Последовательность целых чисел вводится с клавиатуры и заканчивается вводом 0. */

    let count = 0, x

    x = parseInt(prompt("Введите число"))
    
    while (x != 0) {
        if (x % 2 != 0) {
            count++
        }
        x = parseInt(prompt("Введите число"))
    }

    alert("Количество нечетных чисел = " + count)
}

{
    /* найти кол-во нечетных цифр в натуральном числе */

    let count = 0, d, x

    x = parseInt(prompt("Введите натурально число"))

    while (x != 0) {
        d = x % 10
        if (d % 2 != 0) {
            count++
        }
        x = Math.floor(x / 10)
    }

    alert("Количество нечетных цифр = " + count)
}