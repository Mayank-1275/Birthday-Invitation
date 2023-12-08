// Enter Your Birthday Date
const endDate = "30 December 2023 6:00 PM"
document.getElementById("endDate").innerHTML = endDate
function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    console.log(diff)
    //convert into days;
    const days = Math.floor(diff / 3600 / 24);
    //convert into hours;
    const hours = Math.floor(diff / 3600) % 24;
    //convert into minutes;
    const minutes = Math.floor(diff / 60) % 60;
    //convert into seconds;
    const seconds = Math.floor(diff) % 60;
    console.log(days)
    console.log(hours)
    console.log(minutes)
    console.log(seconds)
    document.getElementById("days").value = days;
    document.getElementById("hours").value = hours;
    document.getElementById("minutes").value = minutes;
    document.getElementById("seconds").value = seconds;
}
setInterval(clock, 1000)
