//object

let object={
     Name1:"Syed Ali",                        //string
    Name2:"Amara",                         
    age:25,                                   //number
    hobbies:["cricket","football","hockey"],  //Array
    salary : ()=>                             //function
        // {return} 
        2000,  // short form
        email:"aligarians@gmail.com",
office:{                                       //object
    address:"Shahre_faisal",
    name:"Governor It Course"
    
}}
// delete object.salary
// object.email
// object.address="gatenumber343"

// delete object.email
for(let key in object){
console.log(key +":", object[key])
}
// console.log(object)
// console.log("email" in object)
// console.log(object.office.name.toUpperCase())

