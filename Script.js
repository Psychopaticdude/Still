let displayValue = "";

function appendCharacter(character) {
    displayValue += character;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue.replace(/x/g, '*'));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
        displayValue = "";
    }
}