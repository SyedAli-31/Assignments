// slice method use to print selected array
//slice does not change original array
let arr = ["ALi", "amama", "ammara", "syed"];
// let names=arr.slice(0,3)
console.log(arr.slice(0, 3));
console.log(arr, "new array");
//splice() adds or removes aray elements
//splice method overwrites the original array
//return deleted elements in array
let Newarr = ["ALi", "amama", "ammara", "syed"];
// let names=arr.slice(0,3)
console.log(Newarr.splice(0, 3, "Abdullah"));
console.log(Newarr, "new array");
export {};
