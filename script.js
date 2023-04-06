function getDate(){
    const myDate = new Date;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = days[myDate.getDay()];
    const date = myDate.getDate();
    const month = months[myDate.getMonth()];
    const year = myDate.getFullYear();

    return `${day}, ${date}, ${month}, ${year}`;
}
document.querySelector("#date").innerHTML = getDate();


function  showTime(){
    const time = new Date()
    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()
    let ampm = "AM"

    if (h == 0){
        h = 12
    }

    if (h > 12){
        h = h - 12;
        ampm = "PM"
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s <10 ) ? "0" + s : s;

    let clockTime = `${h} : ${m} : ${s} ${ampm}`
    document.querySelector("#time").innerHTML = clockTime
}



setInterval(showTime, 1000)