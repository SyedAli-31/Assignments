// function calculateArea(radius:number){
// let area=Math.PI
// return area*radius*radius
// }
// let result=calculateArea(2)
// console.log(result)
function calculateArea(radius) {
    var areas = [];
    for (var i = 0; i < radius.length; i++) {
        var area = Math.PI * radius[i] * radius[i];
        areas.push(area);
    }
    return areas;
}
var radii = [2, 1, 4, 2];
var result = calculateArea(radii);
console.log(result);
