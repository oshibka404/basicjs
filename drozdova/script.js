var login1="Nastya";
var login2="Katya";
var login3="Natasha"
var login = prompt("Ввведите имя")
var password="qwerty123";
var i=0;
switch (login) {
	case login1:
	alert("Логин хороший");
		break
	case login2:
		alert("Логин пойдет");
		break
	case login3:
		alert("Логин не очень, но так и быть");
		break
	default:
		alert("логин неверен");
		break
};
if (login==login1 || login==login2 || login==login3) {
        while (userpassword!=password && i<5) {
                var userpassword=prompt("Введите пароль");
                i++;
                };
                if (password==userpassword) {
                        alert("секретная инфа: логин " + login + ", пароль " + password);
                }
                else { alert("Неверный пароль");
                }                        
};


	
