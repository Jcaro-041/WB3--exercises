// First function
function displayMailingLabel(name, address, city, state, zip){
    let finalLabel =`Ship to: ${name} ${address} ${city}, ${state} ${zip}`;
    console.log(finalLabel);
    console.log("----------------------------");
}
// Creating variables to call to using the function call below
let someName = "Jonathan";
let someAddress = "1111 W Arizona Lane";
let someCity = "Phoenix";
let someState = "Arizona";
let someZip = "85017";
displayMailingLabel(someName, someAddress, someCity, someState, someZip);
// More variables to call again with the same function call
someName = "Bonathan";
someAddress = "2222 W Arizona Lane";
someCity = "Bhoenix";
someState = "Barizona";
someZip = "71058";
displayMailingLabel(someName, someAddress, someCity, someState, someZip);

// Second function 
function addNumbers(num1, num2){
    let sum = num1 + num2;
    console.log(num1 +  " + "  + num2 + " = " + sum);
    console.log("----------------------------");
}
// Variables for 2nd function
let someNum1 = 15;
let someNum2 = 4;
addNumbers(someNum1, someNum2);
// More variables for 2nd function
someNum1 = 55;
someNum2 = 13;
addNumbers(someNum1, someNum2);

// Third function
function displayReceipt(amountDue, amountPaid){
    let changeDue = amountPaid - amountDue;
    if (amountPaid > amountDue){
        console.log("Total due: $" + amountDue);
        console.log("Cash paid: $" + amountPaid);
        console.log("Change due: $" + changeDue.toFixed(2));
        console.log("----------------------------");
    }
    else if (amountPaid < amountDue){
        console.log("Please ask for an extra $" + (changeDue.toFixed(2) * -1) + " to cover the rest of the bill");
        console.log("----------------------------");
        
    }
    else {
        console.log("Exact change: No amount due to customer");
        console.log("----------------------------");
    }
    //console.log("Total due: $" + amountDue);
    //console.log("Cash paid: $" + amountPaid);
    //console.log("Change due: $" + changeDue.toFixed(2));
}
// Overpaid bill, gets change back
let someAmountDue = 45.67;
let someAmountPaid = 50.00;
displayReceipt(someAmountDue, someAmountPaid);
// Exact bill, no change back
someAmountDue = 50.00;
someAmountPaid = 50.00;
displayReceipt(someAmountDue, someAmountPaid);
// Underpaid bill, customer owes more to cover bill
someAmountDue = 45.67;
someAmountPaid = 40.00;
displayReceipt(someAmountDue, someAmountPaid);