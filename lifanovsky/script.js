var login = prompt("Введите логин");
if(login == "spiderman") {
    for(var i=0; i<5; i++) {
        var pass = prompt("Введите пароль");
        var check = false;
        switch(pass) {
            case "asdzxc":
                alert("Даешь супергерою секретную инфу!");
                check = true;
            break;
            case "123":
                alert("Тоже даешь супергерою секретную инфу!");
                check = true;
            break;
            default:
                if(4-i==0) {
                    alert("Попыток больше нет :(");
                } else {
                    alert("Количество попыток: "+(4-i));
                }
        }
        if(check) break;
    }
} else {
    alert("Нет доступа!");
}