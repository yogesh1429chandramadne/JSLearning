function show(arg1,...arg) {
    console.log(arg1);
    console.log(arg);
    
}
show(100,200,300);


function show(arg1,arg2) {
    if(arg2==0);
    console.log(arg1/arg2);
    
}
show(100);
function show(arg1,arg2=1) {//function with default parameter
    console.log(arg1,arg2);
    console.log(arg1/arg2);
    
}
show(100);
console.log(100,101);