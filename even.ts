
// //====================Even Odd Difference==================//
// //================Assignment 3 ========================//
// // function isEven(num:number){
// //     return num%2===0  //This expression in TypeScript is used to check if a number(num) is even
// // }

// // let num1=5
// // let num2=6

// // if(num1%2===0){
// //   console.log("Even number",+num1)
// // }
// // else{
// //     console.log("Odd number",+num1)
// // }
// // if(num2%2===0){
// //     console.log("Even number",+num2)
// // }
// // else{
// //     console.log("Odd number",+num2)
// // }
// function calculateAverage(numbers: number[]): number {
//     // Input validation (optional but recommended)
//     if (numbers.length === 0) {
//       throw new Error("The input array must contain at least one number.");
//     }
  
//     // Efficient sum calculation using reduce
//     const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
  
//     // Calculate the average
//     const average = sum / numbers.length;
  
//     return average;
//   }
  
//   // Example usage:
//   let data = [4, 7, 15]; // You can replace this with your actual data
  
//   try {
//     const avg = calculateAverage(data);
//     console.log("The average of the numbers is:", avg);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
  
/////////////////////////
///////////////////////
//==////////////////////////

// // function isEven(num: number): boolean {
// //     return num % 2 === 0;
// //   }
  
// //   // Example usage
// //   let numberToCheck = 7;
// //   let isEvenResult = isEven(numberToCheck);
  
// //   if (isEvenResult) {
// //     console.log(numberToCheck, "is even");
// //   } else {
// //     console.log(numberToCheck, "is odd");
// //   }
  

// // function isEven(num:number){
// //    return num%2===0
// // }
// // let numberToCheck=8
// // let isEvenResult=isEven(numberToCheck)
// // if(isEvenResult){
// //  console.log("Even number",+numberToCheck)
// // }
// // else{
// //     console.log("Odd number",+numberToCheck)
// // }

// function isEven(num:number ){
//    return num%2===0
// }
// let num1 = 4;
// let num2 = 7;

// if (num1 % 2 === 0) {
//   console.log(num1 + " is even");
// } else {
//   console.log(num1 + " is odd");
// }

// if (num2 % 2 === 0) {
//   console.log(num2 + " is even");
// } else {
//   console.log(num2 + " is odd");
// }

