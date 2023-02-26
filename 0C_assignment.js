console.log("**********************Eligibility For TCS Interview******************");
function tcsEligible(gradScore,hscScore,sscScore,candidateName) {
    var result = (gradScore>=70 || hscScore >= 80 || sscScore >= 90) ? `Congrates ${candidateName} you Are Eligible For TCS Interview`:`Unfortunately ${candidateName} You Are not Elligible for Interview `   
console.log(result);
}
 tcsEligible(80,60,90, "Thomas Edison");
 tcsEligible(70,65,55,"vivek");
 tcsEligible(60,79,88,"siddharth")
