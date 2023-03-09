let student ={
    firstName : "Yogesh",
    lastName : "Chandramadne",
    isWorking : true,
    age : 28,
    collageName:"ABC",
    id : 12345,
     address :{
        street :"Wakad",
        city : "Pune",
        PIN : "431204"
    },
    school : "Podar School",
    friends :["bill","steve","elon"],
    show: function () {
        console.log("I Show() function");
        
    },
    addressDetails: function(){
        this.address
        return`Address is:Street ${this.address.street},city${this.address.city},PIN ${this.address.PIN}`
    }
}
let result = student.addressDetails();
console.log(result);
console.log(student);
console.log(typeof(student));
//Dot Notation (we can Access a Value inside the object)
console.log(student.firstName);
//[] by using sq. braces also we can access the value
console.log(student["lastName"]);
console.log(student.collageName="COEP Pune");
console.log(student.age);
student.city = "Mumbai";//add one property
console.log(student.city = "Mumbai");
student.marks ={
    math : 80,
    physics:60,
    drawing:70,

}
delete student.isWorking;
console.log(student);
console.log(typeof student.id);
console.log(student.address.city);
console.log(typeof student.isWorking);
student.address.PIN = 431205;//updating the value
//console.log(student.address.PIN="431205");
console.log(student.address);
console.log(student.friends[2]);//not a correct way
console.log(student.friends[student.friends.length-1]);
student. show();
