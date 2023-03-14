const bankSbi={
    bankName: "SBI BANK",
    estdYear:1935,
    interestRate:6,
     email:"sbiBank@gmail.com"
    
}
const bankLocation={
    street:"Tilak Road",
    city : "PUNE",
    PIN:431202

}
console.log(`=================================== Bank Details After Cloning Using Assign============================================================`);
const sbi = Object.assign({},bankSbi)
console.log(`SBI Bank details:  Bank Name: ${sbi.bankName}, ESTD Year: ${sbi.estdYear}, Interest Rate: ${sbi.estdYear}, Email: ${sbi.estdYear}`);
const location = Object.assign({},bankLocation)
console.log(`Bank Location details:  Street: ${location.street}, City:${location.city}, PinCode: ${location.PIN}`);
console.log(`=================================== bank Details After Cloning Using spread Operator============================================================`);

const newBank ={...bankSbi};
console.log(`SBI Bank details: Bank Name: ${newBank.bankName}, ESTD Year: ${newBank.estdYear}, Interest Rate: ${newBank.estdYear}, Email: ${newBank.estdYear}`);
const newLocation ={...bankLocation}
console.log(`Bank Location details:  Street: ${location.street}, City:${location.city}, PinCode: ${location.PIN}`);
const rateOfInterest = {
    homeLoanInterest :8,
    personalLoanInterest:6,
    dueInterest:3
}
console.log(`===================================  After Merging step 1,step2 & step 4 ============================================================`);
const sbiDetails={ bankSbi,bankLocation,rateOfInterest}
    console.table(sbiDetails);

for (let index = 0; index <sbiDetails.length; index++) {
    const element =sbiDetails[index];
    console.log(element.bankSbi);
}




