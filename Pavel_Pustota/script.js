for (i=0; i<5; i++) {
        var login = prompt('Введи логин, у тебя осталось '+(5-i)+' попыток');
        if (login==='demo'){
                for (i=0; i<5; i++) {
                        var password = prompt('Введи пароль, у тебя осталось '+(5-i)+' попыток');
                        if (password==='demo'){
                                console.log('You win');
                                break;
                          };
                };        
                break;
        };
 };
 
