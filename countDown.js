const countDown = (n)=>{
    let count = 0
    console.log("outer counet", count)
    return ()=>{
        console.log("inisdeclosure", count)
        const interval = setInterval(()=>{
           
            count+=1
            console.log(count)
            if(count === n) clearInterval(interval);
        }, 1000)
    }
}

const count = countDown(10)
count()
