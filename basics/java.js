"use strict ";
console.log("venky");
let x = null;
let name = "Tammy";
const found = false;

// => Tammy, false, null
console.log(name, found, x);

var a;
console.log(a); // => undefined
var c=30;
console.warn(c)
let k = "32abc"
let ch = parseInt(k)
let chs = Boolean(k)
console.log(chs)
let s = Number(k)
console.log(s)
console.warn(ch)
console.log(+true)
console.log(+false)
let mov = "tun tun"
let com = mov
com ="chutki"
console.log(mov)
let z = {
    ki : "hi",
    woman:"bye"
}
let ans = z
z.ki ="ta ta "
console.log(ans.ki)
let so = Math.max(3,5,45,2)
console.log(Math)
let max =20
let min =10
/*to print random numbers between min and max the formula is console.log((Math.floor(Math.random)*(max-min+1))+min)    */
console.log(Math.floor((Math.random()*(max-min)+1)+min))