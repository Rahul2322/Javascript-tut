/*https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff

Call Stack: Within the call stack, your JS code is read and gets executed line by line. Now, JavaScript is a 
single-threaded language, which means it has only one call stack that is used to execute the program. ...
 In this way, JavaScript is a single-thread language because of only one call stack.
*/






/*Normally, a given program's code runs straight along, with only one thing happening at once. If a function relies
 on the result of another function, it has to wait for the other function to finish and return, and until that happens,
  the entire program is essentially stopped from the perspective of the user.
  Normally, a given program's code runs straight along, with only one thing happening at once. If a function relies on 
  the result of another function, it has to wait for the other function to finish and return, and until that happens, 
  the entire program is essentially stopped from the perspective of the user.
//  */
// for (let index = 0; index < 40000; index++) {
//     console.log (index)//first this will execute and then 
    
// }
// console.log("I am waiting")//this


setTimeout(()=>{for (let index = 0; index < 40000; index++) {
    console.log (index)
    
}},100)
console.log("I am waiting")