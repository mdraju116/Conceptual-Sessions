
//✅✅There are 2 types of paradigm
//1.functional paradigm -pure, first class, higher order
//2.Object oriented paradigm


//✅✅1.Pure function
//a. It returns the same result if given the same arguments.
//b. It does not cause any observable side effect.

function sqrt(a){
    return a*a;
}
// console.log(sqrt(10)); //100
// console.log(sqrt(10)); //100


//✅Impure/unpure function : does the opposite of pure fn
  
let n=50;
function add (){
    // console.log(n);//50
    return n +=2;
}
// console.log(add()); //52
// console.log(add()); //54  //it changes the the output for same arguments
// console.log(add()); //56



//✅✅2.First class function
// a. A function can be stored in a variable
// b. A function can be stored in an array
// c. A function can be stored in a object
// d. We can create functions as we need


function multiply(a,b){
    return a*b;
}

//a
let myMultiply=multiply;
// console.log(myMultiply(6,10));//60

//b
let arr =[];
arr.push(multiply); //now arr =multipy() => arr[0] ==arr[multiply] //orthat 0 index e multiply function bose tahklo
// console.log(arr); //[ [Function: multiply] ]
// console.log(arr[0](5,10));//50  //here, [0] means the first index and 5&10 are the arguments of multiply function i.e arr[0](5, 10) === multiply(5, 10)


//c
let myObj ={multiply};
// console.log(myObj.multiply(5,7)); //35

//d
function myfunc(){
    function myfunc2(){
        console.log("Inside function");
        
    }
    myfunc2();
}
// myfunc(); 




//✅✅3.Higer Order function
//It follows all the rules of First class function and it has some extra feature too-
//a. We can pass function as an arguments
//b. We can return function from another function


function sum(a,b){
    return a+b;
}

function myfunct3(a,b,c,d,func){
    return function(){  //returning another function
        let sum=func(a,b);
        // console.log(sum); //30
        let multiply=sum *c*d;
        return multiply;
    };
};

let result = myfunct3(10,20,2,5,sum); //passing sum function
console.log(result()); //300
