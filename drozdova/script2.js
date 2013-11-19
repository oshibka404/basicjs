var sample = [100, "Они близко", 300, "Он тот, кто ждет за стеной", [1,2,3,4], 500, 600, [10, 20, [-1, -2, [-10, -20, "Прячься"], -3, -4], 30, "Скоро будет поздно"], 700, 800, "Ничто не спасет"];

var foo = function(arr) {
    var i=0, a="Something: "; //перед началом каждого массива возвращается a, ее возможно оттуда убрать каким-то способом, чтобы было как в циклах ниже?
    for(i;i<arr.length;i++) { 
		if (!arr[i].splice) {a += arr[i]+", ";}
        else {a += foo(arr[i]);}; 
    };
return a;
};
alert(foo(sample));  

/*
var foo = function(arr) {
    var i=0, k=0, j=0, n=0, a="Something: ";
   for (i=0; i<arr.length; i++) {
                if (!arr[i].splice) {
                     a += arr[i]+", ";}
        else {
                        for (k=0; k<arr[i].length; k++) {
                                if (!arr[i][k].splice) {
                                                             a += arr[i][k]+", ";}
                                else {
                                        for (j=0; j<arr[i][k].length; j++) {
                                                if (!arr[i][k][j].splice) {
                                                       a += arr[i][k][j]+", ";}
                                                else {
                                                        for (n=0; n<arr[i][k][j].length; n++) {
                                                                if (!arr[i][k][j][n].splice) {
                                                                       a += arr[i][k][j][n]+", ";}
                                                        };
                                                };
                                        };
                                };
                        };
        };
    };
return a;
};
alert(foo(sample));
*/