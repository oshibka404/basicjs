
/*
var login = prompt ("Введите логин");

if (login=="login"){
	var pswrd = prompt ("Введите пароль")
		if (pswrd == "123")
			alert("Доступ к суперсекретной информации открыт!")

} else {
	alert ("Иди вон, негодяй!")
}
*/

/*
var login = prompt ("Введите логин!");

	switch (login){
	case "Eugene":
		alert("Привет! Теперь введи пароль!");
	break;
	case "Nastya":
		alert("До свидания!");
	break;
	default:
		alert("Пока!");
}

if (login=="Eugene"){
	for(var i=1; i < 6; i++){
	var pass = prompt("Введите пароль");
	if (pass == "1234"){
		alert("Доступ к суперсекретной информации открыт!");
		break;
	}
	else{
		if(5-i==0){
			alert("Попытки исчерпаны");
		}
		else{
			alert("Количество попыток: "+(5-i));
		}
	}
	}
}
else{
	alert("Нет доступа!");
}
*/
/*
var sample = [100, "Они близко", 300, "Он тот, кто ждет за стеной", [1,2,3,4], 500, 600, [10, 20, [-1, -2, [-10, -20, "Прячься"], -3, -4], 30, "Скоро будет поздно"], 700, 800, "Ничто не спасет"];

var res = "";

var foo = function(arr){
	
    for (var i = 0; i < arr.lenght; i++){
		if (typeof(arr[i]) == "object"){
			foo (arr [i]);
		}
		else{
			res += arr[i].toString()+ " ";
		}
	}
	return res;
}

alert(foo(sample));
 */

//20.11.


/*
function Robot(name){
	var x = 0,
		y = 0;
	
	this.walkRight = function(){
		x++;
	}
	this.walkDown = function(){
		y++;
	}
	
	this.getX = function() {
		return x;
	}
	
	this.getY = function() {
		return y;
	}
	
	this.name = name;
}

var wally = new Robot("wall-e"),
	eve = new Robot("eve");


wally.color = "grey";
wally.walkRight();
wally.walkRight();
wally.walkDown();


alert(wally.getX());
alert(wally.getY());

alert(wally.color);
alert(eve.color);

*/

var current = new Date();
alert (current.getHours()+":"+current.getMinutes()+ " " +current.getDate()+ "."+current.getMonth()+ " "+current.getFullYear()+" года");
  
  

