var login1="Nastya";
var login2="Masha";
var login3="Dasha"
var login = prompt("Ввведите имя")
var password="qwerty123";
var i=0;
switch (login) {
	case login1:
	 while (userpassword!=password && i<5) {
                var userpassword=prompt("Введите пароль");
                i++;
                };
                if (password==userpassword) {
                        alert("секретная инфа: логин " + login + ", пароль " + password);
                }
                else { alert("Неверный пароль");
                };
		break
	case login2:
		while (userpassword!=password && i<5) {
                var userpassword=prompt("Введите пароль");
                i++;
                };
                if (password==userpassword) {
                        alert("секретная инфа: логин " + login + ", пароль " + password);
                }
                else { alert("Неверный пароль");
                };
		break
	case login3:
		 while (userpassword!=password && i<5) {
                var userpassword=prompt("Введите пароль");
                i++;
                };
                if (password==userpassword) {
                        alert("секретная инфа: логин " + login + ", пароль " + password);
                }
                else { alert("Неверный пароль");
                };
		break
	default: alert("Неверный логин");       
		break
};

	