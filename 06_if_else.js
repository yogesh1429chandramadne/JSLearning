function maleMarriageEligibility(gender,age,boyName){
if  (age<0||undefined) {var str=`Hey ${boyName} your Age ${age} is Not valid`;
    return str;
} 
if (gender=="male"&&age>=21) {
 var str =  `Hey ${boyName} You Are Eligible For Marrige`;
    return str;
} else {
    var str = `${boyName} you are not eligible for marrige`;
    return str;
}

    
}
var result =maleMarriageEligibility("male",25,"bill Gates");
console.log(result);
var result =maleMarriageEligibility("male",-15,"vijay");
console.log(result);

