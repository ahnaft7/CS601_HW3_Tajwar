alert("Hello! Welcome to JavaScript Calculator!");
let name = window.prompt("What is your name?");
alert("Welcome " + name + "!");
let number1 = window.prompt("Enter a number: ");
number1 = Number(number1);
let number2 = window.prompt("Enter another number: ");
number2 = Number(number2);

function calculateSum(number1, number2) {
    let sum = number1 + number2;
    return sum;
}

let sum = calculateSum(number1, number2);
alert("The sum of your two numbers is: " + sum);

if (sum > 10) {
    alert("That is a big number.");
} else {
    alert("That is a small number.")
}

while (true) {
    let replay = window.prompt("Do you want to add two numbers again? (yes/no)");
    if (replay.toLowerCase() == "yes") {
        number1 = Number(window.prompt("Enter a number: "));
        number2 = Number(window.prompt("Enter another number: "));
        sum = calculateSum(number1, number2);
        alert("The sum of your two numbers is: " + sum);
        if (sum > 10) {
            alert("That is a big number.");
        } else {
            alert("That is a small number.")
        }
    } else if (replay.toLowerCase() == "no") {
        alert("Thanks for visiting!");
        break;
    } else {
        alert("Please enter 'yes' or 'no'");
    }
}