
// 1. пройти по всем элементам
// 2. если текущий элемент не является массивом, то добавляем к результату
// 3. иначе передаем массив в foo()

var sample = [100, "Они близко", 300, "Он тот, кто ждет за стеной", [1,2,3,4], 500, 600, [10, 20, [-1, -2, [-10, -20, "Прячься"], -3, -4], 30, "Скоро будет поздно"], 700, 800, "Ничто не спасет"];

var foo = function(arg) {
    var result = "";

    for (var i = 0; i < arg.length; i++) {

        var ch;
        if (i != arg.length - 1) {
            ch = ", "; 
        } else { 
            ch = "";
        }

        if (arg[i] instanceof Array) {
            result += foo(arg[i]) + ch;
        } else {
            result += arg[i] + ch;
        }
    }

    return result;
}

alert(foo(sample));