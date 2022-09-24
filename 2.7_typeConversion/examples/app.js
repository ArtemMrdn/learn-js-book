'use strict'


//Строковое преобразование
let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string


//Численное преобразование
let str = "123";
alert(typeof str); // string

let num = Number(str); // становится числом 123

alert(typeof num); // number



let age = Number("Любая строка вместо числа");       //Если строка не может быть явно приведена к числу, то результатом преобразования будет NaN

alert(age); // NaN, преобразование не удалось

/*
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
*/


/*Логическое преобразование. Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
Все остальные значения становятся true.*/

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false
alert( Boolean(" ") ); // пробел это тоже true (любая непустая строка это true)