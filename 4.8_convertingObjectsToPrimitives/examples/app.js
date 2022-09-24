//Преобразование к примитивам
//Сущетсувуют три варианта преобразований (три хинта) это string, number, default

//string, для преобразование обьекта к строке, когда операция ожидает получить строку, например alert
alert(obj);  //вывод

anotherObj[obj] = 123; //используем обьект в качестве имени свойтсва


//number, для преобразование обьекта к числу, в случае математических операций:
let num = Number(obj);      //явное преобразование

//математическое 
let n = +obj; // унарный плюс
let delta = date1 - date2;

//сравнение больше/меньше
let greater = user1>user2;


//default, происходит редко когда оператор не знает, какой тип ожидать 
let total = car1 + car2 + car3;  //бинарный плюс

// obj === string/number/symbol
if(user === 1) {   }



/*В процессе преобразования движок JavaScript пытается найти и вызвать три следующих метода объекта:

1)Вызывает obj[Symbol.toPrimitive](hint) – метод с символьным ключом Symbol.toPrimitive (системный символ), если такой метод существует, и передаёт ему хинт.
2)Иначе, если хинт равен "string" пытается вызвать obj.toString(), а если его нет, то obj.valueOf(), если он существует.
3)В случае, если хинт равен "number" или "default" пытается вызвать obj.valueOf(), а если его нет, то obj.toString(), если он существует.*/ 



//Symbol.toPrimitive.  Метод с таким название (если есть) используется для всех преобразований
obj[Symbol.toPrimitive] = function(hint) {
  //должен вернуть примитивное значение
  //hint равно чему-то одному из string, number, default
};
//Например

let user = {
  name: 'Артем',
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint === 'string' ? `{name ${this.name}}` : this.money
  }
}
alert(user)        // hint: string ->  {name: Артем}
alert(+user)       // hint: number ->  1000
alert(user+500)    // hint: default -> 1500




/*to.String/valueOf. Если нет метода Symbol.toPrimitive, JavaScript пытается найти эти два метода, и вызвать следующим образом:
toString -> valueOf   для хинта со значением string
valueOf -> toString   в ином случае   */

let user2 = {
  name: 'Артемий',
  money: 1500,

  //для хинта равного string
  toString(){
    return `{name ${this.name} }`;
  },

  //для хинта равного default, number
  valueOf() {
    return this.money;
  }
};

alert(user2)        // hint: string ->  {name: Артем}
alert(+user2)       // hint: number ->  1000
alert(user2 + 500)    // hint: default -> 1500
//Будет все тоже самое как и Symbol.toPrimitive


//Также иногда мы хотим описать одно универсальное образование обьекта к примиту для всех ситуация. Для этого используем toString

let user3 = {
  name: 'Артемис',

  toString() {
    return this.name;
  }
};
alert(user3);       //toString -> Артемис
alert(user3 + 500); //toString -> Артемис500


//Математические операции включая бинарный +

let obj = {
  // toString обрабатывает все преобразования в случае отсутствия других методов
  toString() {
    return "2";
  }
};

alert(obj * 2) //в данном случае овтет будет 4, т.к умножение сделало его числом
alert(obj + 2) //в данном случае ответ 22, т.к преобразование к примитиву вернуло строку 