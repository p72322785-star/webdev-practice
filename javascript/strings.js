//types of string initialization 

let string1="priya"
let string2 =new String("eyes")

console.log( typeof string1)
console.log(typeof string2)


console.log(string1.includes("pr"))// check whether the part of string in consist in string1 or not and return boolean value accordingly

//conversion of text

console.log(string1.toUpperCase())//only print but doesnt change string1
console.log(string1)

//replace method 

let url="https://tinyurl.com/"
console.log(url.replace("/","_"))

//slice method

console.log(string2.slice(2,4))

// literals

const userName="priya"
const repoCount=20

console.log("my name is :"+userName)

console.log(`"my name is : ${userName} and my repo count:${repoCount}`)//using string template




