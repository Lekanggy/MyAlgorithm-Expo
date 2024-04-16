function composed(functions){

    const leftComposed = []
    if(functions.length === 0) return (x)=> x;
    return function(x){
        // if(functions.length === 0) return x;

        functions.forEach((item)=> leftComposed.unshift(item))

        console.timeLog()

        return leftComposed.reduce((acc, fn)=> fn(acc), x)
    }
}

// var compose = function(functions) {
    
//     if(functions.length===0){
//         return function(x){
//             return x;
//         }
//     }
//     return function(x) {
//         // let result=functions[functions.length-1](x)

//         for(let i=functions.length-1;i>=0;i--){
//             x=functions[i](x)
//         }
//         return x
        
//     }
// };

const pipe = composed([x => x + 1, x => 2 * x])

console.log(pipe(4))