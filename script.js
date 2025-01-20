//your JS code here. If required.
function compareNumbers() {
    // Prompt the user to input two numbers
    let number1 = prompt("Enter the first number:");
    let number2 = prompt("Enter the second number:");

    // Convert the inputs to numbers
    number1 = Number(number1);
    number2 = Number(number2);

    // Compare the numbers and display the result in an alert box
    let isEqual = (number1 === number2);
    alert(isEqual);
}
