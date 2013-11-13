var log = "adm";
var pass = "pass";

var inLog = prompt("Введите Ваш логин");


if (inLog == log){
	var inPass = prompt("Введите Ваш пароль");
	if(inPass == pass)
	{
		alert("сверхсекретные данные");
	}
	else 
	{
		alert("Неверный пароль");
	}
}
else
{
	alert("Неверны логин");
}

