var	
    default_login = "admin",
    default_pwd = "admin",
    entered_login = prompt("Введите имя пользователя");

if (entered_login == default_login) {
	var entered_pwd = prompt("Введите пароль");
        for(var i=4; i>0; i--) {
            if (entered_pwd == default_pwd) {
		alert("Ты таки взломал систему, мегахакер!");
                break;
            } else {entered_pwd = prompt("Неверный пароль. Попробуйте ещё раз. Осталось попыток - "+i);} 
        }
        
        if (i==0) {
            alert("Отказано в доступе!");
        }
} else {alert("Неверное имя пользователя");}


/*	
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

