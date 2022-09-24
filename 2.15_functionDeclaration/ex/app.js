//Перепишите функцию, используя оператор '?' или '||'

/*function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}*/
function checkAge(age) {         //?
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {         // ||
  return (age > 18) || confirm('Родители разрешили?');
}

//Функция min(a, b). Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
/*min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1*/
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}


//Функция pow(x,n). Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
/*
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
*/
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}


//Не до конца понял, НУЖНО ВИДЕО!!!!