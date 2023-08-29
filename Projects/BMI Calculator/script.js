const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 1 || isNaN(height)) {
        result.innerHTML = `Please give an valid height.`
    }
    else if (height === '' || height < 1 || isNaN(height)) {
        result.innerHTML = `Please give an valid weight.`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML =`<span>${bmi}</span>`;
        document.getElementById('result').style.color="#13aa52";
        document.getElementById('result').style.backgroundColor="white";
    }

});
form.addEventListener('reset',function(r){
    const result = document.querySelector('#result');
    result.innerHTML="Your Result";
    document.getElementById('result').style.color="white";
    document.getElementById('result').style.backgroundColor="transparent";
});