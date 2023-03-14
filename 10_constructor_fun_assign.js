console.log("****************Object Creation with help ofConstructor Function *****************");

class BankDetails{
bankName;
location;
ifscCode;
branchCode;
openTime="9 AM IST";
CloseTime="6 PM IST";
 constructor(bankName,location,ifscCode,branchCode){
this.bankName=bankName;
this.location=location;
this.ifscCode=ifscCode;
this.branchCode=branchCode;
 }
}
const sbi =new BankDetails("SBI","PUNE","SBIN0003562",10012);
//console.log(sbi);

const yes =new BankDetails("YES BANK","MUMBAI","YES0007854",10013);
//console.log(yes);
const hdfc =new BankDetails("HDFC","NAGPUR","HD0002546",10014);
//console.log(hdfc);
const mgb =new BankDetails("MGB","NANDED","MGBD0001457",10015);
//console.log(mgb);
const BankDetailsarray = [sbi, yes, hdfc, mgb];

for (let index = 0; index < BankDetailsarray.length; index++) {
  const element = BankDetailsarray[index];
  console.log(`Bank Datails is:${element.bankName},${element.location},${element.ifscCode},${element.branchCode}`
 );

}
console.log("****************Adding the Data Member to object*****************");
const sbi1 =new BankDetails();
const yes1 =new BankDetails();

console.log("SBI Bank Open  Time:",sbi1.openTime,"And Close time is:",sbi1.CloseTime);
console.log("YES Bank Open  Time:",yes1.openTime,"And Close time is:",yes1.CloseTime);
console.log("*********************************");

console.log("YES Bank Branch Name:",yes.bankName,"Branch code:",yes.branchCode,"Open Time:",yes.openTime);