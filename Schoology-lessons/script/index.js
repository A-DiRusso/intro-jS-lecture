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