console.log(`************* male marriage criteria ***************`);
function maleMarrigeEligibility(gender,age,boyName) {
    var result = (gender=="male" && age >=21 ) ? `Hey ${boyName} You Are Eligible For Marrige`: `Hey ${boyName} You Are Not Eligible For Marrige` ;
    return result;
    
}

var result = maleMarrigeEligibility("male",25,"billgates");
console.log(result);
var result = maleMarrigeEligibility("male", 17,"steve Jobs")
console.log(result);


console.log(`************* Female marriage criteria ***************`);
function femaleMarrigeEligibility(gender,age,girlName) {
    var result = (gender=="female" && age >=18 ) ? `Hey ${girlName} You Are Eligible For Marrige`: `Hey ${girlName} You Are Not Eligible For Marrige` ;
    return result;
}
var result = femaleMarrigeEligibility("female",16,"Jenifer");
console.log(result);
var result = femaleMarrigeEligibility("female", 27,"Malinda Gates")
console.log(result);
