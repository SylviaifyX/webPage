let todayDate = document.getElementById("date")
let millisecTime = document.getElementById("milliseconds")

function dayOftheWeek() {
    let daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let newdate = new Date();
    let updateDay = daysofWeek[newdate.getUTCDay()];
    todayDate.innerHTML = `${updateDay}`;
     // todayDate.innerHTML = updateDay;
    //to get today date ends here//
}
//to get today date start here//
dayOftheWeek();

setInterval(() => {
    millisecTime.innerHTML = Date.now();
}, 100);




