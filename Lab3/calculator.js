
var initialValue = 0;

function appendToDisplay(value) {
    // += for concat
    var Userinput = document.getElementById('display');
    // to start with 0 as inital value.
    if (Userinput.value == initialValue) {
        // clear the display to write the new button value
        Userinput.value = ''; 
    }
    Userinput.value += value;
}

// 1) get value of display input text
// 2) check if it only operator which is string OR 
//        if we click (C then =) so the input is empty
// 3) if not , calculate the expression and write the value   
function calculate() {
    var input = document.getElementById("display").value;;
    if (input == '' || isNaN(input)) {
        document.getElementById('display').value = 0;
        alert("Invalid Input");
        return;
    }
    else {
        document.getElementById('display').value = eval(input);
    }
}

// clear the input text 
function clearDisplay() {
    document.getElementById('display').value = '';
}
