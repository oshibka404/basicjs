
autorization();

function autorization(){
	var count = 5;

	var database = {
		"login": "password",
		"admin": "admin",
		"mylogin": "mypass"
	};

	outer: while (true) {

		var log = prompt("Введите логин:");
		if (log in database) {
			for (i = 0; i < count; i++){
				var pass = prompt("Введите пароль:");

				if (database[log] = pass) {
					check(log);	
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
			document.write("<h1>It's a trap! Пока ты ломал, мы тебя уже вычислили по IP, маленький хакер!</h1>");
			break;
		default:
			document.write("<h1>Извини, но ты ошибся номером</h1>");
			break;
	}
}