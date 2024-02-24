var cards = ['King', 'Queen','Jack', 8, 2, 6, 'King', 5, 3, 'Queen', "Jack"]


const sortIt = (a,b)=>{
    return a > b ? 1 : a < b ? -1 : 0   
}
function cardSort(arr){
    let rightOrder =  [2,3,5,6,8,'Jack','Queen','King']
    return arr.sort((a, b)=> rightOrder.indexOf(a) - rightOrder.indexOf(b))

}

console.log(cardSort(cards))


//Alternative solution 



/**
 * The `cardSort` function sorts an array of numbers and strings, moving all occurrences of 'King' to
 * the end of the string array.
 * @param arr - The `cardSort` function takes an array `arr` as input, which contains a mix of numbers
 * and strings representing playing cards. The function sorts the numbers in ascending order and the
 * strings in alphabetical order. Additionally, it moves all occurrences of the string 'King' to the
 * end of the sorted
 * @returns The `cardSort` function returns an array where numbers are sorted in ascending order and
 * strings are sorted in alphabetical order, with all occurrences of the string 'King' moved to the end
 * of the array.
 */
function cardSort(arr) {
  let num = arr.filter((a) => typeof a === 'number').sort(sortIt);
  let str = arr.filter((a) => typeof a === 'string').sort(sortIt);

  // Move all occurrences of 'King' to the end
  let kings = str.filter((val) => val === 'King');
  str = str.filter((val) => val !== 'King');

  str = str.concat(kings);

  return num.concat(str);
}

console.log(cardSort(cards))