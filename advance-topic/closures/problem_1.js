let start = 0;

// get even number
function evenNumber(){
    return start += 2;
}

// get odd number
function oddNumber(){
    // Problem-2 # In this case, all time value will re-assign by 1
    let start = 1;
    return start +=2;
}

// Problem-1 # In this case, any one can change (re-assign) the start value 
start = 10

for(let i=1; i<=5; i++){
    console.log(`${evenNumber()} is Even Number.`);
}

for(let i=1; i<=5; i++){
    console.log(`${oddNumber()} is Odd Number.`);
}