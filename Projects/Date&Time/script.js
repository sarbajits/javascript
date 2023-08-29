//For Date
const d = new Date();
document.getElementById("date").innerHTML = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear();

//For Time
setInterval(function () {
    const date = new Date();
    // console.log(date.toLocaleTimeString());
    time.innerHTML = date.toLocaleTimeString();
}, 10);