
autorization();

function autorization(){
	var count = 5;
	outer: while (true) {

		var login = prompt("Введите логин:");
		if ((login == "login") ||(login == "admin") || (login == "mylogin")) {
			for (i = 0; i < count; i++){
				var pass = prompt("Введите пароль:");
				if (pass == "password") {
					check(login);
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

function check(login){
	switch(login) {
		case "login":
			document.write("<h1>Суперсекретная информация</h1>");
			break;
		case "admin":
			document.write("<h1>Извини, но ты ошибся номером</h1>");
			break;
		case "mylogin":
			document.write("<h1>It's a trap!</h1>");
			break;
		default:
			break;
	}
}