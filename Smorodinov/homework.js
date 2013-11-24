/* 
Дан произвольный массив, содержащий числа, строки или другие массивы. Эти массивы, в свою очередь, могут также содержать числа, строки и другие массивы. Количество уровней вложенности не ограничено.

Нужно написать функцию, которая возвращает через запятую все элементы всех массивов в том же порядке, в котором они представлены в коде.

Например, foo([1,2,3,[4,5,[6,7],8],9]); должно вернуть строку 1,2,3,4,5,6,7,8,9.

Удачи. Это куда интереснее факториалов и сортировок.
*/

//Функция выволит все элементы массива в одну строку. Рекурсия для проверки внутренних массивов. slice - удаляет последнюю запятую (последний символ строки). 

var sample = [100, "Они близко", 300, "Он тот, кто ждет за стеной", [1,2,3,4], 500, 600, [10, 20, [-1, -2, [-10, -20, "Прячься"], -3, -4], 30, "Скоро будет поздно"], 700, 800, "Ничто не спасет","SSCS6000"];

var foo = function(arr) {
	var str = "";
	for (var i = 0; i < arr.length; i++) {
    	
    	if (arr[i] instanceof Array){
    		str = str + foo(arr[i]);
    	}
    	else {
    		str = str + arr[i] + ",";
    	}
    }
    return str.slice(0,-1);
}

alert(foo(sample));