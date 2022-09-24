//switch
//Конструкция switch имеет один или более блок case и необязательный блок default.

switch(x) {
    case 'value1':  // if (x === 'value1')
      ...
      [break]
  
    case 'value2':  // if (x === 'value2')
      ...
      [break]
  
    default:
      ...
      [break]
  }

/*Переменная x проверяется на строгое равенство первому значению value1, затем второму value2 и так далее.
Если соответствие установлено – switch начинает выполняться от соответствующей директивы case и далее, до ближайшего break (или до конца switch).
Если ни один case не совпал – выполняется (если есть) вариант default.*/

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Мало' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}

//Любое выражение может быть аргументом для switch/case
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("Выполнится, т.к. значением +a будет 1, что в точности равно b+1");
    break;

  default:
    alert("Это не выполнится");
}


//Группировка нескольких case 
let a = 2 + 2;

switch (a) {
  case 4:
    alert('Правильно!');
    break;

  case 3: // (*) группируем оба case
  case 5:
    alert('Неправильно!');
    alert("Может вам посетить урок математики?");
    break;

  default:
    alert('Результат выглядит странновато. Честно.');
}