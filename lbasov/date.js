/**
 * Created by prt on 20.11.13.
 */

// 00:00 01.03 2119 года
function getDateString( d ) {
    var dateString = d.getHours() +":"+ d.getMinutes()+" ";
    dateString += d.getDate()+"."+ d.getMonth()+ " "+ d.getFullYear() + " года";
    return dateString;
}


function startPrintingDate(){
    var printingFunction = function(){
        alert(  getDateString( new Date() ) );
    };
    setInterval( printingFunction , 1000);

}
