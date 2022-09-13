// Q1.      What are promises and why do we need them?
// Promises are used to handle asynchronous operations in JavaScript.
// It also allows us to make API calls or fetch data from Web Servers successfully. If not able to do so fetches us with an error message.
// They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 
// Ex->
// promise vs callback
function checkPrime(number) {
    let result = new Promise((resolve, reject) => {
        if (number % 2 == 0) {
            resolve('Resolved the problem');
        }
        else {
            reject('Rejected');
        }

    })
    return result;
}

checkPrime(23).then(data => {
    console.log(data);
}).catch((data1) => {
    console.log(data1);
})

const promise = new Promise((res, rej) => {
    res("777");
})

//   promise chanining ---->

promise.then(data => {
    console.log(data);
}).then(data => {

    console.log("7777");
}).then(data => {
    //throw  new Error("error occcureed");
    console.log(88);
}).then(data => {
    console.log(80008);
}).catch(err => {
    console.error(err);
}).finally(fin => {
    console.log("It would be executed in end")
})



// Q2. What is the purpose of async/await keywords?
// when we use async keyword before any function it returns a Promise.
// Await keyword is always used inside async keyword.
// During execution of Javasript code when await keyword comes, 
// it suspends the calling method and yields control back to its caller until the awaited task is complete.


// Q3. What is hoisting?
// hoisting is the default behaviour of javascript where all the variables and function move to the top of the scope.
// It means irrespective of the position where they have been declared it moves to the top of scope in global and function scope.


// Q4. What is the DOM?
// It stands for Document Object Model.It is programming interface for HTML files.
// When browser tries to render it,it creates a object based on HTML documents and through which we can change or manupulate html documents.


// Q5. Difference between undefined vs not defined vs NaN
// undefined:- when a verable is decleared but not initilised, and trying to access it will give undefine.
// Not defined:- when variable is not declared, and trying to access that will give not defined.
// NaN:- its is use to check the value of variable, value is number or not.
// Ex->
let undefined1;
console.log(undefined1);//undefine
console.log(hi);//day3.js:74 Uncaught ReferenceError: hi is not definedat day3.js:74:13
console.log(isNaN('Mobashir'));//True
console.log(isNaN(200));//false




// Q6. How many operators do we have in JS ?
// There are 7 types of operator
// Arithmetic Operators
// Comparison Operators
// Bitwise Operators
// Increment,Decrement Operators
// Logical Operators
// Ternary Operators
// Comma Operator




// Q7. What are pure functions?
//  A Pure function is a function where the return value is only determined by its arguments without any side effects.
//  i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application 
//  then it will always return the same value.

// Ex->
function calculate(sum) {
    return (sum);
}
calculate(2);    //2      
calculate(5);    //5



// Q8. What is callback hell
// it is nothing but a nested callbacks stacked below one another forming pyramid like strucure.



// Q9. What is promise chaining
// Promise chaining occurs when the callback function returns a promise.
// It allows you to chain on another then call which will run when the second promise is fulfilled.



// Q10. What are arrow functions?
// It has been introduced in ES6 version of javascript.
// Arrow function is new and cleaner way to define a function.
// Ex->
let fun=()=>{
    console.log("hey whatsup")
}
fun();



// Q11.Give an example of async/await
async function foo() {
    fetch('https://fakestoreapi.com/products/3')
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => {
            console.log('original fetch');
            console.log(err);
        });
    try {
        const data = await fetch('https://fakestoreapi.com/products/1');
        console.log(data);
        const json = await data.json();  ///data.json also returns a promise
        console.log(json);

    }
    catch (err) {
        console.log(err)
    }
}
foo();