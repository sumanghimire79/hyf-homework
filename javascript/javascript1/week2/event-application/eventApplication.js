 function getEventWeekday( remainingDay){
    const date = new Date();
    let day = date.getDay();
    let eventDay = day + remainingDay;
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    console. log("Today is : " + daylist[day] + "." + " The event is going to happen in " + eventDay + " days to come. Which is on "+ daylist[eventDay % 7]);

} 
getEventWeekday(14);




