
function isSubset(setArr, subSet){
    return subSet.every(d=> setArr.includes(d))
}

function memoize(fn) {
    let cache = {}
    let result = {}
    let count = 0
    
   
   
     return function(...args) {
         var runCall = false
         cache[count] = args
         const values = Object.values(cache)
        
         if(values.length > 1){
           
            for(const item of values){
                //console.log("seen", item)
                 runCall = isSubset(item, args)
                 if(runCall){
                    console.log("second")
                    return result[count];
                 } 
            }
         }

         count += 1

         result[count] = fn(...args)
         console.log(result[count])
         console.log("vsa", result)
         console.log("count", cache)
       
        
        return result[count]
         
    }
 }

 const memo = memoize((a, b)=> a + b)

 console.log("ouside", memo(2, 4))
 console.log("ouside2", memo(4, 2))