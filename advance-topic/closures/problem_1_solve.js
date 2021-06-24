// get even number
function evenNumber(){
    let start = 0;
    function even(){ 
        start += 2; 
    }
    even();
    return start
}

for(let i=1; i<=5; i++){
    console.log(`${evenNumber} is Even Number.`);
}

