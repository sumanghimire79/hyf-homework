/* Suman ghimire js1-w3 seriesDurationOfMyLife */

// array of series/serials object
const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
    {
        title: "The comedy Champion",
        days: 20,
        hours: 12,
        minutes: 12,
    },
    {
        title: "The Kapil Sharma Show",
        days: 50,
        hours: 12,
        minutes: 10,
    },

];

function logOutSeriesText(seriesDurations) {
    // write code here
    let outputString = "";
    let percent = 0;
    let totalTimeSpent = 0;
    // for loop of array that reads all the series of seriesDurations array
    for (const series of seriesDurations) {
        //count the percent of each series
        // converts days and hour to minutes 
        const seriesDaysToMinutes = series.days * 24 * 60 ;
        const seriesHourToMinutes = series.hours * 60 ;
        const seriesMinutes = series.minutes;
        // aver age 80 years is calculated in minutes 
        const AverageLifeToMinutes = 80 * 365 * 24 * 60;
        // the total time  of series in minutes is divide by age in minutes
        percent = (seriesDaysToMinutes + seriesHourToMinutes + seriesMinutes) / AverageLifeToMinutes * 100; //out put percent
        
        outputString += series.title + " took : " + Math.floor(percent * 100) / 100 + " % of my life\n"+ " \n";

        totalTimeSpent += Math.floor(percent * 100) / 100 ;
    }
    console.log(outputString);
    console.log( " which is " + totalTimeSpent  + " % of my total life.");
}
logOutSeriesText(seriesDurations);

/*
Game of thrones took 0.01% of my life
Sopranos took 0.012% of my life
The Wire took 0.007% of my life
In total that is 0.2% of my life
*/