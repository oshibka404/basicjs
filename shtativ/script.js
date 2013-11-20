var a,
    b,
    c;
a = prompt ("Enter your username");
if ( a == "root" ) {
    for ( c = 5; c > 0; c-- ) {
        b = prompt("Enter your password. There are " + c + " trys");
        
        if ( b == "pass" ) {
            alert ("=======secret info=========");
            break;
        }
    }
} else {
    alert ("You are not logged");}

