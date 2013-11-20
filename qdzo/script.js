var login  = prompt("Enter a login:");
switch (login) {
	case "ded": 
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
				break;
	case "bob" :
				var iterator = 5;
				do{
					var pass = prompt("enter a pass:");
					if(pass != "bobbob"){
						alert("wrong password, enter once again!");
						iterator--;
					}
					else{
						alert("I know where you were last summer!");
						break;
					}
			
				} while(iterator>0)
				break;			
	case "ann" :
				var iterator = 5;
				do{
					var pass = prompt("enter a pass:");
					if(pass != "annann"){
						alert("wrong password, enter once again!");
						iterator--;
					}
					else{
						alert("Hello Ann, would you go to the theatre");
						break;
					}
			
				} while(iterator>0)
				break;			

	default: alert("отказ в авторизации!");
}

	


