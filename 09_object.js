let student ={
    firstName : "Yogesh",
    lastName : "Chandramadne",
    isWorking : true,
    age : 28,
    collageName:"ABC",
    id : 12345,
}
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
delete student.isWorking;
console.log(student);