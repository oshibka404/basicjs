/**
 * Created by lbasov on 13.11.13.
 */

var loginAttemptCounter = constructLoginCounter();


function constructLoginCounter() {
    var logincounter = 0;

    return {
        increase: function() {
            return logincounter++;
        },

        count: function() {
            return logincounter;
        }
    }
}

function messageForLogin (login, failMessage){
    switch (login) {
        case "Andrey":
            return "You are god";
            break;
        case "Jesus":
            return "You are also god";
            break;
        default:
           return failMessage;
    }
}



function auth() {
    var truePassword = "secret_password";
    var failMessage = "You are mortal";
    var maxAuthAttempts = 5;
    var login, password, message;

    if(loginAttemptCounter.count() < maxAuthAttempts ){
        login = prompt("Enter login?");
        if(login == null){ // cancel button is pressed
            return;
        }
        message = messageForLogin(login , failMessage);
        if( message === failMessage ){
            loginAttemptCounter.increase();
            alert(failMessage);
            auth();
        } else {
            password = prompt( message + " Enter password?");
            if(password === truePassword){
                alert('secret info');
            }else {
                loginAttemptCounter.increase();
                alert("Password is invalid!");
                auth();
            }
        }


    } else {
        alert('Max login attempts are exceeded!');
    }
}







