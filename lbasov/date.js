/**
 * Created by prt on 20.11.13.
 */

// 00:00 01.03 2119 года
function printDate() {
    var d = new Date();
    var dateString = d.getHours() +":"+ d.getMinutes()+" ";
    dateString += d.getDate()+"."+ d.getUTCMonth()+ " "+ d.getFullYear() + " года";
    return dateString;
}