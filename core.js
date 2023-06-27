//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    var x = parseFloat(n);
    return !isNaN(n) && (x | 0) === x;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
	arr = [];
		for (i = 2; i <= 20;i++) {
	if (i%2 ==0)
	}
return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    var sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
	if (n ===1) return 1;
  return n +sum(n -1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
	 return (n != 1) ? n *factorial(n - 1):1;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    while (n > 0 && n % 2 === 0) {
        n /= 2;
    }
    if (n === 1) {
        return true;
    }
    return false;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let a1 = 0;
    let a2 = 1;
    if (n === a1) return 0;
    if (n === a2) return 1;
    for (let i = 1; i < n; i++) {
        let temp = a2; 
        a2 += a1;       
        a1 = temp;      
    }
    return a2;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
