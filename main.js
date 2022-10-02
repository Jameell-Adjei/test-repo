function generateRandomValues(n , upperBound){
    const storedVals = [];
    while (n > 1){
        storedVals.push(Math.trunc(Math.random() * upperBound));
        n--;
    }

    storedVals.forEach(element => {
        console.log(element)
    });
}

generateRandomValues(10, 817);