var prompt = require("prompt-sync")();

//These are used to give some output
// console.log("Hello World");
// console.log("How are you?");
// console.log("sf");
// console.log(2+2)
// console.log(2+2)

// let sub = 2 - 2;
// const multiply = 2 * 2;
// // console.log(sub);
// sub = 3 - 2;
// console.log(sub);

// multiply = 3 * 2;
// console.log(multiply);

// let num1 = 10;
// let num2 = 20;

// console.log("Simple Addition result ", num1 + num2);

// let res = num1 + num2;

// console.log("Addition result saved in another variable ", res);

// let naam = "Adrian"; //String
// let age = 24.6; //Number
// let bool = true; //Boolean
// let frnd1; //Undefined

// let nu = null;
// let emStr = "";

// console.log(typeof emStr);
// console.log(emStr);
// console.log(nu);
// console.log(frnd1);
// console.log(typeof naam);
// console.log(typeof age);
// console.log(typeof bool);
// frnd1 = "andrio";
// console.log(typeof frnd1);

// let num1 = 10 + 10;
// let num2 = 20 - 18;
// let num3 = 10 * 5;
// let num4 = 10 / 3;
// let num5 = 10 % 3;
// let num6 = 10 ** 3;

// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);
// console.log(num6);

// let num1 = 4;
// let num2 = "4";
// console.log(num1 == num2);
// console.log(num1 === num2);

// console.log(num1 > num2);
// console.log(num1 < num2);

// console.log(num1 != num2);
// console.log(num1 !== num2);

// console.log(num1 >= num2);
// console.log(num1 <= num2);

// let bool = false;
// console.log(bool);

// console.log(!bool);

// let userInput = prompt("enter you name");
// console.log(userInput);

// let num1 = Number(prompt("Enter first number "));
// let num2 = Number(prompt("Enter second number "));
// let num1 = +prompt("Enter first number ");
// let num2 = +prompt("Enter second number ");

// console.log(num1 + num2);
// let result = "4 + 4";
// console.log(result);

// let numConvert = Number("m");
// console.log(numConvert);

const name1 = "Andrio";
const name2 = "Adrian";
const fullName = name1 + " " + name2;
// console.log(fullName);
const con = name1.concat(name2);
// console.log(con);
const len = name1.length;
// console.log(len);
const lower = name1.toLowerCase();
// console.log(lower);
const upper = name2.toUpperCase();
// console.log(upper);
const char = name2.charAt(5);
// console.log(char);
const sli = name2.slice(1);
// console.log(sli);

const idx = name2.indexOf("n");
// console.log(idx);
const inc = name2.includes("d");
// console.log(inc);
const rep = name1.replace("d", "D");
// console.log(rep);
// name1[3] = "a";
// console.log(name1);

const myName = "mughEEs";

// const repl = myName.replace([0], [0].toUpperCase());
// console.log(repl);

const upperCaseName =
  myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase();
// console.log(upperCaseName);

// myName.push("d");
// console.log(myName);

const random = Math.random() * 10;
// console.log(random);
const round = Math.round(9.4);
// console.log(round);
const floor = Math.floor(8.1);
// console.log(floor);
const ceil = Math.ceil(79);
// console.log(ceil);

const min = Math.min(0, 10, 20, 30, -10, 20, -2, -100);
// console.log(min);
const max = Math.max(0, 10, 20, 30, -10, 20, -2, -100, 100);
// console.log(max);

const date = new Date();
// console.log(date);
const year = date.getFullYear();
// console.log(year);
const month = date.getMonth();
// console.log(month);
const day = date.getDay();
// console.log(day);
const today = date.getDate();
// console.log(today);
const sec = date.getSeconds();
// console.log(sec);
const milliSec = date.getMilliseconds();
// console.log(milliSec);

const andOp = false && true;
// console.log(andOp);

const orOp = 11 == 1 || (9 == 9 && 10 == 10);
// console.log(orOp);

