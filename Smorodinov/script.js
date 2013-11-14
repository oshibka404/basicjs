
autorization();

function autorization(){
	while (true) {

		var login = prompt("Введите логин:");
		if (login == "login") {
			var pass = prompt("Введите пароль:");
			if (pass == "password") {
				alert("Суперсекретная информация");
				break;
			}
			else{
				alert("Пароль неверен");
			}
		}
		else{
			alert("Логин неверен");
		}

	}
}