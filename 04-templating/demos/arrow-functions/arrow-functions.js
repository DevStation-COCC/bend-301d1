// Arrow Functions

// MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// caniuse.com: https://caniuse.com/#search=arrow%20functions

// Arrow functions are an alternate form of function notation that was added in ECMAScript 2015, otherwise known as ES6.

// In some ways the differences can be viewed as only an alternate syntax, but there one key technical difference to keep in mind: arrow functions do not create their own scope, so they get their contextual "this" from the parent context. That means arrow functions cannot be used for constructor functions or to add methods to a constructor's prototype property.

// Note that arrow functions also have notational variances based upon the number of arguments they receive and also the number of statements enclosed in them. Arrow functions are ideal for use in pure "one-liner" functions.

// One parameter
let logger = function(input){
  console.log(input);
}

// We can use just the parameter name with now parantheses
// We can also drop the curly braces for a single line of code
let logger2 = (input) => {console.log(input);}
let logger3 = input => console.log(input);

logger('Sharon');
logger2('Alex');
logger3('Connor');

let shout = () => console.log("HELLO");

// Two+ parameters: these require parentheses
let adder = function(a,b,c){
  console.log(a + b + c);
};

//Multiple parameters require parantheses
let adder2 = (a,b,c) => console.log(a + b + c);


let logAndAdd = function (a,b,c){
  console.log(a);
  console.log(b);
  console.log(c);
  return a + b + c;
}

// The last line of an arrow function is implicitly returned
// Multiple lines require curly braces
let logAndAddArrow = (a,b,c) => {
  console.log(a);
  console.log(b);
  console.log(c);
  a + b + c;
}

//As a callback
setTimeout(x => console.log(x));


// The contexual this in the arrow function will be scoped to the Person object
function Person(){
  this.age = 0;
  
  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
};

// The contexual this in growUp will be scoped to the growUp function
function Person2(){
  this.age = 0;
  
  setInterval(function growUp() {
    this.age++;
    console.log(this.age);
  }, 1000);
};

let p = new Person();
let p2 = new Person2();