const notOp = !(true && true);
// console.log(notOp);

// const marks = +prompt("Enter Your marks: ");

// if (marks >= 90 && marks <= 100) {
//   console.log("Grade A");
//   if (marks >= 95) {
//     console.log("Prize = 100$");
//   } else {
//     console.log("Prize = 50$");
//   }
// } else if (marks >= 80 && marks < 90) {
//   console.log("Grade B");
// } else if (marks >= 70 && marks < 80) {
//   console.log("Grade C");
// } else if (marks >= 60 && marks < 70) {
//   console.log("Grade D");
// } else if (marks >= 50 && marks < 60) {
//   console.log("Grade F");
// } else {
//   console.log("Failed");
// }

// const computerChoice = Math.round(Math.random() * 2);
// let userChoice = +prompt("Enter 0 for Rock 1 for Paper 2 for Scissors: ");

// if (userChoice === computerChoice) {
//   console.log("It's a Tie");
// }
//  else if (userChoice === 0 && computerChoice === 1) {
//   console.log("Computer Wins");
//   console.log("User Choice: Rock  Computer Choice: Paper ");
// }
//  else if (userChoice === 0 && computerChoice === 2) {
//   console.log("User Wins");
//   console.log("User Choice: Rock  Computer Choice: Scissors ");
// }
//  else if (userChoice === 1 && computerChoice === 0) {
//   console.log("User Wins");
//   console.log("User Choice: Paper  Computer Choice: Rock ");
// }
//  else if (userChoice === 1 && computerChoice === 2) {
//   console.log("Computer Wins");
//   console.log("User Choice: Rock  Computer Choice: Paper ");
// }
//  else if (userChoice === 2 && computerChoice === 0) {
//   console.log("Computer Wins");
//   console.log("User Choice: Scissors  Computer Choice: Rock ");
// }
// else if (userChoice === 2 && computerChoice === 1) {
//   console.log("User Wins");
//   console.log("User Choice: Scissors  Computer Choice: paper ");
// } else {
//   console.log("Invalid Choice");
// }

// const compChoice = Math.round(Math.random() * 10);
// const userChoice = +prompt("Guess the number between 0 - 10 : ");
// console.log(compChoice);

// if (userChoice === compChoice) {
//   console.log("You Win");
// } else if (userChoice > compChoice) {
//   console.log("Your number is greater");
// } else if (userChoice < compChoice) {
//   console.log("Your number is smaller");
// } else {
//   console.log("Invalid Choice");
// }

// let tableOf = 5;

// for (let i = 1; i <= 10; i++) {
//   // console.log(tableOf + " X " + i + " = ", tableOf * i);
//   console.log(`${tableOf} X ${i} = ${tableOf * i}  `);
// }
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.count("Fizz Buzz");
//   } else if (i % 3 == 0) {
//     console.count("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   }
// }

// let num = true;
// while (num) {
//   console.log(num);
//   num++;
//   //   if (num == 100) {
//   //     num = false;
//   //   }
//   // if (num == 100) {
//   //   break;
//   // }
//   // break;
// }

// do {
//   console.log(num);
//   num++;
// } while (num < 40);

let students = ["John", "andrio", "adrian", "Brad", 20, true];
// console.log(students);
// console.log(students[4]);
let arrLen = students.length;
// console.log(arrLen);
let arrPush = students.push("Push Method");
// console.log(arrPush);
// console.log(students);
let arrPop = students.pop();
let arrPop2 = students.pop();
// console.log(arrPop);
// console.log(students);

let arrShift = students.shift();
let arrShift2 = students.shift();
// console.log(arrShift);
// console.log(students);
let arrUnShift = students.unshift("bean");
let arrUnShift2 = students.unshift("joy");
// console.log(students);

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }
// const arr = ["abc", 123];
// console.log(typeof arr);

