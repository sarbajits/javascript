const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// selectors
const passBox = document.getElementById("pass-word")

const totalChar = document.getElementById("totalLength")
const upperInput = document.getElementById("upperCase")
const lowerInput = document.getElementById("lowerCase")
const numberInput = document.getElementById("number")
const symbolInput = document.getElementById("symbol")



const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }

    passBox.innerText = truncateString(password, totalChar.value);
}


generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function () {
        generatePassword();
        // myFunction();
    }

)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

// document.getElementById("copy").addEventListener(
//     "click",
//     function(e){
// navigator.clipboard.writeText(passBox.innerText);
//         alert(passBox.innerText+"\nCopied Sucessfully.");
// });

function myFunction() {
    navigator.clipboard.writeText(passBox.innerText);
    passBox.style.backgroundColor="blue";
    var x = document.getElementById("snackbar");
    
    x.className = "show";
    
    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        x.className = x.className.replace("show", "");
        passBox.style.backgroundColor="";
    }, 2000);
}