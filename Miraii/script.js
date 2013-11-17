var password = "test";
var n = 5;
var i = 1;

while (i <= 5)
	{
	var userpassword = prompt("Введите пароль");
			if (userpassword == password)
			{
				alert ("Tеперь вам доступны все секретные файлы!");
				break;
			}
			else
			if (i == n)
			{
				alert ("Вам отказано в авторизации")
				break;
			}
			else 
			{
			alert ("Неверный пароль. Осталось "+(n-i)+" попытки");
			i++;
			}
	}



