var login = prompt("Введите логин");
if(login == "spiderman") {
    metka:for(var i=0; i<5; i++) {
        var pass = prompt("Введите пароль");
        switch(pass) {
            case "asdzxc":
                alert("Даешь супергерою секретную инфу!");
                break metka;
            case "123":
                alert("Тоже даешь супергерою секретную инфу!");
                break metka;
            default:
                if(4-i==0) {
                    alert("Попыток больше нет :(");
                } else {
                    alert("Количество попыток: "+(4-i));
                }
        }
    }
} else {
    alert("Нет доступа!");
}