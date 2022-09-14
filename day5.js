// Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button
function heading() {
    let containor = document.getElementById("parent");
    let heading = document.createElement("h1");
    containor.appendChild(heading);
    heading.innerText = "MERN stack";
}



// Write code to get 1st H1 element from a webpage using DOM
let firstH1 = document.getElementsByTagName('h1')[0];
console.log(firstH1);



// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
setInterval(() => {
    let time = new Date();
    let hours = document.getElementById('hour');
    let minutes = document.getElementById('minut')
    let seconds = document.getElementById('second');
    hours.innerText = time.getHours();
    minutes.innerText = time.getMinutes();
    seconds.innerText = time.getSeconds();
}, 1000)



// Create an HTML page having content as Hello world and a button named Replace Text. 
// When user will click on this button page content should be changed to "Welcome to Elevation academy"
let contentChange = () => {
    let text = document.getElementById('contentChange');
    text.innerText = "Welcome to Elevation academy";
}
document.getElementById("replaceText").addEventListener('click', contentChange)




// Create an HTML page having content as Hello world and a button named "Hide Text."
//  When user will click on this button hide the "Hello World" text

let hideText = () => {
    let text1 = document.getElementById('text')
    text1.style.display = 'none';
}
document.getElementById("hideText").addEventListener('click', hideText)

// $("#hideText").click(function () {
//     $("#text").hide();
// });



// Given an array of 0's and 1's find out number of 0's
let arrayOf01 = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
let count = 0;
for (const i in arrayOf01) {
    if (arrayOf01[i] == 0) {
        count++
    }
}
console.log(count);

let divArray = document.getElementById("array");
divArray.innerText = "total number of zero is:" + count;



// Given an array find out total no. of odd and even nos.
let arrayOddEven = [1, 2, 5, 4, 8, 6, 4, 6, 5, 422, 44, 2, 1, 21, 335];
let even = 0;
let odd = 0;
for (const i in arrayOddEven) {
    if (arrayOddEven[i] % 2 == 0) {
        even++;
    }
    else {
        odd++
    }
}
console.log(`even is:${even} odd is:${odd}`);
let evenOdd = document.getElementById("oddEven");
evenOdd.innerText = `even is:${even} odd is:${odd}`;



// Given a string find out number of vowels 
let vowel = () => {
    let inputValue = document.getElementById("string").value;
    let string = "" + inputValue;
    string = string.toLowerCase();
    console.log(string);
    let totalVowel
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "a" || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
            totalVowel = totalVowel + 1;
        }
    }
    console.log(totalVowel)
}
document.getElementById("showVowel").addEventListener('click', vowel);


// let vowels = ["a", "e", "i", "o", "u"];
// let str = "hi folks";
// var S = 0
// for (let s of str) {
//     if (vowels.includes(s)) {
//         S = S + 1;
//     }
// }
// console.log(S);



// Write a code to create two objects with 2 properties each, 
// one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same.

let obj1 = {
    name: "Hello Everyone",
    arr1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};
let obj2 = {
    name: "Hello Everyone",
    arr2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

function check(obj1, obj2) {
    let length1 = obj1.arr1.length;
    let length2 = obj2.arr2.length;
    if (length1 == length2) {
        for (let i = 0; i < length1; i++) {
            if (obj1.arr1[i] == obj2.arr2[i]) {
                console.log("SAME");
            }
            else {
                console.log("NOT SAME");
            }

        }
    }
    else {
        console.log("NOT SAME");
    }
}
check(obj1, obj2)