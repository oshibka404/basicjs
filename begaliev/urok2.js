var login = prompt("Введите логин");
 var pass = "string";

switch (login){
	case ("qwerty") :               
                         pass = prompt ("Введите пароль");     
                         alert("Твой пароль " + pass);  
                         break; 
                          
   case ("123456") :
   							 pass = prompt ("Введите имя");     
                         alert("Твое имя " + pass);  
                         break;
                         
	case ("god") :
                         pass = prompt ("Введите девичью фамилию матери");     
                         alert("Твоя мама " + pass);  
   							 break;
                   	
 default :
    alert("Неверный логин!")
 }
 