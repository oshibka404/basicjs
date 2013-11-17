var	
    default_login_1 = "admin",
    default_pwd_1 = "admin",
    default_login_2 = "ad",
    default_pwd_2 = "ad",
    default_login_3 = "adm",
    default_pwd_3 = "adm",
    entered_login = prompt("Введите имя пользователя");

switch (entered_login) {
    case default_login_1: 
        logon(default_pwd_1);
        break;
    case default_login_2:
        logon(default_pwd_3);
        break;
    case default_login_3:
        logon(default_pwd_3);
        break;
    default:
        alert("Неверное имя пользователя");
};

function logon(pwd) {
	var entered_pwd = prompt("Введите пароль");
        for(var i=4; i>0; i--) {
            if (entered_pwd == pwd) {
		alert("Ты таки взломал систему, мегахакер!");
                break;
            } else {entered_pwd = prompt("Неверный пароль. Попробуйте ещё раз. Осталось попыток - "+i);} 
        }
        
        if (i==0) {
            alert("Отказано в доступе!");
        }
}

/*111	
& and
| or
^ xor
~ no
typeof - возвращает тип переменной
parseInt - извлечение числа из строки
console.log(s);  - метод вывода в консоль
alert(""); - информацонное окно
prompt(""); - поле ввода переменной
confirm(""); - окно ОК/Отмена
*/

