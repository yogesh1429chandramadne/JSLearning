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

const axisBank = new Bank("AXIS Bank","Bhopal","147856564","AXIS3746546","6");
console.log(axisBank);
const sbiBank = new Bank("SBI Bank","Ujjain","5464656464","SBI6557676","5");
console.log(sbiBank);
const iciciBank = new Bank("ICICI Bank","Indore","625457785545","ICIC565465","8");
console.log(iciciBank);
const kotakBank = new Bank("KOTAK Bank","Noida","77984385545","KOTAK21478","7");
console.log(kotakBank);
const hdfcBank = new Bank("HDFC Bank","Sambhajinagar","563385545","HDFC5655465","6.5");
console.log(hdfcBank);
const punjabBank = new Bank("PUNJAB Bank","Patiyala","77984385545","HDFC5655465","9.5");
console.log(punjabBank);


const mapOfBank = new Map();

mapOfBank.set("AXIS_11",axisBank);
mapOfBank.set("SBI_22",sbiBank);
mapOfBank.set("ICICI_33",iciciBank);
mapOfBank.set("KOTAK_44",kotakBank);
mapOfBank.set("HDFC_55",hdfcBank);
mapOfBank.set("PUNJAB_66",punjabBank);
const element = mapOfBank.get("YES_33")
const keyOfMap = mapOfBank.keys();
console.log(`=================================== Partial Traversing Of Map Object ====================================================`);
for (const key of keyOfMap) {
    const element = mapOfBank.get(key)
    console.log(`Bank Name: ${element.bankName},    Account No: ${element.accountNo},    Interest Rate:  ${element.interestRate}`);
}