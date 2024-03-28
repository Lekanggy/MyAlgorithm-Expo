function isSubset(setArr, subSet){
    return subSet.every(d=> setArr.includes(d))
}

console.log(isSubset(["a", "b", "c", "d"], ["b", "d", "f"]))

//console.log(["a", "b", "c", "d"].includes("d"))