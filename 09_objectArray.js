const sbiBank={
    bankName:"SBI Bank",
    location:"pune",
    IFSC:"SBIN00001234",
    interestRate:6.5

}

const axisBank={
    bankName:" Axis Bank",
    location:"pune",
    IFSC:"axis0000789",
    interestRate:5

}

const yesBank={
    bankName:"Yes Bank",
    location:"pune",
    IFSC:"Yes0000654",
    interestRate:7.5


}

const hdfcBank= {
    bankName:"HDFC Bank",
    location:"pune",
    IFSC:"HDFC0000258",
    interestRate:3.5

}
const arrayOfBanks = [sbiBank ,yesBank ,hdfcBank ,axisBank];

// for(let index = 0; index < arrayOfBanks.length; index++) {
//     const element = arrayOfBanks[index];
//     console.log(`${element.bankName},${element.location},${element.IFSC},${element.interestRate}`);
// }
for (const element of arrayOfBanks) {
    console.log(`${element.bankName},${element.location},${element.IFSC},${element.interestRate}`);

    
}
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }