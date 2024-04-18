var addTwoPromises = async function(promise1, promise2) {
    
    return new Promise(resolve => resolve(promise1) + resolve(promise2))
};
const promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50))
const promise2 = new Promise(resolve => setTimeout(() => resolve(10), 30))

addTwoPromises(promise1, promise2).then(result=> result )
