//object
var object = {
    Name1: "Syed Ali",
    Name2: "Amara",
    age: 25,
    hobbies: ["cricket", "football", "hockey"],
    salary: function () {
        // {return} 
        return 2000;
    },
    email: "aligarians@gmail.com",
    office: {
        address: "Shahre_faisal",
        name: "Governor It Course"
    }
};
// delete object.salary
// object.email
// object.address="gatenumber343"
// delete object.email
for (var key in object) {
    console.log(key + ":", object[key]);
}
// console.log(object)
// console.log("email" in object)
// console.log(object.office.name.toUpperCase())
