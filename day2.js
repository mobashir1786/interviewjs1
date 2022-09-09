// Q1.      What is creation phase and execution phase?
// 1 memory allocation/creation phase:- all the variable will get memory but not be initialised means value will not be given and i will be undefined.
//   but function will get their valuevor definition at the time of memory allocation.
// 2 code execution/execution phase:- in this phase all the variable will get assinged their value and there is any function call so the new functional 
//   execution context will open and again two phase is there memory allocatin and code execution.



// Q2.     What are objects in javascript?
// object is non-primative data type.
// it is combination of key and value. 
// it is use to store multiple data in side one variable.
const object1 = {
    name: "Md Mobashir",
    age: 22,
    occupation: "Engineer"
}
console.log(object1);
console.log(object1.age);



//Q3.        What are function constructors?
// Function constructor is kind of regular function to create multiple object at a time.
// when creating function constructor ,it is good practice to keep the first letter of the name,capital.
// new and this key word is mandatory to used with function constructor.
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", 50, "blue");
console.log( myFather );
const myMother = new Person("Sally", "Rally", 48, "green");
console.log(myMother);



//Q4.     Explain prototypes
// A prototype is a blueprint of an object. Prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object.
// prototype Object will be created inside the object which refers to the prototype constructor 
const studentOne = {
    nameOfStudent: "Md Mobashir",
    age: "21",
    showDetail: function () {
        console.log(`Name Of Student is ${this.nameOfStudent} and age is ${this.age}`);
    }
}
const studentTwo = {
    nameOfStudent: "Riya",
}
studentTwo.__proto__ = studentOne;
console.log(studentTwo);
console.log(studentTwo.age);
studentTwo.showDetail();



// Q5.      What is prototype chain
console.log(studentTwo.__proto__);//it will print proto of studentOne
console.log(studentTwo.__proto__.__proto__);//it will print structure of studentOne
console.log(studentTwo.__proto__.__proto__.__proto__);//null


// Q6.      Give an example of inheritance using function constructor
function Person1(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const parent = new Person1("Md", "Mobashir", 22, "black");
const child = new Person1("xy", "z", 2);
child.__proto__ = parent;
console.log(parent);
console.log(child);



// Q7.      What are callbacks?
// A callback function is a function passed into another function as an argument.
// This function is invoked inside the outer function to complete an action.
function callbackFunction(name) {
    console.log('Hello ' + name);
}
function outerFunction(callback) {
    let name = prompt('Please enter your name.');
    callback(name);
}
outerFunction(callbackFunction);




// Q8.      What is the use of setTimeout
// it is inbuit function of javascript.
// it is behave like callback function. 
setTimeout(() => {
    console.log("after one second of time");
}, 1000);
// it will wait 1sec after that it will print "after one second of time"



// Q9.      What is an event loop and call stack
// event loop monitor the call stack and call back queue. 
// if call stack is empty , the event loop wiil take the first item from the callback queue and will push it to call stack,
// which will efficiently run it. 