
autorization();

function autorization(){
	outer: while (true) {

		var login = prompt("Введите логин:");
		if (login == "login") {
			for (i = 0; i < 5; i++){
				var pass = prompt("Введите пароль:");
				if (pass == "password") {
					alert("Суперсекретная информация");
					break outer;
				}
				else{
					if (i == 4){
						alert("Вам отказано в авторизации");
						break outer;
					}
					else{
						alert("Пароль неверен, осталось попыток: " + (4 - i));
					}
				}
			}
		}
		else{
			alert("Такой логин не зарегистрирован");
		}

	}
}