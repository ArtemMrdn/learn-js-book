 

// Сравнение строк. Сначала сравниваются первые символы строк. Если первые символы равны, то таким же образом сравниваются уже вторые символы строк.

alert('Я'>'А')            //true
alert('Коты' > 'Кода')    //true
alert('Сонный' > 'Сон')   //true


//Сравнение разных типов

alert( '2' > 1 ); // true, строка '2' становится числом 2
alert( '01' == 1 ); // true, строка '01' становится числом 1 


alert( true == 1 ); // true. true становится 1
alert( false == 0 ); // true. false становится 0


//Строго сравнение "==="

alert( '' == false ); // true
alert( 0 === false ); // false, так как сравниваются разные типы при строгом сравнении 

//Сравнение null и undefined

alert(null === undefined) //false. Значение различные, так как различны их типы
alert(null == undefined)  //true. Равны друг другу и не равны никаким другим значениям.Специальное правило языка.


//Сравнение null с 0

alert(null > 0)  //false
alert(null == 0) //false
alert(null >= 0) //true. Причина в том, что нестрогое равенство и сравнения


//Сравнение undefined c 0

alert(undefined > 0)  //false    
alert(undefined > 0) //false
// Сравнения (1) и (2) возвращают false, потому что undefined преобразуется в NaN, а NaN – это специальное числовое значение, которое возвращает false при любых сравнениях.

alert(undefined == 0)  //false
//Нестрогое равенство (3) возвращает false, потому что undefined равно только null, undefined и ничему больше.