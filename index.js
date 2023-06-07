const lastDay = document.querySelector(".end-day");
const lastDate = document.querySelector(".last-date");
let endDate = new Date();
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const daysCount = document.querySelector(".days-count");
const daysType = document.querySelector(".day-type");
const hoursCount = document.querySelector(".hours-count");
const hoursType = document.querySelector(".hour-type");
const minutesCount = document.querySelector(".minutes-count");
const minutesType = document.querySelector(".minute-type");
const secondsCount = document.querySelector(".seconds-count");
const secondsType = document.querySelector(".second-type");
endDate.setDate(endDate.getDate() + 10);
endDate.setHours(23);
endDate.setMinutes(0);
endDate.setSeconds(0);

function updateCountDown() {
    const now = new Date();
    const monthIndex = endDate.getMonth();
    const month = monthNames[monthIndex];
    let date = endDate.getDate();
    if (date < 10) {
        date = `0${date}`;
    }
    if (date === "01" || date === 21 || date === 31) {
        date = `${date}st`;
    } else if (date === "02" || date === 22) {
        date = `${date}nd`;
    } else if (date === "03" || date === 23) {
        date = `${date}rd`;
    } else {
        date = `${date}th`;
    }


    lastDate.innerText = date + " " + month;
    let timeLeft = endDate - now;
    let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / (1000));

    if (daysLeft < 10) {
        daysLeft = `0${daysLeft}`;
    }
    if (hoursLeft < 10) {
        hoursLeft= `0${hoursLeft}`;
    }
    if(minutesLeft < 10){
        minutesLeft=`0${minutesLeft}`;
    }
    if (secondsLeft < 10) {
        secondsLeft = `0${secondsLeft}`
    }

    daysCount.innerText= daysLeft;
    hoursCount.innerText= hoursLeft;
    minutesCount.innerText = minutesLeft;
    secondsCount.innerText = secondsLeft;

    if (daysLeft=== "01"|| daysLeft==="00") {
        daysType.innerText= "day";
    } else{
        daysType.innerText="days";
    }
    if (hoursLeft=== "01"|| hoursLeft==="00") {
        hoursType.innerText= "hour";
    } else{
        hoursType.innerText="hours";
    }
    if (minutesLeft=== "01"|| minutesLeft==="00") {
        minutesType.innerText= "min";
    } else{
        minutesType.innerText="mins";
    }
    if (secondsLeft=== "01"|| secondsLeft==="00") {
        secondsType.innerText= "sec";
    } else{
        secondsType.innerText="secs";
    }
}
setInterval(updateCountDown, 1000)