//Execution context has 2 phase :
//1. Creation phase : only creates a variable/function and allocates memory, but doesn't assign value (ex: var a; [memAdd: xxx01])
//2. Execution phase : assigns value and execute logics (ex: var a= 30)

let a =10;
console.log(a);

function one(){
    two();
    console.log("This is function One.");
}

function two(){
    three();
    console.log("This is function two.");
}
function three(){
    console.log("This is function three.");
}

let b=20;
console.log(b);

one();

let c=30;
console.log(c);

//Execution stack / call stack                      //output sequence
//4.function three //(only log three())              2.log of three()
//3.function two // will call three() first          3.log of two()
//2.function one // will call two() first            4.log of one()
//1.global contexts/variables (log = a,b)            1.log of global (a,b)