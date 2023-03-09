let professor= {
    name: "Jagtaap sir",
    subject:"Artificial Intelligence",
    dept:"Computer Engineering",
    collage:"Dnyan Vidnyan Collage Sambhajinagar",
    age:52,

    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing",
        MBA:"Finance",
        MTech:"Aeronautical Engineering"
    },
    teacherDegrees:function(){
        return`Teacher Degrees:${engineering},${PHD},${MBA},${MTech} `
    },
    totalExperience:"14 Years",
    certificates:["Hacker Rank Particiation","Certificate in IFE course","Certificate in Adv Programming",],

}
console.log(`=========================== Before update Collage==============================`);
console.log(professor);
console.log(`=========================== After update Collage==============================`);
professor.collage="Dayanand Collage Latur"
console.log(professor);
professor.certificates.push("Oracle Certified");
console.log(`=========================== Teacher Certificates ==============================`);

console.log(professor.certificates);
console.log(`=========================== Last Certificate In A Array  ==============================`);

console.log(`The Last Certificate From Given Array Is:`,professor.certificates[professor.certificates.length-1]);


