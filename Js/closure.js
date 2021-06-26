/*1. A closure is a combination of  function and lexical environment within which that function was declared
2.Closure in action that is inner function can have access to outer function variable/parameters as well all the global 
variables
3.THe return statement does not execute the inner function -function is executed only when followed by(),but rather the
return statement returns the entire body of the function.
   */



//    const outerfunc=(a)=>{
//        let b=10;
//        const innerfunc=()=>{
//            let sum=a+b;
//            console.log(`The sum is ${sum}`);
//        }
//        innerfunc();
//    }
// outerfunc(15);






const outerfunc=(a)=>{
    let b=10;
    const innerfunc=()=>{
        let sum=a+b;
        console.log(`The sum is ${sum}`);
    }
    return innerfunc;
}

let inner=outerfunc(5);//or let inner=outerfunc(5)()-->directly calling here both outer&inner
// console.dir(inner);
/*In other words, console.dir() is the way to see all the properties of a specified JavaScript object in console by
which the developer can easily get the properties of the object. */

// Here the outer func is executing and completes but the return  referene holds the memory of outerfun and when its called
// it holds the scoping of parent func and executes the inner function
inner()



function doAddition(x){
    return function(y){
        return x+y
    }
};
var add=doAddition(4);
console.log(add(5));

console.log(doAddition(5)(5))
