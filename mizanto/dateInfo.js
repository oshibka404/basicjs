var currentDate = new Date();

var hh, mm, dd, MM, yyyy;

hh = currentDate.getHours();
mm = currentDate.getMinutes();
dd = currentDate.getDate();
MM = currentDate.getMonth() + 1;
yyyy = currentDate.getFullYear();

var result = "" + hh + ":" + mm + " " + dd + "." + MM + " " + yyyy + " года";

alert(result);