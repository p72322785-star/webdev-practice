// arrays are resixeable and can contain heterogenous data type elements
// array methods
const arr=[10,20,"priya",true]

arr.push(45)//insert in last
arr.unshift(false)//insert in starting 

const arr1=arr.slice(1,3)//[10,20]//not change original array
console.log(arr1)
console.log(arr)

const arr2=arr.splice(1,3)// original array is modified and arr2 elements are noot present in array original
console.log(arr2)



console.log(arr)
console.log(typeof arr)//object
console.log(typeof null)//object