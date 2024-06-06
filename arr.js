// let studentName=["Ali","Hammad","Mubashir"]
// // studentName.pop()
// // console.log(studentName.shift())
// // console.log(studentName.unshift("Amaar"))
// // console.log(studentName.slice(0,2))
// // console.log(studentName.push("Syed"))
// studentName.slice(0,2) 
// console.log(studentName,"Array")
const numbers = [1, 2, 3, 4, 5];
// Extract elements from index 1 (inclusive) to 3 (exclusive)
const extracted = numbers.slice(1, 3); // extracted will be [2, 3]
// Extract elements from the beginning to index 2 (exclusive)
const firstPart = numbers.slice(0, 2); // firstPart will be [1, 2]
// Extract everything from index 2 (inclusive) to the end
const secondPart = numbers.slice(2); // secondPart will be [3, 4, 5]
console.log(extracted);
console.log(firstPart);
export {};
