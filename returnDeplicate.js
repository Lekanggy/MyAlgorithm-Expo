function findDuplicate(arr){
    let duplicate = []
    for(let i=0; i< arr.length; i++){
       for(let j = i + 1; j < arr.length; j++){
           if((arr[i] === arr[j]) && !duplicate.includes(arr[i])){
               //console.log(arr[i])
               duplicate.push(arr[i])
           }
       }
    }
   
    return duplicate;
   }
   
   //console.log(findDuplicate([1,2,3,1,4,5,5, 6,7,7,8,10]))


   //Return duplicates using frequency table
   function frequencyDup(arr){
        let frq = {}
        let dup = []
        for(let i=0; i< arr.length; i++){
            
            if(frq[arr[i]] === 1){
                frq[arr[i]]++
            }else{
                frq[arr[i]] = 1
            }
            if (frq[arr[i]] > 1){
                dup.push(arr[i])
            }
        }

        //console.log(frq)
        //console.log(dup)

        return dup
   }

   console.log(frequencyDup([1,2,3,1,4,5,5, 6,7,7,8,10]))