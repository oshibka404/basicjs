/**
 * Created by prt on 18.11.13.
 */
var sample = [100, "Они близко", 300, "Он тот, кто ждет за стеной", [1,2,3,4], 500, 600, [10, 20, [-1, -2, [-10, -20, "Прячься"], -3, -4], 30, "Скоро будет поздно"], 700, 800, "Ничто не спасет"];

var printArray = function(ar) {
    var elements = "";
    for(var i=0; i < ar.length; i++){
        var last = i+1 == ar.length ? "" :", ";
        if(Object.prototype.toString.call(ar[i]) === "[object Array]" ){
           elements += printArray(ar[i]) + last;
        }else{
           elements += ar[i].toString() + last;
        }
    }
    return elements;
};

alert(printArray(sample));