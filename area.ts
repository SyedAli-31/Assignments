// function calculateArea(radius:number){
// let area=Math.PI
// return area*radius*radius
// }

// let result=calculateArea(2)
// console.log(result)


function calculateArea(radius:number[] ){
let areas:number[]=[]
for(let i=0;i<radius.length;i++){
    let area=Math.PI*radius[i]*radius[i]
    areas.push(area)
}
    return areas

}
let radii=[2,1,4,2]
let result=calculateArea(radii)
console.log(result)
