//Function Expression


//синтаксис Function Expression
let sayHi = function() {
  alert( "Привет" );
};


//синтаксис Function Declaration
function sayHi() {
  alert( "Привет" );
}





//Можем скопировать функцию в другую переменную:
function sayHi() {   // (1) создаём
  alert( "Привет" );
}

let func = sayHi;    // (2) копируем

func(); // Привет    // (3) вызываем копию (работает)!
sayHi(); // Привет   //     прежняя тоже работает 





//Функции-«колбэки»
/*ask(question, yes, no) 
question
Текст вопроса
yes
Функция, которая будет вызываться, если ответ будет «Yes»
no
Функция, которая будет вызываться, если ответ будет «No»*/
//Function Declaration:
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);





//Function Expression:
function ask(question, yes, no) { 
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);