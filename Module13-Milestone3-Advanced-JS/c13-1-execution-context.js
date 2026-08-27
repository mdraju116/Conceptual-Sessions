/* 
Execution Context has 2 main phases:
1. Creation Phase:
   JavaScript creates the execution context and allocates memory for
   variables and functions.

   var → allocated memory and initialized with undefined
   let/const → allocated memory but remain uninitialized (TDZ)
   function declaration → entire function is stored in memory

   Example:
   var a = 30;

   Creation phase:
   a → undefined

2. Execution Phase:
   JavaScript executes the code line by line and assigns values,
   performs calculations, and calls functions.

   Execution phase:
   a → 30 
   

📌So the most important thing to remember is:
Creation Phase = prepare memory; Execution Phase = run the code and assign/use values.
*/

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