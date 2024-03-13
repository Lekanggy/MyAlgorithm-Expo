function concertQueue(N){
    let item = "0"
    let compare = 1

    while (compare < N.length) {
        let count = 0
        for (let item of N.slice(0, compare)){
            //console.log()
            if (N[compare] < item) count += 1;

        }
        item += String(count)

        compare += 1
    }

    return item
}

console.log(concertQueue([5,4,3,1,2]))