// Set Timeout and Set Interval

//set Interval

console.log("Hello ")

let count=1
let time=setInterval(function(){
    count ++
    console.log(`${count} Syed Ali`)
    if(count>=10000){
        clearInterval(time)
    }
} ,0) 
