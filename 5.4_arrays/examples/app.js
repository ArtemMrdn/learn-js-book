/* Массивы

квадратные скобки (обычно)
let arr = [item1, item2...];
new Array (очень редко)
let arr = new Array(item1, item2...);*/

// Существует два варианта синтаксиса для создания пустого массива:
let arr = new Array();
let arr = [];


// Мы можем получить элемент, указав его номер в квадратных скобках:
let fruits = ["Яблоко", "Апельсин", "Слива"];

alert( fruits[0] ); // Яблоко
alert( fruits[1] ); // Апельсин
alert( fruits[2] ); // Слива




// Мы можем заменить элемент Или добавить новый к существующему массиву:
fruits[2] = 'Груша'; // теперь ["Яблоко", "Апельсин", "Груша"]
fruits[3] = 'Лимон'; // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]


//Общее число элементов массива содержится в его свойстве length:
let fruits = ["Яблоко", "Апельсин", "Слива"];

alert( fruits.length ); // 3


// В массиве могут храниться элементы любого типа.
// разные типы значений
let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];

// получить элемент с индексом 1 (объект) и затем показать его свойство
alert( arr[1].name ); // Джон

// получить элемент с индексом 3 (функция) и выполнить её
arr[3](); // привет



// Методы pop/push, shift/unshift
/*
push добавляет элемент в конец.
shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.
push добавляет элемент в конец.
pop удаляет последний элемент*/

//pop Удаляет последний элемент из массива и возвращает его 
let fruits = ["Яблоко", "Апельсин", "Груша"];
alert( fruits.pop() ); // удаляем "Груша" и выводим его
alert( fruits ); // Яблоко, Апельсин

//push Добавляет элемент в конец массива:
let fruits = ["Яблоко", "Апельсин"];
fruits.push("Груша");   //Вызов fruits.push(...) равнозначен fruits[fruits.length] = ....
alert( fruits ); // Яблоко, Апельсин, Груша

//Методы, работающие с началом массива:
//shift Удаляет из массива первый элемент и возвращает его:
let fruits = ["Яблоко", "Апельсин", "Груша"];
alert( fruits.shift() ); // удаляем Яблоко и выводим его
alert( fruits ); // Апельсин, Груша

// unshift Добавляет элемент в начало массива:
let fruits = ["Апельсин", "Груша"];
fruits.unshift('Яблоко');
alert( fruits ); // Яблоко, Апельсин, Груша

//Методы push и unshift могут добавлять сразу несколько элементов:
let fruits = ["Яблоко"];

fruits.push("Апельсин", "Груша");
fruits.unshift("Ананас", "Лимон");

// ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]
alert( fruits );


//Внутреннее устройство массива, копирование по ссылке
let fruits = ["Банан"]
let arr = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)
alert( arr === fruits ); // true
arr.push("Груша"); // массив меняется по ссылке
alert( fruits ); // Банан, Груша - теперь два элемента



//Перебор элементов
//Одним из самых старых способов перебора элементов массива является цикл for по цифровым индексам:
let arr = ["Яблоко", "Апельсин", "Груша"];
for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

//Но для массивов возможен и другой вариант цикла, for..of:
let fruits = ["Яблоко", "Апельсин", "Слива"];

// проходит по значениям
for (let fruit of fruits) {
  alert( fruit );
}

//Так как массив является объектом, можно использовать и вариант for..in:
let arr = ["Яблоко", "Апельсин", "Груша"];

for (let key in arr) {
  alert( arr[key] ); // Яблоко, Апельсин, Груша
}


//Многомерные массивы
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[1][1] ); // 5, центральный элемент