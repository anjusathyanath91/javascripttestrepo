let person={ //object 

    firstname:'Tim', //properties of the object 'person'
    lastname:'Jo',
    age:24,
    fullname:function(){ //functions can be stored as a property
        console.log(this.firstname+ " " +this.lastname)
    }
}
console.log(person.fullname())//to print function
console.log(person.lastname)
console.log(person.firstname)
console.log(person['lastname'])//alternate method to print lastname
person.firstname="Tim Dane" //to change first name
console.log(person.firstname)
person.gender="Male" //to add a property "gender"
console.log(person)//to print the properties of object 'person'
delete person.gender //to delete a property
console.log(person)
console.log('gender' in person)
console.log('age' in person)
for(let k in person)//to print all elements
{

    console.log(person[k])
}