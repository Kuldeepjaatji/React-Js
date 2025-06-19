// 1. Check if a number is positive, negative, or zero


function checkNumber(num){
 if(num>0){
    console.log("positive");
 }else if(num<0){
    console.log("negative")
 }else{
    console.log("zero")
 }
};
// checkNumber(prompt("Enter your number"));



// 3. Check if a year is a leap year

function isLeapYear(year){
    return (year%4 === 0 && year % 100 !== 0) || (year % 400 === 0);
 }
//  console.log(isLeapYear(prompt("Enter your Year")));

// const year = parseInt(prompt("Enter your Year"));
const year = 2025;
if (isLeapYear(year)) {
    console.log(year + " is a Leap Year ✅");
} else {
    console.log(year + " is NOT a Leap Year ❌");
}




// 4. Grade Calculator


function getGrade(marks) {
    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    return "F";
}

// console.log(getGrade(prompt("Enter your grade")));




//  5. Check if a number is even or odd

function checkEvenOdd(num1){
    console.log(num1 % 2 == 0 ? "Even" : "Odd")
};

checkEvenOdd(prompt("Enter your Number"));