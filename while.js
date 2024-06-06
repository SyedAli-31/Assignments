// while and do while
let i = 2;
// while 
while (i <= 10) { //When you don't know beforehand how many times the loop should run, but there's  a .                         a condition that determines termination
    console.log("while", i);
    i++;
}
let b = 2;
// do while
// do {
//     // Code to be executed
//   } while (condition);
do {
    console.log("do while", b); //Similar to while loop, but guarantees the code block executes at                                          at least once, even if the condition is initially false
    b++;
} while (b <= 10);
export {};
//table 2
// for loop
// for(let i=0;i<=10;i++){  //When you know exactly how many times you want the loop to iterate.
//     let n1=2
//     console.log(n1,"x",i,"=", n1*i)
// }
