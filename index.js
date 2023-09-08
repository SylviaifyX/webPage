let todayDate = document.getElementById("date")
let daysofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let millisecTime = document.getElementById("milliseconds")

//to get today date start here//
let newdate = new Date();
let updateDay = newdate.getUTCDay();
todayDate.innerHTML = `${daysofWeek[updateDay]}`;
// todayDate.innerHTML = (daysofWeek[updateDay]);
// console.log(todayDate);
// console.log(updateDay);

//to get today date ends here//


/* to get MilliSeconds*/

setInterval(() => {
    let MilliDate =  new Date();
    let newMill = MilliDate.getTime();
    millisecTime.innerHTML = newMill;
    // console.log(millisecTime)
},);

// setInterval(() =>{
//     millisecTime.innerHTML = Date.now();
//     console.log(millisecTime)
// },100);

/* to get MilliSeconds ends*/
