function findMissing(arr){
    let missing = 1;

    while(arr.indexOf(missing) !== -1){
        missing++;
        //console.log(high)
    }

    return missing;
}

console.log(findMissing([1,2,3,4,5,6,7,8,10]))
