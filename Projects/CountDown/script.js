const endDate = "30 August 2023 8:00 AM";
document.getElementById('endDate').innerHTML = endDate;
const input = document.querySelectorAll('input');
function clock() {
    const end = new Date(endDate);
    // console.log(end);
    const now = new Date();
    // console.log(now);
    const diff = (end - now) / 1000;
    // console.log(diff);

    const day = Math.floor(diff / (60 * 60 * 24));
    const hour = Math.floor(diff / (60 * 60) % 24);
    const minute = Math.floor(diff / 60 % 60);
    const sec = Math.floor(diff % 60);
    // console.log(day);
    // console.log(input[0].value);
    if (diff < 0) return;


    function output(arr, val) {
        if (val < 10) {
            input[arr].value = "0" + val;
        } else {
            input[arr].value = val;
        }
    }

    output(0,day);
    output(1,hour);
    output(2,minute);
    output(3,sec);
}
clock();

setInterval(clock);