const myInfo = [
  "john",
  1234,
  ["new york", "block c", ["dafds", "fdaf"]],
  "pak",
];
// console.log(myInfo[2][2][1]);

// const fruitsArr1 = ["apple", "banana", "mango"];
// console.log(fruitsArr1);
// fruitsArr1.splice(1, 2);
// console.log(fruitsArr1);

// const fruitsArr1 = ["apple", "banana", "mango "];
// const fruitsArr2 = ["kiwi", "grapes", "peach"];

// const mixFruits = fruitsArr1.concat(fruitsArr2);
// console.log(mixFruits);

// console.log(fruits);

// fruits.forEach()

// const add = 2 + 2;
// const add2 =

// function Addition() {
//   console.log(2 + 2);
// }
// Addition();
// Addition();
// Addition();
// Addition();
// Addition();

function Addition(a, b) {
  console.log(a + b);
}
// Addition(10, 20);
// Addition(100, 200);

function Subtraction(a, b) {
  return a - b;
}

// Subtraction(10, 30);
// const result = Subtraction(10, 30);
// const multiply = result * 2;
// console.log(multiply);

// const firtNum = +prompt("Enter first number: ");
// const operation = prompt("Enter operation + - * / : ");
// const secNum = +prompt("Enter second number: ");

// function Addition(a, b) {
//   console.log(a + b);
// }
// function Subtraction(a, b) {
//   console.log(a - b);
// }
// function Multiplication(a, b) {
//   console.log(a * b);
// }
// function Division(a, b) {
//   if (a && b !== 0) {
//     console.log(a / b);
//   } else {
//     console.log("division by zero is not allowed");
//   }
// }
// switch (operation) {
//   case "+":
//     Addition(firtNum, secNum);
//     break;
//   case "-":
//     Subtraction(firtNum, secNum);
//     break;
//   case "*":
//     Multiplication(firtNum, secNum);
//     break;
//   case "/":
//     Division(firtNum, secNum);
//     break;
//   default:
//     console.log("Invalid Operation");
// }

function greeting() {
  console.log("hellow");
}

// greeting();
// greeting();
const Greeting2 = (name) => {
  console.log("hello ,", name);
};
// Greeting2("john doe");
// Greeting2("Andrio");

const fruits = [
  "apple",
  "banana",
  "mango",
  "orange",
  "grape",
  "kiwi",
  "pineapple",
  "pear",
  "watermelon",
  "strawberry",
  "blueberry",
  "cherry",
  "peach",
  "plum",
  "lemon",
  "lime",
  "pomegranate",
  "raspberry",
  "blackberry",
  "apricot",
];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// fruits.forEach((fru, idx, arr) => {
//   console.log(fru + " " + idx + " " + arr);
// });

// fruits.map((fru, idx, arr) => {
//   console.log(fru, " ", idx, " ", arr);
// });

const numbers = [10, 20, 0, 9, 21];

// numbers.every((num) => {
//   console.log(num >= 0);
// });
// let result;
// numbers.some((num) => {
//   return (result = num >= 18);
// });
// console.log(result);

// numbers.filter((num, idx, arr) => {
//   num > 18 ? console.log(num) : null;
// });

const copyArr = [...fruits];
// console.log(copyArr);
// copyArr.forEach((fru) => console.log(fru));

// function Num(a, b, c, ...res) {
//   console.log(a, b, c, res);
// }
// Num(1, 2, 3, 4, 5, 6, 7);

const fruit = ["apple", "banana", "mango", "orange", "grape"];
// fruit.sort();
// console.log(fruit);
// fruit.reverse();
// console.log(fruit);

// const sorted = fruit.toSorted();
// console.log(sorted);
// const reversed = fruit.toReversed();
// console.log(reversed);

// console.log(fruit);

const nums = [100, 200, 350, 410, 500];
// nums.shift();
// console.log(nums);
// nums.unshift(110);
// console.log(nums);

