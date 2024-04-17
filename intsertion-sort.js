function insertionSort(arr){
    let n = arr.length - 1
    for(let i = 1; i <= n; i++){
        let key = arr[i]

        j = i - 1
        while(j <= n && arr[j] > key){
            arr[j + 1] = arr[j]
            j -= 1
        }

        arr[j + 1] = key
    }

    return arr
}

console.log(insertionSort([5,4,9,8, 7,17,16, 2, 3, 6, 20, 18, 19, ]))