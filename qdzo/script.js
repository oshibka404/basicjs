var login  = prompt("Enter a login:");
if (login != "ded") {
	alert("отказ в авторизации!");
}
else {
	var iterator = 5;
	do{
		var pass = prompt("enter a pass:");
		if(pass != "dedded"){
			alert("wrong password, enter once again!");
			iterator--;
		}
		else{
			alert("you are merried, ded!");
			break;
		}
			
	} while(iterator>0)
	
}

