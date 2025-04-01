// // For print any value
// console.log("Welcome to Apna Collage");
// console.log("Biswajit Maity");
// console.log("I love javascript");

// // For variable
//  fullName = "Tony Stark";
//  age = 24;
//  price = 99.99;
//  console.log(fullName);
//  console.log(age);
//  console.log(price);
//  x = null;
//  console.log(x);
//  y = undefined;
//  console.log(y);
//  isFollow = true;
//  console.log(isFollow);
//  let fullName = "Tony Stark";
//  console.log(fullName);
//  let age = 24;
//  console.log(age);
//  let price = 1000;
//  console.log(price);

//  const age = 24;
// //  age = 52;
//  console.log(age);

//  const PI = 3.14;
//  console.log(PI);

// // data type

// Primitive Data Types
// // number
// let age = 24;
// let price = 100.5;

// // string
// let fullName ="Tony Stark";

// // boolean 
// isFollow = true;

// //Undefined
// let x;

// //Null
// let y = null;

// // BigInt 
// let x = BigInt("123");

// // symbol
// let y = Symbol("Hello!"); 

// Non Primitive Data Types
// Objects (Collection of values)

// const student = {
//     fullName : "Rahul Kumar",
//     age : 20,
//     cgpa : 8.2,
//     isPass : true
// }; 

// student["age"] = student["age"] + 1;
// student["fullName"] = "Rahul Sharma";

// console.log(student);

// const product = {
//     title : "Ball pen",
//     rating : 4,
//     offer : 5,
//     price : 270
// };
// console.log(product);

// const profile = {
//     username : "Biswajit Maity",
//     isFollow : false,
//     followers : 123,
//     following : 123
// };
// console.log(profile);
// console.log(typeof profile["username"]);

// 2nd class

// // Arithmetic operators 
// let a = 5;
// let b = 2;
// console.log("a =",a, "& b =",b);
// console.log("a + b =", a+b);
// console.log("a - b =", a-b);
// console.log("a * b =", a*b);
// console.log("a / b =", a/b);
// console.log("a % b = ", a%b); //Modulus 
// console.log("a ** b = ", a**b); //Exponentiation means 5^2

// Unary operators

// let a = 5;
// let b = 2;

// console.log("a =",a, "& b =",b);
// a++; // Increment 
// console.log("a =",a);
// b--; // Decrement
// console.log("b =",b); 

// Assignment Operators

// let a = 5;
// let b = 2;
// console.log("a =",a, "& b =",b);
// a += 4 // Means a = a + 4
// console.log("a =",a);
// a -= 4 // Means a = a - 4
// console.log("a =",a);
// a *= 4 // Means a = a * 4
// console.log("a =",a);
// a /= 4 // Means a = a / 4
// console.log("a =",a);
// a %= 4 // Means a = a % 4
// console.log("a =",a);
// a **= 4 // Means a = a ** 4
// console.log("a =",a);

// Comparison Operators
// let a = 5;
// let b = 5;
// console.log("5 == 5", a == b);

// Logical operators
//  let a = 6;
//  let b = 5;
//  console.log("cond1 && cond2 = ", a > b && a === 6);

//  let a = 6;
//  let b = 5;
//  console.log("cond1 || cond2 = ", a > b || a === 6);

// let a = 6;
// let b = 5;
// console.log("!(6<5) = ", !(a===6));

// let str = "Javascript";
// let size = 0;
// for(let i of str) {
//     console.log("i = ", i);
//     size++;
// }
// console.log("string size = ",size);


// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let val of marks){
//     // sum = sum + Number(val);
//     sum +=val;
// }
// console.log(sum);
// let avg = sum / marks.length;
// console.log("avg = ",avg);

function addNewClass() {
    var paragraph = document.getElementById('myParagraph');
    // Add the new class to the paragraph using classList
    paragraph.classList.add('new-class');
}