class Bank{
    constructor(bankName,location,accountNo,Ifsc,interestRate){
    this.bankName =bankName;
    this.location=location;
    this.accountNo=accountNo;
    this.Ifsc= Ifsc;
    this.interestRate=interestRate;


}
}
const sbiBank = new Bank("SBI Bank","Wakad","5464656464","67646557676","5");
const axisBank = new Bank("AXIS Bank","bajirao Road","1478","58963","6");
const yesBank = new Bank("Yes Bank","Mumbai","625457785545","Yes565465","8");
const hdfcBank = new Bank("HDFC Bank","Surat","77984385545","HDFC5655465","7");
const mapOfBank = new Map();
mapOfBank.set("SBI_11",sbiBank);
mapOfBank.set("AXIS_22",axisBank);
mapOfBank.set("YES_33",yesBank);
mapOfBank.set("HDFC_44",hdfcBank);
//const element = mapOfBank.get("YES_33")
const keyOfMap = mapOfBank.keys();
for (const key of keyOfMap) {
    const element = mapOfBank.get(key)
    console.log(element);
}
