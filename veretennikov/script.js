//	var q = prompt('Как дела?');
//	alert("У тебя все " + q);
//	parseInt - из строки в число
// tipeof $перем - тип переменной
// prompt (вывод текстового поля)
// =присвоейние ==сравнение ===строгое сравнение (обязательно переменные одного типа)
/*var a = 8,
b = 2; 

alert(typeof a);
alert(a / b);
alert(a * b);
*/

var login = prompt("Логин");

if (login=='ключ') {
	var pass = (prompt("Пароль"));
	 if (pass=='123') {alert ('Секретная информация');}
	 else alert ('Неверный пароль');

}
else alert ('Неверный логин');

