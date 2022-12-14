// ||(ИЛИ)

// в случае, если какой-либо из аргументов true, он вернёт true, в противоположной ситуации возвращается false.
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

// оператор || используется в if
let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'Офис закрыт.' );
}

//ИЛИ «||» находит первое истинное значение
result = value1 || value2 || value3;
//Если результат true, останавливается и возвращает исходное значение этого операнда.Если все операнды являются ложными (false), возвращает последний из них.
alert( 1 || 0 ); // 1
alert( true || 'no matter what' ); // true

alert( null || 1 ); // 1 (первое истинное значение)
alert( null || 0 || 1 ); // 1 (первое истинное значение)
alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)

//Если бы первый аргумент имел значение false, то || приступил бы к вычислению второго и выполнил операцию присваивания:
let x;

true || (x = 1);

alert(x); // undefined, потому что (x = 1) не вычисляется

// &&(И)

//В традиционном программировании И возвращает true, если оба аргумента истинны, а иначе – false
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

//Пример с if
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}


//И «&&» находит первое ложное значение
result = value1 && value2 && value3;
//Если результат false, останавливается и возвращает исходное значение этого операнда. Если все операнды были истинными, возвращается последний.


// Если первый операнд истинный,
// И возвращает второй:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

//ПРИОРИТЕТ && БОЛЬШЕ ЧЕМ У || !!!!!!!!!!!!!!!



//!(HE)

result = !value

alert( !true ); // false
alert( !0 ); // true