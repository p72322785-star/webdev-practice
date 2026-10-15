/*console.log(Math.floor(4.5))
console.log(Math.ceil(4.5))


console.log(Math.sqrt(4))
console.log(Math.cbrt(27))
console.log(Math.round(4.6))
console.log(Math.round(4.1))

let pi=Math.PI
console.log(pi)

console.log(Math.min(3,4,6,1))
console.log(Math.max(3,4,6,1))

console.log(Math.floor(Math.random()*10)+1)
// explicit type casting
//NaN ------not a number { if we convert string character in number}

let s="hello"
console.log(s)
console.log(typeof s)

let n=Number(s)
console.log(n)
console.log(typeof n)

let m="23"
console.log(m)
console.log(typeof m)

let p=Number(m)
console.log(p)
console.log(typeof p)

let c=null
console.log(c)
console.log(typeof c)

let w=Number(c)
console.log(w)
console.log(typeof w)


let x=undefined
let st=String(x)
console.log(st)
console.log(typeof st)

//implicit type  casting

let a=100
let b="20"
console.log(a+b)//10020
console.log(a-b)//80
console.log(a*b)//2000
console.log(a/b)//5 
//leap year------conditionals ----if else


let year=2025
if(year%4==0 && year%100!=0 || year%400==0 ){
  console.log("leap year")
}else{
  console.log("not a leap year")
}

//--------switch case----
let x=6
switch(x){
  case 1:
    console.log("monday")
    break
     case 2:
    console.log("tues")
    break
     case 3:
    console.log("wed")
    break
     case 4:
    console.log("thu")
    break
     case 5:
    console.log("fri")
    break
     case 6:
    console.log("sat")
    break
     case 7:
    console.log("sunday")
    break
  default:
    console.log("not valid")

}

// loops----for----


let val=1
let flag=false
if(val<2){
  console.log("not prime")
}
for(let i=2;i<val/2;i++){//time complexity for ths is 0(n/2) can say 0(n) whole
  if(val%i==0){
    flag=1
    break
  }
}

if(flag==0){
  console.log("prime")
}
else{
  console.log("not prime")
}
*/
