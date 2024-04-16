
function memoize(fn){
    let cache = {}
    return function(...args){
        const key = String(args)
        if(key in cache){
            return cache[key]
        }

        const result = fn(...args)
        cache[key] = result

        return result
    }
}


 const memo = memoize((a, b)=> a + b)
 //[[1,3],[],[3,1],[10,10],[]]

 console.log("ouside1", memo(1, 3))
 console.log("ouside2", memo())
 console.log("ouside3", memo(3, 1))
 console.log("ouside4", memo(10, 10))
 console.log("ouside5", memo())