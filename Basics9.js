class Vehicle{
    numeberofwheels() {
        
    }
}
class Car extends Vehicle{

    numeberofwheels(){
        console.log("Car has 4 wheels")
    }
}
let v=new Vehicle()
v.numeberofwheels()
let c=new Car()
c.numeberofwheels()
