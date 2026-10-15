//scopes --functional,block,global

//global scope ---
/*
let a=10
const b=20
var c=30

console.log(a)
console.log(b)
console.log(c)

//functional scope ---

if(true){
let a=10
const b=20
var c=30
}
console.log(a)//error
console.log(b)//error
console.log(c)//but it prints 30 -----cozzz var is a global scope 


// second case //let and const are block scopes 

function fn(){
    if(true){
        let a=10
        const b=20
        var c=30
}
console.log(a)// a is not defined and hance give error coz it is a block scope 
console.log(b)
}
fn();
console.log(c)//not run coz outside the function but if i put it inside like a and b then it will print 30
*/
// reson why var is not used widely coz if-----
//  we intitiate value first then it will not be changed ----
// but in addtocart again var will amke that value different which will coz issues

function fn(){
    var price=10;
    function addtocart(){
        var price=20;
    }

    if(true){
        let a=10
        const b=20
        var c=30
        var price=50

}
console.log("price",price)// price is changed to 50 which is not ethical to happen 

}
fn();

