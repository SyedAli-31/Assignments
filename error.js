// try and catch error
// console.log("start")
// try {
// //     lets a =123
// console.log(a)
// } catch (error) {
//     console.log("Error")
// }
console.log("ali");
function f1() {
    try {
        let a = 1;
        for (a = 1; a <= 10; a++) {
            console.log(a);
        }
    }
    catch (error) {
        console.log("error in loop");
    }
}
f1();
console.log("end");
export {};
