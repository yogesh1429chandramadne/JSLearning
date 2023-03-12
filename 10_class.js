class Bank{
bankName
location
account
ifsc
interestRate
constructor(bankName,location,account,ifsc,interestRate){//constructor is a special method it will initialize object
    this.bankName=bankName;
    this.location=location;
    this.account=account;
    this.ifsc=ifsc;
    this.interestRate=interestRate;

}
}
const sbiBank = new Bank("SBI Bank","Wakad","5464656464","67646557676","5");
console.log(sbiBank);
const axisBank = new Bank("AXIS Bank","bajirao Road","1478","58963","6");
console.log(axisBank);