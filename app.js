function fibs(n) {
    if (n <= 0){
        return [];
    } else if (n === 1 ){
        return [0];
    }else {
        const result = [0,1];
        for(let i =2; i< n;i++){
            const nextFib = result[i-1] + result[i-2];
            result.push(nextFib)
        }
    return result;
    }
}

function fibRec(n){
    if (n <= 0){
        return[];
    }else if (n === 1){
        return [0];
    }else if (n === 2){
        return [0,1]
    }else{
        const prevSequence = fibRec(n-1);
        prevSequence.push(
            prevSequence[prevSequence.length - 1] + prevSequence[prevSequence.length - 2]
        );
        return prevSequence
    }
}

console.log("\n Iterative Fibanacci:");
console.log(fibs(10));

console.log("\n Recursice")
console.log(fibRec(10))