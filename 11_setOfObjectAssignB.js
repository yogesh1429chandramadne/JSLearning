class Bank{
    constructor(bankName,location,accountNo,Ifsc,interestRate){
    this.bankName =bankName;
    this.location=location;
    this.accountNo=accountNo;
    this.Ifsc= Ifsc;
    this.interestRate=interestRate;


}
}
console.log(`=================================== Bank Details ====================================================`);

const axisBank = new Bank("AXIS Bank","Patana","147856564","AXIS746546","6");
console.log(axisBank);
const sbiBank = new Bank("SBI Bank","Bhagalpur","5464656464","SBI557676","5");
console.log(sbiBank);
const iciciBank = new Bank("ICICI Bank","Kochi","35757785545","ICIC565465","8");
console.log(iciciBank);
const kotakBank = new Bank("KOTAK Bank","Gandhinagar","25884385545","KOTAK21478","7");
console.log(kotakBank);
const hdfcBank = new Bank("HDFC Bank","Prayagraj","982385545","HDFC5655465","6.5");
console.log(hdfcBank);
const punjabBank = new Bank("PUNJAB Bank","Dispur","12484385545","Punjab5655465","9.5");
console.log(punjabBank);


const setOfBank = new Set();

setOfBank.add(axisBank);
setOfBank.add(sbiBank);
setOfBank.add(iciciBank);
setOfBank.add(kotakBank);
setOfBank.add(hdfcBank);
setOfBank.add(punjabBank);


console.log(`=================================== Partial Traversing Of Set Object ====================================================`);
for (const element of setOfBank) {
    
    console.log(`Address Of Bank:Bank Name: ${element.bankName},    Location: ${element.location}`);
}