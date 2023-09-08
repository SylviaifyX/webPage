let todayDate = document.getElementById("date")
let daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let millisecTime = document.getElementById("milliseconds")

//to get today date start here//
let newdate = new Date();
let updateDay = newdate.getUTCDay();
todayDate.innerHTML = `${daysofWeek[updateDay]}`;
//to get today date ends here//

setInterval(() =>{
    millisecTime.innerHTML = Date.now();
},100);




