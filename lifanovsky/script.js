/*var login = prompt("Введите логин");
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
}*/

var sample = [100, "Они близко", 300, "Он тот, кто ждет за стеной", [1,2,3,4],
            500, 600, [10, 20, [-1, -2, [-10, -20, "Прячься"], -3, -4], 30,
            "Скоро будет поздно"], 700, 800, "Ничто не спасет"];

var result = "";
var foo = function(arr) {
    //Эту функцию надо наполнить кодом, а вне её ничего не трогать.
    //alert(arr.length);
    for(var i=0; i<arr.length; i++){
        if(typeof(arr[i]) == "object"){
            foo(arr[i]);
        } else {
            //alert(arr[i]);
            result += arr[i].toString()+" ";
        }
    }
    return result;
}

alert(foo(sample));