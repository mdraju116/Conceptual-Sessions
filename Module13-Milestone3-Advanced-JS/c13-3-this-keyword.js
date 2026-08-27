
/* JavaScript this Keyword
this -refers to the object/context that a function is called with. Its value depends mainly on how the function is called, 
not where it is defined.

//out of class, only need to understand the logic of this
Top-level:"Code directly inside the file, not inside a function."
File
│
├── console.log()     ← top-level
├── let name          ← top-level
│
└── function test()
       │
       └── console.log() ← inside function

Top-level this:"The value of this when used directly at the top level of the file."

 */

//✅ 1. this in the Global Scope 


// console.log(this); //{}  In node- it reffers to a global object named module.exports ,, but in browser- it reffers to window object
// console.log(this === exports); //true


// console.log(module); // {id:'.',  path:, exports: {},   filename: ,loaded: false,  children: [],paths: []..... }
// console.log(module.exports); //{}


//✅ 2. this Inside a Normal Function
// In normal function `this` depends on how the function is called.

function myfunc(){
    console.log(this);  //Object [global] { ...} - this reffers to the global object
    
}
// myfunc();     

// //NB: In strict mode("use strict") value of this inside the function is undefined  


//✅ 3. this Inside an Arrow Function
const myfunc2 =()=>{
    console.log(this); //{} 
    
}
// myfunc2();    

/* NB:
Arrow functions do not have their own this.
Instead, they lexically inherit this from their surrounding scope.

For example:
const myFunc2 = () => {
    console.log(this);
};
myFunc2();
Here the surrounding/top-level this is module.exports, so the arrow function inherits that value.

Important Rule
Arrow function → does NOT create its own `this`.
                  ↓
             inherits `this`
             from outer scope

⚠️ Don't say "this is undefined inside an arrow function."
The correct statement is: an arrow function has no this of its own.
 */


//✅ 4. this Inside an Object Method
// When a normal function is called as an object method, this refers to the object before the dot (.)
/* 
here,
person.showName(); is called through person, so:
this === person
*/

const person={
    name:"Raju",
    age:25,
    showName:function (){
        console.log(this); //{ name: 'Raju', age: 25, showName: [Function: showName] } - that means this can take/reffer the full object
        console.log(this.name); //Raju
        
    }
};
// person.showName();




// ✅ 5. Arrow Function Inside an Object
const person2={
    name:"Raju",
    age:25,
    showName: ()=>{
        console.log(this); //{}  - that means this can't take/reffer the object in arrow function i.e. this !==person2, he holds his parents value (module.exports)
                           //⚠️so, we should avoid arrow function inside object.
        console.log(this.name); //undefined
        
    }
};
// person2.showName();



// ✅ 6. Nested Function Inside an Object Method
const person3={
    name:"Raju",
    age:25,
    showName: function(){
        console.log(this); //{ name: 'Raju', age: 25, showName: [Function: showName] }
        console.log(this.name); //Raju
        setTimeout(function(){
            console.log(this);// Timeout {..}   - that mean nested this can't reffer the main object   //see solution in the below
            console.log(this.name); //undefined  
        },2000);                
    }
};
// person3.showName();


//✅solution-1 (using self variable) 
const person4={
    name:"Raju",
    age:25,
    showName: function(){
        console.log(this); //{ name: 'Raju', age: 25, showName: [Function: showName] }
        console.log(this.name); //Raju
        const self=this;
        setTimeout(function(){ 
            console.log(self);// { name: 'Raju', age: 25, showName: [Function: showName] }  //same to same as main this
            console.log(self.name); //Raju  
        },2000);                
    }
};
// person4.showName();


//✅solution-2 (using arrow function -best way)
const person5={
    name:"Raju",
    age:25,
    showName: function(){
        console.log(this); //{ name: 'Raju', age: 25, showName: [Function: showName] }
        console.log(this.name); //Raju
        
        setTimeout(()=>{    //As this of arrow function holds/reffers his parent's this, so it works like self variable
            console.log(this);// { name: 'Raju', age: 25, showName: [Function: showName] }  //same to same as main this
            console.log(this.name); //Raju  
        },2000);                
    }
};
// person5.showName();


//✅solution-3 (using  .bind)
const person6={
    name:"Raju",
    age:25,
    showName: function(){
        console.log(this); //{ name: 'Raju', age: 25, showName: [Function: showName] }
        console.log(this.name); //Raju
        // const self=this;
        setTimeout(function(){
            console.log(this);// { name: 'Raju', age: 25, showName: [Function: showName] }  //same to same as main this
            console.log(this.name); //Raju  
        }.bind(this),2000);                
    }
};
person6.showName();