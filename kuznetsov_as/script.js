var log = "adm";
var pass = "pass";
var i = 0;
var inLog = prompt("Введите Ваш логин");


if (inLog == log){
	do{
		var inPass = prompt("Введите Ваш пароль");
		if(inPass == pass)
		{
			alert("сверхсекретные данные");
			break;
		}
		else 
		{
			alert("Неверный пароль");
			i++;
		}
	}
	while (i<5);
}
else
{
	alert("Неверны логин");
}

