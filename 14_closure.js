


let globalVariable =100;
function outer() {
    console.log("This Is Outer Function");
    let outerFunctionvariable = 300;
    let inner = function() {
        console.log("This Is Inner Function");
        let innerFunctionVariable = 500;
        console.log(innerFunctionVariable);
        console.log(outerFunctionvariable);
        console.log(globalVariable);
        
    }
    return inner;
}
const innerFun = outer();
innerFun();