function generateRandomValues(n , upperBound){
    const storedVals = [];
    while (n > 1){
        storedVals.push(Math.trunc(Math.random() * upperBound));
        n--;
    }
}




const randomNumGen = (n , upperBound) =>{
    for(let x = 0; x < n; x++){
        storedVals.push(Math.trunc(Math.random() * upperBound));
    }
    storedVals.forEach(element => {
        console.log(element)
    });
}

randomNumGen(10, 817);