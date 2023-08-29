const setBg = () => {
    const randomNum = Math.floor(Math.random() * 16777215);
    const randomColor = "#" + randomNum.toString(16);
    document.body.style.backgroundColor = randomColor;
    document.getElementById('color').innerText = randomColor;
    navigator.clipboard.writeText(randomColor);
}
document.getElementById('btn').addEventListener('click', setBg);
setBg();