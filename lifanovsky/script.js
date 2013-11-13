//console.log("!!!");
//var s  = prompt("Как у тебя дела?"); //confirm
//alert("У тебя всё " + s);

//var age = prompt("Сколько тебе лет?");
//if(age < 18) alert("Пошёл вон!");

var login = prompt("Введите логин");
if(login == "spiderman"){
    var pass = prompt("Введите пароль");
    if(pass == "asdzxc") {
        alert("Даешь герою суперсекретную инфу!");
    }
    else {
        alert("Пошел вон!");
    }
} else {
    alert("Пошел вон!");
}