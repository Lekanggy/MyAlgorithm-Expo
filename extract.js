// let text = '<div xmlns=\"http://www.w3.org/1999/xhtml\">Your appointment has been reserved for 2023-06-29 10:00:00. Reference ID is a06876d5-d1e1-4d83-a0e9-6715a6e4cdcc. Appt Block Id is 0. Appt Encounter Id is 31101.</div>'
// Write a function that returns the reference ID, encounter ID, and block ID.
// Hint
// The reference ID will always be the same length.
// The encounter and block ID may have varying lengths.
// The structure of the text will always be the same.

function extract(str){
//  let reg = /\b(?:\d*\w*(?:\-)[a-z0-9]{3,})+\b/ig
//  let refId = str.match(reg)[0]
//  const others = str.match(/\bAppt\b.*\./g)[0].match(/\d+/g)
//  const ecdId = others[0]
//  let blockId = others[1]
 
// console.log(refId, ecdId, blockId) 

//Backrefrencing

// let patt = /([aeiou])/ig
// let replaceStr = str.replace(patt, "($1)")

// let patt = /(\d{2})/ig
// let replaceStr = str.replace(patt,"-$1- ")
// let patt = /(\d+)-(\d+)-(\d+)/ig
// let replaceStr = str.replace(patt, "($1) ($2) ($3)")

// console.log(replaceStr)

//Group within group
// let patt = /(\d+)-(\d+)-(\d+)/ig
// let replaceStr = str.replace(patt, "($1) ($2) ($3)")

// console.log(replaceStr)

//Look ahead ?= ?! negation look ahead
// let patt = /\w+(?= Id is)/ig
// let replaceStr = str.match(patt)

// console.log(replaceStr)

//Look behind ?<=  ?<! negation look behind
///(?<=lookBehindPattern)pattern/ this is the best interpretaion ofr it
let patt = /(?<=Id is )\d+/g
let replaceStr = str.match(patt)

console.log(replaceStr)

}

let text = '<div xmlns=\"http://www.w3.org/1999/xhtml\">Your football football> football*v football+ appointment has been reserved for 2023-56-29 10:00:00. Reference ID is a06876d5-d1e1-4d83-a0e9-6715a6e4cdcc. Appt Block Id is 0. Appt Encounter Id is 31101.</div>'


extract(text)
// var str = "Hello World! Hello once again!";
// var patt = /hello/ig;

// console.log(patt.test(str));
// console.log(patt.test(str));
// console.log(patt.test(str));

function addMulti (a, b){
    return function mult(n){
        return (a+ b) * n
    }
}

const add = addMulti(2, 4)
console.log(add(8))