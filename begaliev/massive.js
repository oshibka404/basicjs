var sample = [100, "Они близко", 300, "Он тот, кто ждет за стеной", [1,2,3,4], 500, 600, [10, 20, [-1, -2, [-10, -20, "Прячься"], -3, -4], 30, "Скоро будет поздно"], 700, 800, "Ничто не спасет"];

var foo = function(arr) {
  var argv = arguments,
        s = 1;       
    for(var i = 0; i < argv.length; i++) {
        s = argv[i];
    }
    return s;
}

alert(foo(sample));