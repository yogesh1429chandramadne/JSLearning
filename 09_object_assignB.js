const sbiBank={
    bankName:"SBI Bank",
    location:"pune",
    IFSC:"SBIN00001234",
    showDetails:  function (){
        console.log(`Bank Name:${sbiBank. bankName}, Location:${sbiBank. location}, IFSC:${sbiBank. IFSC}, Interest Rate:${sbiBank. interestRate}`);
    },
    interestRate:6.5

}

const axisBank={
    bankName:" Axis Bank",
    location:"pune",
    IFSC:"axis0000789",
    showDetails: function (){
        console.log(`Bank Name :${axisBank. bankName},Location:${axisBank. location},IFSC:${axisBank. IFSC},Interest Rate:${axisBank. interestRate}`);
    },
    interestRate:5

}

const yesBank={
    bankName:"Yes Bank",
    location:"pune",
    IFSC:"Yes0000654",
    showDetails: function (){
        console.log(`Bank Name:${yesBank. bankName},Location:${yesBank. location},IFSC:${yesBank. IFSC},Interest Rate:${yesBank. interestRate}`);
    },
    interestRate:7.5


}

const hdfcBank={
    bankName:"HDFC Bank",
    location:"pune",
    IFSC:"HDFC0000258",
    showDetails: function (){
        console.log(`Bank Name:${hdfcBank. bankName},Location :${hdfcBank. location},IFSC:${hdfcBank. IFSC},Interest Rate:${hdfcBank. interestRate}`);
    },
    interestRate:3.5

}
console.log(`===============================SBI BANK ==============================================`);

 sbiBank. showDetails();
 console.log(`=================================AXIS BANK ============================================`);

 axisBank.showDetails();
 console.log(`====================================YES BANK =========================================`);

 yesBank.showDetails();
 console.log(`==================================HDFC BANK ===========================================`);

 hdfcBank.showDetails();