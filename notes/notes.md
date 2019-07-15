        :::::::::::::::::Slide Lecture:::::::::::::

javaScript is loosely and dynamically typed language 
7 == "7" // true - is only checking the value of the thing typed
7 === "7" // false - equals sans coercion

console.log("Hello world");

unlike python no triple quote for multiline
`` backtickets for multi-line and interpolation quote strings

must declare variables with a keyword
    const - cannot be reassigned
    let - can be reassigned - block level scoped - like a loop inside a function
    only uses memory during the loop
    var - becoming less and less valid everyday - always hoisted(moved to top of scope) - don't use

Hoisting:
    function() {
        if (x)______________
        var x = 1; - because of bar this would be declared on line 18.5 :) - therefore, if(x) would always true
    }

Variables:
    just start with a letter 
    do not use resevered words
    camel Case


Indexing:
    const hey = "Hello There!"
    hey[1] = 'e'
    hey.charAt(1) = 'e'

Numbers:
    floats
    can convert to strings and use functions like parseInt()
    "5" - 0 = 5 // parseInt() 
    5 + "" = "5" // strigify()

    Math.abs() returns absolute number
    Math.pow(base, exp) returns the base to the exponent power
    Math.round() rounds the number

    NaN = not a number

Alerts:
    ugly not often used
    prompt() = prompts the user for info
    alert() = alerts the user

IF Statements:
    starts with if()
    condition is wrapped in ()
    body wrapped in {} see index.js

Truthy and Falsy:
    falsy - false, null, undefined, 0, Nan, " "
    everything else is truthy

Booleans:
    && - and
    || - or

Functions:
    First class 

    function name(arguments) {
        return
    }
    
    name();

