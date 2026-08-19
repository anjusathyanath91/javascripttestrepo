module.exports = class Person{
age=25
get location(){
    return 'canada'
}
constructor(firstname,lastname){ //constructor
    this.firstname=firstname
    this.lastname=lastname
}
fullname(){
    console.log(this.firstname+" "+this.lastname)
}
}
/*let person=new Person()
console.log(person.age)
console.log(person.location)//location can be accessed using its get function
let person1=new Person("Kim","Joseph")
console.log(person1.fullname())
//or can use person1.fullname() without consle.log
let person2=new Person("Chris","Johns")
console.log(person2.fullname())
//or can use person2.fullname() without consle.log*/