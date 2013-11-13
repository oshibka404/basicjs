/**
 * Created by lbasov on 13.11.13.
 */

function failAuth () {
    alert("Auth failed!");
}

function startAuth() {
    var trueLogin = "secret_login";
    var truePassword = "secret_password";
    var login, password;

    login = prompt("Enter login?");
    if( login === trueLogin ){
        password = prompt("Bingo! Enter password?");
        if(password === truePassword){
            alert('secret info');
        }else {
            failAuth();
        }
    }else {
        failAuth();
    }

}







