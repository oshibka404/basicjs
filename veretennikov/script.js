/*	КОНСПЕКТ КОНСПЕКТ КОНСПЕКТ

	var q = prompt('Как дела?');
	alert("У тебя все " + q);
	parseInt - из строки в число
	tipeof $перем - тип переменной	
	prompt (вывод текстового поля)
	=присвоейние ==сравнение ===строгое сравнение (обязательно переменные одного типа)
	
	alert(typeof a);
	alert(a / b);
	alert(a * b);
------------- авторизация без циклов ------------------	
	var login = prompt("Логин");

	if (login=='ключ') {
	var pass = (prompt("Пароль"));
	 if (pass=='123') {alert ('Секретная информация');}
	 else alert ('Неверный пароль');

}
else alert ('Неверный логин'); 
------------- авторизация без циклов ------------------	
*/
var i;
var n;
for (i=0; i<5; i++)
{
	var login = prompt("Enter login");
	if (login=='123') 
	{
		for (n=0; n<5; n++)
		{
			var pass = prompt("Enter password");
			if (pass=='123') {alert ('Секретная информация'); break;}
			if (n>=4) {alert ('Ошибка авторизации');}
		}
	}
	if (i>=4) {alert ('Ошибка авторизации');}
	if (pass=='321') break;
	if (n>=4) break;
}
