//pin generating
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    console.log(pin);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();

    }
}
//displaying generated pin
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
//pin typing and displaying
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        else if (number == '<<') {
            const backSpace = calcInput.value;
            calcInput.value = backSpace.substr(0, backSpace.length - 1);
        }
    }
    else {
        const previousNum = calcInput.value;
        const newNum = previousNum + number;
        calcInput.value = newNum;
    }

});
//pin Matching function
function verifyPin() {
    const pin = document.getElementById('display-pin').value;

    const typedPin = document.getElementById('typed-numbers').value;
    console.log(typedPin);
    const successNotification = document.getElementById('successMSG');
    const failureNotification = document.getElementById('failureMSG');
    const tryMSG = document.getElementById('try-text');

    if (pin == typedPin) {
        successNotification.style.display = 'block';
        failureNotification.style.display = 'none';
        tryMSG.style.display = 'none';

    }
    else {
        successNotification.style.display = 'none';
        failureNotification.style.display = 'block';
        tryLeft('tryLeft');
    }


}

function tryLeft(id) {
    var tryTimes = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;
    const finalSubmitBtn = document.getElementById('finalSubmit');
    const tryMSG = document.getElementById('try-text');
    if (tryTimes === '1') {

        finalSubmitBtn.disabled = true;
        tryMSG.style.display = 'none';


    }


}