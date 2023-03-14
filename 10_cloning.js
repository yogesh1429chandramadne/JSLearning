let n1 = 100;
let n2 = n1;//deep clone
console.log(n2);
n1 = 200;
console.log(n2);

let s1 = "Hey JS";
let s2 = s1;//deep clone

let b1 = true;
let b2=b1;//deep clone

const person ={
    fullName : "MS Dhoni",
    age:38
}
const player = person//shallow clone means== two refernce variable pointing to the same object
player.fullName ="Captain Cool Dhoni";
console.log(player);
console.log(person); 
const newPlayer = {...person};//deep cloning object = using spread object
console.log(newPlayer);
newPlayer.age =42;
console.log(`newPlayer === ${newPlayer.fullName},${newPlayer.age}`);
console.log(`newPlayer === ${player.fullName},${player.age}`);
const student ={
    fullName:"Viraat Kohli",
    age:33,
    address:{
        street:"AS CLUB",
        city: "pune",
        PIN:431202    }
}
console.log(`====================clone object using spread Method============================= `);

const newStudent= {...student};
 newStudent.fullName= "king Kohli";
 newStudent.address.city="Mumbai";//drawback Of Spread method Cloning  is When WE have NEsted Object It will Fail 
 console.log(`ccity==${newStudent.address.city}`);
 console.log(`city==${student.address.city}`);
 console.log(`student==${newStudent.fullName}`);
 console.log(`student==${student.fullName}`);
 console.log(`==================deep clone using spread string .json========================`);
 const bank ={
    bankName:"SBI Bank",
    acNo: 46465465465,
    bankAddress:{
        city: "Banglore",
        PIN:454646454654
    }
 }
 const newBank = JSON.parse(JSON.stringify(bank));//using json method we can do changes inside the nested object
 newBank.bankAddress.PIN=654646;
 console.log(`bankPin====${bank.bankAddress.PIN}`);
 console.log(`newbankPin==${newBank.bankAddress.PIN}`);


























