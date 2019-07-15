//jS

//example for if statement writing:
let x = 1;

if ( x === 1 ) {
    console.log('true');
} else {
    console.log('false');
}

let age = 21;

if ( age >= 21 ) {
    console.log("Have a beer!");
} else if ( age >= 16 ) {
    console.log("Have a car");
} else {
    console.log("Grow up");
}

//Non working example of "or" pipes:
function Y(age) {
    const userAge = age || 21;
    console.log(userAge);
}
//working example of 'or' pipes
const yourName = "jo";
const thridLetter = (yourName.length > 2 && yourName[2]) || "Name to small";
console.log(thridLetter);

// basic function example
function greet(whom) {
    console.log(`Hello ${whom}`);
}

let hey = "Builders!";
greet(hey);