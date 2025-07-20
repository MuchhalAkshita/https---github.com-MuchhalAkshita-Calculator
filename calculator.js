const display = document.getElementById("display");

function ToAppendDisplay(input){
    display.value += input;
}

function DisplayClear(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}