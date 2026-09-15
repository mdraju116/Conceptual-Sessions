/* 
📌📌VVI Note: JS is a synchronous,single threaded and non-blocking  language.

✅✅✅There are 2 types of task in Js.

✅1.Synchronous : Synchronous means that you can only execute one task at time.
                    Executed line by line
✅2.Asynchronous : Asynchronous means that you can execute multiple task at a time and 
you don't have to finish execution of the current task in order to move on to next one.
                  Executed through time sequence (whose time is less,will execute first)


➡️➡️Asynchronous tasks are two types :
    ➡️a. Micro tasks : High Priority (executed first)
    ➡️b. Macro tasks : Low Priority (executed after Micro tasks)




✅✅Execution process/sequence

➡️1.Synchronous task: code editor => Call stack => console

➡️2.Asynchronous task (at 13:10 minute): code editor => Call stack => Web Apis => task Queue => Event loop => Call Stack  => console

➡️3. mixed tasks :  synchornous task will execute first, then async, and
among the async tasks, whose delay time is less he will execute first. 

*/




//✅✅Sync example-1 (at 6:50 minute):
/* console.log("one");

console.log("two");

function three(){
    console.log("three");
}

function four(){
    three();
    console.log("four"); 
}
four(); */


//➡️output:
// one
// two
// three
// four


//✅✅Sync example-2 (at 9:20 minute):

/* function longRunningTask(){
    let count =0;
    for(let i=0;i<1e9;i++){
        count++;
    }
    console.log("long task done");
    
}

function importantTask(){
    console.log("Important");
    
}
longRunningTask();
importantTask(); */


//➡️output:
// long task done
// Important


//✅✅Async Example (at 12:25 minute):
//NB: setTimeout() is a default js web api which is an asynchronous function

/* setTimeout(()=>{
    console.log("2000ms");
    
},2000);

setTimeout(()=>{
    console.log("100ms");
    
},100); */

//➡️ output:
// 100ms
// 2000ms




//✅✅Mixed example (at 4:30 minute): sync and aysnc 

console.log("a"); //sync
console.log("b"); //sync

setTimeout(()=>{  //Async
    console.log("c");
    
},2000);

console.log("d");//sync

setTimeout(()=>{ //Async
    console.log("e");
    
},0);

console.log("f"); //sync

//➡️output:
// a
// b
// d
// f

// e
// c

