
autorization();

function autorization(){
	var count = 5;
	outer: while (true) {

		var login = prompt("Введите логин:");
		if (login == "login") {
			for (i = 0; i < count; i++){
				var pass = prompt("Введите пароль:");
				if (pass == "password") {
					document.write("<h1>Суперсекретная информация</h1>");
					break outer;
				}
				else{
					if (i == (count - 1)){
						alert("Вам отказано в авторизации");
						break outer;
					}
					else{
						alert("Пароль неверен, осталось попыток: " + (count - 1 - i));
					}
				}
			}
		}
		else{
			alert("Такой логин не зарегистрирован");
		}

	}
}