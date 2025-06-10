/*
we are prefer to use var we use let and const
*/
"use strict";// treat all js code new version 
//alert(3+3);
console.log(3 + 3);
let name = "Adesh Kumar"  //String
let age = 18   // integer
let isLoggedIn = false // boolean 
//null standalone value
//undefined -  not assign
// Symbol - unique
 //these all are primitive datatypes 

 //Nonpremitve 
 // objects 
 console.log(typeof age);
 

 //Type Conversion 
 let score = "33"
 console.log(typeof (score))
 let valInt=Number(score)
 console.log(valInt)
 let val=1
 let boolval=Boolean(val)
 console.log(boolval)
 let strval=String(val)
 console.log(typeof(strval))
 let str1="Adesh"
 let str2=" Kumar"
 let str3=str1+str2
 console.log(str3)
console.log(2 + 3 + "5")



//primitive datatypes 
//when we are use it then every time we are using copy of original 
//it total have 7 types 
//Number,String,Boolean,null, Undefined,etc.
// Non primitive 
//which allocation to access address
//ex- array, object , function ,struct 




//Symbol datatypes
const id=Symbol(123)

const id2=Symbol(123)
//Symbol datatypes means Unique 
console.log(id==id2);


//Array, function and objects 
const heros=["A", "B", "C"];//array
let myObj={
    name: "Adesh",
    age: 20,
}//objects 
const myFunction=function(){
    console.log("Hellow World");
}
console.log(heros);
console.log(myObj);
myFunction();
console.log(typeof(myObj));
console.log(typeof(heros));
console.log(typeof(myFunction));


