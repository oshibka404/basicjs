var login = prompt("Введите логин");
if(login == "spiderman") {
    for(var i=0; i<5; i++) {
        var pass = prompt("Введите пароль");
        if(pass == "asdzxc") {
            alert("Даешь супергерою секретную инфу!");
            break;
        } else {
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