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

function auth() {
    var trueLogin = "secret_login";
    var truePassword = "secret_password";
    var maxAuthAttempts = 5;
    var login, password;

    if(loginAttemptCounter.count() < maxAuthAttempts ){
        login = prompt("Enter login?");
        if( login === trueLogin ){
            password = prompt("Enter password?");
            if(password === truePassword){
                alert('secret info');
            }else {
                loginAttemptCounter.increase();
                alert("Password is invalid!");
                auth();
            }
        } else {
            loginAttemptCounter.increase();
            alert("Login is invalid!");
            auth();
        }
    } else {
        alert('Max login attempts are exceeded!');
    }
}







