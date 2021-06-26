//strict mode-helps us in identifying the error or false practice which we do like not defying var,passig 2 parameter of same name

// function sum(a,b){
//     add=a+b;
//     console.log(add);
// };
// sum(10,10)

"use strict"
// function sum(a,a){
//     add=a+b;
//     console.log(add);
// };
// sum(10,10)
//ReferenceError: add is not defined

function sum(a,b){
        var add=a+b;
        console.log(add);
    };
    sum(10,10);