'use strict'
/*prompt показывает сообщение и запрашивает ввод текста от пользователя. 
Возвращает напечатанный в поле ввода текст или null, если была нажата кнопка «Отмена» или Esc с клавиатуры.*/


let age = prompt('Сколько тебе лет?')                 
alert(`Тебе ${age} лет!`)


/*показывает сообщение и ждёт, пока пользователь нажмёт OK или Отмена. 
Возвращает true, если нажата OK, и false, если нажата кнопка «Отмена» или Esc с клавиатуры.*/


let isBoss = confirm('Ты здесь босс качалки?')
alert(isBoss)