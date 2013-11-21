/**
 * Created by prt on 21.11.13.
 */


getId = function(id) {
    return document.getElementById(id);
};

getTags = function(tagName) {
   return document.getElementsByTagName(tagName);
};

intervalId = 0; // We need this global var to correctly process situation when we need
                // start new timer while previous is still running.

function setupCountdown(id ,minutes){
    var element = getId(id),
        endDate = new Date(  new Date().getTime() + minutes * 60000 );

    clearInterval(intervalId);
    restorePageStatus();

    var tickFunction = function(){
        var totalSecondsLeft = Math.round( (endDate.getTime() - new Date().getTime()) / 1000);
        if(totalSecondsLeft > 0){
            var minLeft = parseInt( totalSecondsLeft / 60);
            var secondsLeft = parseInt( totalSecondsLeft % 60 );
            var secondsText = secondsLeft < 10 ? '0'+secondsLeft.toString() : secondsLeft.toString();
            element.innerText = minLeft +":"+secondsText;
        }else {
            clearInterval(intervalId);
            finalizeCountDown(id);
        }
    };
    tickFunction();
    intervalId = setInterval(tickFunction, 1000);
}


function finalizeCountDown(id) {
    var element = getId(id);
    element.innerText = '0:00';
    element.className = 'hide';

    var body = getTags('body')[0];
    body.className = 'foodReady';

    var congrad = getId('congrad');
    congrad.className = 'show';

}

function restorePageStatus() {
    var  body  = getTags('body')[0],
        timer = getId('time_countdown'),
      congrad = getId('congrad');

    body.className = 'foodCooking';
    timer.className = 'show';
    congrad.className = 'hide';
}
