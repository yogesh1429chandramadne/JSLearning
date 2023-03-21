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
const setOfBanks = new Set();
setOfBanks.add(sbiBank);
setOfBanks.add(axisBank);
setOfBanks.add(yesBank);
setOfBanks.add(hdfcBank);
for (const Bank of setOfBanks) {
    console.log(Bank);
}














