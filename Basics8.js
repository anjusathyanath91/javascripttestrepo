const Person = require("./Basics7");
class Pet extends Person{
get location(){
    return "USA"
}
constructor(firstname,lastname){
    super(firstname,lastname)//to inherit base class constructor we can use super keyword
}
}
let pet=new Pet("Sam","San")
pet.fullname()
console.log(pet.location)
console.log(pet.age)