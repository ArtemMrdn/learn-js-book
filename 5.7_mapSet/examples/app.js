// Map и Set
//Map это коллекция [ключ, значение] основное отлиичие с Object в том что Map позволяет использовать ключи любого типа 


// Методы и свойства
/* new Map() – создаёт коллекцию.
map.set(key, value) – записывает по ключу key значение value.
map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
map.delete(key) – удаляет элемент по ключу key.
map.clear() – очищает коллекцию от всех элементов.
map.size – возвращает текущее количество элементов.*/

let map = new Map();





map.set('1', 'str1');    //строка в качестве ключа
map.set(1, 'numb');   //строка в качестве цифры
map.set(true, 'bool1');  //строка в качестве булевого значение

//Object приводит ключи к строкам, Map сохраняет тип ключей, так что в этом случае сохранится два разных значения.
alert(map.get(1));   //numb
alert(map.get('1')); //str1

alert(map.size); // 3



//Map может использовать объекты в качестве ключей.
let john = { name: "John" };
// давайте сохраним количество посещений для каждого пользователя
let visitsCountMap = new Map();
// объект john - это ключ для значения в объекте Map
visitsCountMap.set(john, 123);
alert(visitsCountMap.get(john)); // 123


//Перебор Map 
/*
Для перебора коллекции Map есть 3 метода:

map.keys() – возвращает итерируемый объект по ключам,
map.values() – возвращает итерируемый объект по значениям,
map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.
Например:*/

let recipeMap = new Map([
  ['огурец', 500]
  ['помидор', 100]
  ['лук', 300]
]);

// перебор по ключам овощи (строки)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable)  //огурец, помидор, лук
};

// Перебор по значениям (числа)
for (let amount of recipeMap.values()) {
  alert(amount); //500 и тд
};

// Перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap.entries()) {
  alert(entry); //Огурец 500, и тд
};



// Object.entries: Map из Object. При создании Map мы можем указать массив с парами ключ-значение, как в этом примере.
let map = new Map([
  ['1', 'str1'],    
  [1, 'numb'], 
  [true, 'bool1'],
]);

alert(map.get()) // str1


//Мы можем создать Мар из обычного обьекта:
let obj = {
  name: 'John',
  age: 30,
};
let map = new Map(Object.entries(obj)); //Здесь Object.entries возвращает массив пар ключ-значение: [ ["name","John"], ["age", 30] ]


// Object.fromEntries: Object из Map. Этот метод получив массив пар вида  [ключ, значение], он создает из них обьект:
let prices = Object.fromEntries([
  ['banana', 250],
  ['orange', 150],
  ['meat', 50],
])

//prices = {banan: 250, orange: 150, meat: 50}
alert(prices.orange); //150 

let obj = Object.fromEntries(prices); // Мы можем использовать Object.fromEntries чтобы получить обычный обьект из Map
alert(obj.orange) //150


//Set. Это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.
/*
Его основные методы это:

new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
set.clear() – удаляет все имеющиеся значения.
set.size – возвращает количество элементов в множестве.
Пример:*/

let set = new Set();
let john = {name: 'John'};
let marry = {name: 'Marry'};
let pete = {name: 'Pete'};

set.add(john);
set.add(marry);
set.add(pete);
set.add(john);
//set хранит только 3 уникальных значения
alert(set.size) //3

for(let user of set) {
  alert(user)  // john marry pete
}





