/* Suman Ghimire js1-w3 smart-phone-usage-app  */

const activities = [];
const getTheDateArr = [];
let date = new Date();
const dd = String(date.getDate()).padStart(2, '0');
const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = date.getFullYear();

date = mm + '/' + dd + '/' + yyyy;

function addActivity(date, activity, duration) {
    activities.push({
        "date": date,
        "activity": activity,
        "duration": duration
    });

    console.log(activities);
}

addActivity(date, "Youtube", 60);
addActivity(date, "facebook", 30);
addActivity(date, "slack", 80);
addActivity(date, "twitter", 90);
console.log("\n");

//Show activity status
function showStatus(activities) {
    let totalTime = 0;
    if (activities.length === 0) {
        console.log(" Add some activities before calling showStatus");
    }
    for (const insideActivities of activities) {
        totalTime += insideActivities.duration;
        console.log("You have " + activities.length + " activities of " + totalTime + " minutes of usages.");
        //Usage limit--------
        if (totalTime > 190) {
            console.log("You have reached your limit, no more smartphoning for you!");
        } else {console.log("your usages limit is not reached yet");
                    }
    }
}
showStatus(activities); // will log out this "You have added 3 activities. They amount to 78 min. of usage"

console.log("\n");
//Extra feature 

//to show the number of actitivies for the specific day
function showStatusImproved(activities) {
    const todayActivites = [];
    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");
    }
    for (const tdActivites of activities) {
        if (tdActivites.date === date) {
            todayActivites.push(tdActivites);
        }
        console.log("You have  " + todayActivites.length + " activities today");
    }
}
showStatusImproved(activities);

console.log("\n");








