function doHomework(Callback) {
    console.log("do Homework....");
    console.log("Finally Homework is COmpleted.....");
    Callback();
    let submitHomework= function () {
        console.log("Hey We both Completed homework");
        console.log("Let us submit please....");
        
    }
    return submitHomework;
}
function copyHomework() {
    console.log("Coping Homework....");
    console.log("Thank you ,I copied Homework.....");
    
}
const submitHomework= doHomework(copyHomework);
submitHomework();