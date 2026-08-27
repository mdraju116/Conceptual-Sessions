


//✅1.call 
function calculateAvgMarks(physics,chemisty){
    const avg=(this.bangla + this.english + this.math +physics +chemisty)/5 ; //80
    console.log(avg);
    
    
}

let student = {
    name : "utsho",
    age:25,
    bangla : 80,
    english:85,
    math:70
};

// calculateAvgMarks.call(student,75,90);



//✅2.apply (need to pass the arguments as an arrray[] )
function calculateAvgMarks2(physics,chemistry){
    const avg=(this.bangla + this.english + this.math +physics +chemistry)/5 ; //80
    console.log(avg);
    
    
}

let student2 = {
    name : "utsho",
    age:25,
    bangla : 80,
    english:85,
    math:70
};

// calculateAvgMarks2.apply(student2,[75,90]);



//✅3.bind -it returns a function, so need to keep it inside a variable, then call it. (works like a closure)
function calculateAvgMarks3(physics,chemistry){
    const avg=(this.bangla + this.english + this.math +physics +chemistry)/5 ; //80
    console.log(avg);
}


let student3 = {
    name : "utsho",
    age:25,
    bangla : 80,
    english:85,
    math:70
};

// console.log(calculateAvgMarks3.bind(student3));//[Function: bound calculateAvgMarks3]
const bindfunc= calculateAvgMarks3.bind(student3); 
bindfunc(75,90) //80
bindfunc(65,80) //76
