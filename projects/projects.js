function addition() {
    const numberInput1 = document.getElementById("first-number").value
    const numberInput2 = document.getElementById("second-number").value

    const number1 = Number(numberInput1);
    const number2 = Number(numberInput2);
    document.getElementById("result-msg").innerHTML = String(number1 + number2);
}

function subtraction() {
    const numberInput1 = document.getElementById("first-number").value
    const numberInput2 = document.getElementById("second-number").value

    const number1 = Number(numberInput1);
    const number2 = Number(numberInput2);
    document.getElementById("result-msg").innerHTML = String(number1 - number2);
}

function multiplication() {
    const numberInput1 = document.getElementById("first-number").value
    const numberInput2 = document.getElementById("second-number").value

    const number1 = Number(numberInput1);
    const number2 = Number(numberInput2);
    document.getElementById("result-msg").innerHTML = String(number1 * number2);
}

function division() {
    const numberInput1 = document.getElementById("first-number").value
    const numberInput2 = document.getElementById("second-number").value

    const number1 = Number(numberInput1);
    const number2 = Number(numberInput2);

    // Edge case: When number 2 is equal to 0
    if(number2 === 0){
        document.getElementById("result-msg").innerHTML = "Cannot divide by 0";
    }
    document.getElementById("result-msg").innerHTML = String(number1 / number2);
}

