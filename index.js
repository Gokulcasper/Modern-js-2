//Operator
//Ternary Operator
let speed = 120;
let message = speed >= 100 ? "Too Fast" : "Too Slow";
console.log(message);

//Conditional Statements
//Switch Statement
let day = 2;
switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default :
    console.log("Invalid");
        break;
}
//OR
let days = 4;
switch(days){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
    case 6:
        console.log("Saturday");
    default :
    console.log("Invalid");
}

// Arrow Function
let sum1 = (a,b) => a+b;
console.log(sum1(4,4));
//or
let sum = (a,b) =>{
    let result = a + b;
    return result;
};
console.log(sum(3,4));

// One Parameter
let greet = resultName => `hi ${resultName}!`;
console.log(greet("Gokul"));
// No Parameter
let sayHi = () => "Hello";
console.log(sayHi());
//Returning Object
let createUser = name =>{
return{
    firstName : name
};
};
console.log(createUser("Gokul"));//{firstName:"gokul"}
//Simple Expression
let createUser1 = name => {firstName:"gokul"};
console.log(createUser1()); //Undefined
let createUser2 = name=>({firstName:"raj"});
console.log(createUser2());//{firstName:"raj"}

//Constructor Function
function car(color,brand){
    this.color=color;
this.brand = brand;
this.start=function(){
    console.log("Started");
};
}
let car1 = new car("black","BMW");
console.log(car1);

// JS Functions
// Name Property
function car2(color,brand){
    this.color=color;
    this.brand = brand;
    this.start = function(){
        console.log("started");
    };
}
console.log(car.name);
// Length Property
function car2(color,brand){
    this.color=color;
    this.brand = brand;
    this.start = function(){
        console.log("started");
    };
}
console.log(car.length);
//typeOf function
function car2(color,brand){
    this.color=color;
    this.brand = brand;
    this.start = function(){
        console.log("started");
    };
}
console.log(typeof(car));

// Constructor Property
function car4(color,brand){
    this.color=color;
    this.brand = brand;
    this.start = function(){
        console.log("started");
    };
}
let car5 = new car4("blue","BMW");
console.log(car5.constructor);


