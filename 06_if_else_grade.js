console.log(`***********Step 1***********`);

function voteEligibility(age) {
  if (
    age <= 0 ||
    age >= 120 ||
    age == undefined ||
    age != null ||
    isNaN == age
  ) {
    console.log(` Given Age IS ${age} Data Is invalid`);
    if (age >= 18) {
      console.log(` Given age is ${age} -Hey You are Eligible For Voting`);
  }else {
    var ageForVote = age;
    console.log(`Given Age is ${age} hey you are not eligibe for voting`);
  }
  
  }

  return age;
}

voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);
voteEligibility(NaN);
console.log(`************step 2 *******************`);
function gradeCaculation(marks) {
  if (
    marks <= 0 ||
    marks > 100 ||
    typeof marks != "string" ||
    typeof marks == "number" ||
    marks == undefined ||
    marks == NaN ||
    marks == null
  ) {
    console.log(`please provide the valid marks - ${marks} `);
  }

  if (marks >= 90 || marks < 100) {
    console.log(`fantastic marks: ${marks}, your Grade is A+`);
  }
  if (marks >= 75 && marks < 90) {
    console.log(`Excellent marks: ${marks}, your grade is A `);
  }
  if (marks >= 50 && marks < 75) {
    console.log(`Good Marks :${marks}, your grade is B `);
  }
  if (marks >= 35 && marks < 50) {
    console.log(`marks is :${marks},your grade is C,Need improvement `);
  }
}
gradeCaculation(98);
gradeCaculation(80);
gradeCaculation(90);
gradeCaculation(29);
gradeCaculation(0);
gradeCaculation(150);
gradeCaculation(-7);
gradeCaculation("91");
gradeCaculation("seventy one");
gradeCaculation(NaN);
gradeCaculation(undefined);
gradeCaculation(null);
