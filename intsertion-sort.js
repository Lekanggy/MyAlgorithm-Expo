// function insertionSort(arr){
//     let n = arr.length - 1
//     for(let i = 1; i <= n; i++){
//         let key = arr[i]

//         j = i - 1
//         while(j >= 0 && arr[j] > key){
//             arr[j + 1] = arr[j]
//             j -= 1
//         }

//         arr[j + 1] = key
//     }

//     return arr
// }

//Arrange in Descending order
function insertionDecrease(arr){
    let n = arr.length - 1
    for(let i = 1; i <= n; i++){
        let key = arr[i]
        let j = i - 1
        while(j >= 0 && key > arr[j]){
            arr[j + 1] = arr[j]
            console.log(`j${j}`, arr)
            j = j-1
        }

        console.log(`jj-->>${i}`)
        arr[j + 1] = key
        console.log(`i${i}`, arr)
    }

    return arr
}



console.log(insertionDecrease([3, 5, 4, 2, 7, 19, 10, 8]))