// nums.splice(2, 0, 360, 420);
// console.log(nums);
// const toRev = nums.toReversed();
// console.log(nums.toReversed());
// let result;
// nums.reduce((total, cur, idx) => {
//   console.log(idx);
//   result = total + cur;
//   // console.log(total);
//   // console.log(cur);
//   // console.log(result);
//   return result;
// });

// console.log(result);

const obj = {
  myName: "Mughees",
  phone: 134,
  married: false,
  address: {
    street: {
      hNo: 12,
      block: "Block C",
    },
    city: "peshawar",
    country: "pakistan",
    zip: 25000,
  },
  education: ["Matric", "Fsc", "Bachelors"],
};
// console.log(obj);
// console.log(obj.address.street.hNo);
// console.log(obj.education[2]);

const compnayInfo = {
  name: "Google",
  location: "USA",
  employees: 1000,
  departments: ["HR", "IT", "Finance", "Marketing"],
  address: {
    street: "Silicon Valley",
    city: "California",
    zip: 12345,
  },
  products: [
    "Google Search",
    "Google Maps",
    "Google Drive",
    {
      name: "Google Meet",
      users: 1000000,
      region: ["USA", "UK", "Canada"],
    },
  ],
};
// console.log(compnayInfo);
// console.log(compnayInfo.products[3].region[2]);

// for (let i = 0; i <= 10; i++) {
//   let stars = "";
//   for (let j = 0; j < i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// function Percentage() {
//   console.log("Hellow");
// }

// Percentage();
// Percentage();
// Percentage();
// Percentage();

function Percentage(math, eng, cs, total) {
  let obt = math + eng + cs;
  let per = (obt * 100) / total;
  let res = per.toFixed(1);
  console.log(res, "%");
}

// let per = Percentage(89, 80, 97, 300);
// console.log(per);
// Percentage(90, 68, 95, 300);

function Return() {
  return "hello";
  console.log("he");
}
// let res = Return();
// console.log(Return());
// let user1 = res + "John";
// console.log(res);
// console.log(user1);

// let exp = "john";
let func = function () {
  console.log("hello func exp");
};
// func();

let func2 = function Hey2() {
  console.log("hello 3");
};
// func2();

// function Add(a = 10, b = 20) {
//   console.log(a + b);
// }
// // Add(20, 30);
// Add(13, 15);
// Add();

function Rest(a, b, ...res) {
  console.log(a, b, res);
}
// Rest("hey", "how", 20, 30);

// const arrow = (x, y) => {
//   console.log("i am an arrow function", x);
// };

// arrow("ES6");

// function Nested() {
//   console.log("Main Func");
//   return function nest() {
//     console.log("nested func");
//   };
// }
// let res = Nested();

// res();

let num1 = 20;

function Add() {
  let num1 = 40;
  console.log(num1);
  function add2() {
    let num2 = 65;
    num1++;
    console.log(num1, num2);

    function add5() {
      let num3 = 0;
      console.log(num1);
      console.log("nestttt", num2, num3);
    }

    add5();
  }
  console.log("n", num1);
  add2();
  console.log(num1);
  return function add3() {
    let num2 = 65;
    num1++;
    console.log("i am add3 ", num1, num2);
  };
}
// console.log(num1);

// let add4 = Add();
// add4();

// function Greeeting(greet) {
//   return greet(10);
// }
// let gree = Greeeting(function (x) {
//   console.log("hello" + x);
// });

// gree;

// (
//  function (){
//     console.log("hello")

//   }
// )()

function One() {
  console.log("one");
  function Two() {
    console.log("two");
  }
  function Three() {
    console.log("Three");
  }
  Three();
  Two();

  console.log("nm");
}
// One();
let num = 0;
function Recursive() {
  console.log("Good Morning!", num++);
  Recursive();
}
// Recursive();

function Factorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * Factorial(num - 1);
  }
}

let fact = Factorial(5);
// console.log(fact);
