var login = prompt("Введите логин");
var pass = "string";
var pass_count = 0;

if (login == "qwerty") {
	good: {   
		   for (; pass_count <= 5; pass_count++) {    	
		            if (pass_count == 5) { 
		                  alert("Давай! До свидания!");
		              } 
		              else {	              
						   	pass = prompt ("Введите пароль");     
						       if (pass == "qwerty") {
						       	alert("Бинго!"); 
						       	break good; 
						       }
						       else {
						       	alert("Неверный пароль!");
						       }      
 						}	
         
   			}
			}
}
else {
   alert("Неверный логин!")
}


/*
переделать форму авторизации так,
 чтобы она в случае неверного ввода пароля запрашивала пароль снова,
  но после пяти неправильных попыток выводила отказ в авторизации
*/