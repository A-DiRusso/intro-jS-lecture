//jS
console.log("Is this thing on?");


// Write a function that returns Hello + name given
function hello(name) {
    console.log(`Hello ${name}`);
}

const reply = "Mustache!";
hello(reply);


// Write a function that will return "Hello,,,,,You" if no name is given
function nameDefault(name) {
    if (name) {
        console.log(`Hello, ${name}`);
    } else if (!name) {
        console.log("Hello,,,,You");
    }
}

nameDefault();
nameDefault(reply);

// Write a function that will return a Madlib with given input

function madLib(name, subject) {
    console.log(`${name}'s favorite subject is ${subject}`);
}

const subject = "art!";
madLib(reply, subject);

// Write function tipAmount(amount, service) that will return the total based on level of service
function tipAmount(amount, service) {
    if (service === "good") {
        return amount * 0.2;
    } else if (service === "fair") {
        return amount * 0.15;
    } else if (service === "bad") {
        return amount * 0.1;
    }
}

console.log(`The tip amount is $${tipAmount(100, "good")}`);
console.log(`The tip amount is $${tipAmount(40, "fair")}`);

// Write a function that takes tipAmount's return and returns the total bill
function totalBill(amount, tip) {
    return amount + tip;
}

let tip = tipAmount(100, "good");
let splitTip = tipAmount(40, "fair");

console.log(`The total bill is $${totalBill(100, tip)}`);
console.log(`The total bill is $${totalBill(40, tip)}`);

// Write a function that splits the total bill among the number of guests
function splitAmount(total, guest) {
    return total / guest;
}
// function splitAmount(total, guest) {
//     return total / guest;
// }

// let total = totalBill(100, 20);
// let split = totalBill(40, 15)

let total = totalBill(100, tip);
let splitTotal = totalBill(40, splitTip);

console.log(`The split amount is $${splitAmount(total, 5)}`)
console.log(`The split amount is $${splitAmount(splitTotal, 2)}`)

// lecture turnary and switch functions
const x = 2;

if (x===1) {
    y = 2;
} else {
    y = 0;
}

console.log(`If else: Y = ${y}`);

console.log(`Turnary: Y = ${x === 1 ? y = 2 : y = 0}`);

const z = (x === 1) 
    ? 2
    : (x===2)
        ? 4
        : (x === 3)
            ? 6
            : 0;

console.log(`Nested Turnary: Z = ${z}`) 

switch(x) {
    case 1:
        a = 2;
        break;
    case 2:
        a = 4;
        break;
    case 3:
        a = 6;
        break;
    default:
        a = 0;
}

console.log(`Switch Case: A = ${a}`);

// 3 ways to write a function: 
function myFunc1(param1){
    //code here
}

const myFunc2 = function(param1) {
    // code here
};

const myFunc3 = (param1) => {
    // code here
};
