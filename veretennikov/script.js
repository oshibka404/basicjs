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
