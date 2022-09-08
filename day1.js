//Q1.         Difference between “ == “ and “ === “ operators.
//      "==" is checking only value but "===" is chankin value and data type both 
        let str="5";
        let num=5;
        console.log(str==num);//it will give true
        console.log(str===num);//it will give false



//Q2.         What is the spread operator?
//      The spread operator ... is used to expand or spread an iterable or an array. For example,
//  ex1    
    let arr1=[1,2,3,4,5];
    console.log(arr1);//[1, 2, 3, 4, 5]
    let arr2=arr1;
    console.log(arr2);//[1, 2, 3, 4, 5]
    let arr3=[...arr1];
    console.log(arr3);//[1, 2, 3, 4, 5]
    arr1.push(6);
    console.log(arr2);//[1, 2, 3, 4, 5, 6]
    console.log(arr3);//[1, 2, 3, 4, 5]

//ex2
    let array1 = [0, 1, 2];
    const array2 = [3, 4, 5];
    console.log(array1);// [0, 1, 2]
    array1 = array1.concat(arr2);
    console.log(array1);// [0, 1, 2, 3, 4, 5]

    let arra1 = [0, 1, 2];
    const arra2 = [3, 4, 5];
    console.log(array1);// [0, 1, 2]
    arr1 = [...arra1, ...arra2];
    console.log(arra1);// [0, 1, 2, 3, 4, 5]

//ex3
    const arrValue = ['My', 'name', 'is', 'Jack'];

    console.log(arrValue);   // ["My", "name", "is", "Jack"]
    console.log(...arrValue); // My name is Jack

// ex4
    const obj1 = { x : 1, y : 2 };
    const obj2 = { z : 3 };
    const obj3 = {...obj1, ...obj2};
    console.log(obj3); // {x: 1, y: 2, z: 3}



// //Q3.        What are the differences between var, let and const?
// 1.    var is global scoped but let and const are block scoped.
// 2.    var can be updated and redeclared, let can be updated but can't redeclared, const nither be updated nor be redeclared.
// 3.    var are housted but let and const arenot.
// 4.    var and let can be declared without initialised but const must be initialised in same line



// //Q4.       What is execution context    
// there are two phase in the execution context
// 1 memory allocation:- all the variable will get memory but not be initialised means value will not be given and i will be undefined.
//   but function will get their valuevor definition at the time of memory allocation.
// 2 code execution:- in this phase all the variable will get assinged their value and there is any function call so the new functional 
//   execution context will open and again two phase is there memory allocatin and code execution.



//Q5.        What is meant by first class functions
// a function can be passed as an argument to other functions or function can be returned by another function.
//ex1
    function firstClassFunction1(){
        console.log("this is first class function 1")
    }
    let f1=firstClassFunction1();
    function higherOrderFunction1(f1){
        console.log("this is higher order function 1");
    }
    higherOrderFunction1()

//ex2
    function higherOrderFunction2(){
        console.log("this is higher order function 2");
        return function firstClassFunction1(){
            console.log("this is first class function 2")
        }
    }
    console.log(higherOrderFunction2());
    higherOrderFunction2()



// Q6.      What are closures? Give an example of closure
// a closure gives you access to an outer function's scope from an inner function

const ticketBoocking= function (){
    let p1=0;
    let p2=0;
    return function (){
        p1++;
        p2++;
        console.log(`the count of the pasenger are ${p1} , ${p2}`);
    }
}
const bookie= ticketBoocking();
console.log(bookie);
console.dir(bookie);
bookie();//the count of the pasenger are 1 , 1
bookie();//the count of the pasenger are 2 , 2
bookie();//the count of the pasenger are 3 , 3

// ticketBoocking() creates a local variable called p1 and a function called valueIncrement(). 
// The valueIncrement() function is an inner function that is defined inside ticketBoocking() 
// and is available only within the body of the ticketBoocking() function. Note that the 
// valueIncrement() function has no local variables of its own. However, since inner functions 
// have access to the variables of outer functions, valueIncrement() can access the variable 
// p1,p2 declared in the parent function, ticketBoocking().



// Q7.      Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()
let employee1 = {
    name: "Ravi",
    employeeCode: 1,
    domain: "Technical",
    
}
displayInfo =function (gender,age){
    console.log(this.name, this.employeeCode, this.domain, gender, age);
}
// call():- call invokes the function and allows you to pass in arguments one by one.
displayInfo.call(employee1, "male",24);
displayInfo.call(employee1, "male", 21);
displayInfo.call(employee1, "female", 25);
// apply():- apply invokes the function and allow you to pass argument as Array.
displayInfo.apply(employee1,["male",24]);
displayInfo.apply(employee1,["male", 21]);
displayInfo.apply(employee1,["female", 25]);
// bind():- bind return a new function and allow you to pass any number of argument in an Array.
let result2 = displayInfo.bind(employee1);
// console.log(result1);
result2("Male",25);

let result3 = displayInfo.bind(employee1);
// console.log(result1);
result3("Female",23);