/*
alert("Сейчас будет ошибка")                 код с ошибкой, т.к. не стоит точка с запятой. 

[1, 2].forEach(alert)                        примере без точки с запятой возникает ошибка, потому что JavaScript не вставляет точку с запятой перед квадратными 
                                             скобками [...]. И поэтому код в первом примере выполняется, как одна инструкция. Вот как движок видит его:
                                                  alert("Сейчас будет ошибка")[1, 2].forEach(alert)
*/


alert("Теперь всё в порядке");

[1, 2].forEach(alert)