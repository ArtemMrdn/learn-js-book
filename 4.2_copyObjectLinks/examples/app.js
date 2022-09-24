//Копирование объектов и ссылки


//Когда переменная объекта копируется – копируется ссылка, сам же объект не дублируется.
let user = { name: "Иван" };
let admin = user; // копируется ссылка


//Мы можем использовать любую из переменных для доступа к ящику и изменения его содержимого:

let user = { name: 'Иван' };
let admin = user;
admin.name = 'Петя'; // изменено по ссылке из переменной "admin"
alert(user.name); // 'Петя', изменения видны по ссылке из переменной "user"


//Сравнение по ссылке. Два объекта равны только в том случае, если это один и тот же объект.
let a = {};
let b = a; // копирование по ссылке

alert( a == b ); // true, т.к. обе переменные ссылаются на один и тот же объект
alert( a === b ); // true

//Другой пример
let a = {};
let b = {}; // два независимых объекта

alert( a == b ); // false



//Клонирование и объединение объектов, Object.assign
//Нам нужно создавать новый объект и повторять структуру дублируемого объекта, перебирая его свойства и копируя их.

let user = {
  name: "Иван",
  age: 30
};

let clone = {}; // новый пустой объект

// скопируем все свойства user в него
for (let key in user) {
  clone[key] = user[key];
}

// теперь в переменной clone находится абсолютно независимый клон объекта
clone.name = "Пётр"; // изменим в нём данные

alert( user.name ); // в оригинальном объекте значение свойства `name` осталось прежним – Иван.



// метод Object.assign,  


/*Object.assign(dest, [src1, src2, src3...])
 Первый аргумент dest — целевой объект.
 Остальные аргументы src1, ..., srcN (может быть столько, сколько нужно) являются исходными объектами
 Метод копирует свойства всех исходных объектов src1, ..., srcN в целевой объект dest. То есть, свойства всех перечисленных объектов, начиная со второго, копируются в первый объект.
 Возвращает объект dest.*/


 //Пример
 let user = { name: "Иван" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);
// теперь user = { name: "Иван", canView: true, canEdit: true }


//Если принимающий объект (user) уже имеет свойство с таким именем, оно будет перезаписано:
let user = { name: "Иван" };
Object.assign(user, { name: "Пётр" });
alert(user.name); // теперь user = { name: "Пётр" }



//Мы также можем использовать Object.assign для замены for..in на простое клонирование:

let user = {
  name: "Иван",
  age: 30
};

let clone = Object.assign({}, user);




//Вложенное клонирование
let user = {
  name: "Иван",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height ); // 182

/*Теперь при клонировании недостаточно просто скопировать clone.sizes = user.sizes, поскольку user.sizes – это объект,
он будет скопирован по ссылке. А значит объекты clone и user в своих свойствах sizes будут ссылаться на один и тот же объект:*/
let user = {
  name: "Иван",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, один и тот же объект

// user и clone обращаются к одному sizes
user.sizes.width++;       // меняем свойство в одном объекте
alert(clone.sizes.width); // 51, видим результат в другом объекте