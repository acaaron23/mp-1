function addition() {
    const numberInput1 = document.getElementById("first-number").value
    const numberInput2 = document.getElementById("second-number").value

    const number1 = Number(numberInput1);
    const number2 = Number(numberInput2);

    let result = number1 + number2

    if (result < 0){
        document.getElementById("output").setAttribute("style", "color: red")
    }
    else{
        document.getElementById("output").setAttribute("style", "color: black")
    }
    document.getElementById("output").innerHTML = String(result);
}

function subtraction() {
    const numberInput1 = document.getElementById("first-number").value
    const numberInput2 = document.getElementById("second-number").value

    const number1 = Number(numberInput1);
    const number2 = Number(numberInput2);

    let result = number1 - number2

    if (result < 0){
        document.getElementById("output").setAttribute("style", "color: red")
    }
    else{
        document.getElementById("output").setAttribute("style", "color: black")
    }
    document.getElementById("output").innerHTML = String(result);
}

function multiplication() {
    const numberInput1 = document.getElementById("first-number").value
    const numberInput2 = document.getElementById("second-number").value

    const number1 = Number(numberInput1);
    const number2 = Number(numberInput2);

    let result = number1 * number2

    if (result < 0){
        document.getElementById("output").setAttribute("style", "color: red")
    }
    else{
        document.getElementById("output").setAttribute("style", "color: black")
    }
    document.getElementById("output").innerHTML = String(result);
}

function division() {
    const numberInput1 = document.getElementById("first-number").value
    const numberInput2 = document.getElementById("second-number").value

    const number1 = Number(numberInput1);
    const number2 = Number(numberInput2);

    // Edge case: When number 2 is equal to 0
    if(number2 === 0){
        document.getElementById("output").innerHTML = "Cannot divide by 0";
    }

    let result = number1 + number2

    if (result < 0){
        document.getElementById("output").setAttribute("style", "color: red")
    }
    else{
        document.getElementById("output").setAttribute("style", "color: black")
    }
    document.getElementById("output").innerHTML = String(result);
}

function power(){
    const numberInput1 = document.getElementById("first-number").value
    const numberInput2 = document.getElementById("second-number").value

    const number1 = Number(numberInput1);
    const number2 = Number(numberInput2);
    let result = 1;

    for(let i = 0; i < number2; i++){
        result = number1 * result;
    }

    if (result < 0){
        document.getElementById("output").setAttribute("style", "color: red")
    }
    else{
        document.getElementById("output").setAttribute("style", "color: black")
    }
    document.getElementById("output").innerHTML = String(result);
}

function clearInput(){
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
}

