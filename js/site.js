
// Runs the code from the input box and displays the result to the output box.
function runCode(){
// Grab the text input from the first box and hold it in a variable.
var input = document.querySelector('#inputBox').value;

// Reference the output box (on the right side) and set it's value equal to the result of the eval function.
document.querySelector('#outputBox').value = eval(input);
}

function clearCode() {
    var areYouSure = prompt("Are you sure you want to erase your code? yes/no")

    switch(areYouSure) {
        case "yes":
            document.querySelector('#inputBox').value = '';
            document.querySelector('#outputBox').value = '';
            break;
        case "no":
            return;
            break;
    }
    
}

document.addEventListener("DOMContentLoaded", function() { 
    var agreement = prompt("This is for educational purposes only. \n Because of security concerns do not proceed if you don't understand the risks. \n Please answer 'yes' or 'no' to continue.");
    
    switch(agreement) {
        case "yes":
            return;
            break;
        case "no":
            window.location.href = 'help.html';
            break;    
    }
});