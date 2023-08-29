const button = document.querySelectorAll(".box")
const body = document.querySelector("body")

button.forEach(function (buttons) {
    // console.log(buttons);
    buttons.addEventListener('click', function (e) {
        // console.log(e.target.id);
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'pink') {
            body.style.backgroundColor = e.target.id;
        }
    })
})