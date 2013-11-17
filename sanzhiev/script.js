
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
  
  

