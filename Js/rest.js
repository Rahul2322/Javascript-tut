//Note the difference between parameters and arguments: Function parameters are the names listed in the function's 
// definition. Function arguments are the real values passed to the function. 
// Parameters are initialized to the values of the arguments supplied.


/*The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing
 a way to represent variadic functions in JavaScript.
*/
function sum(...inputs){///triple dots to get multiple inputs
    console.log(inputs)//will give an array
    console.log(...inputs)//will give without array
    var total=0;
    for(let i of inputs){
      
        total+=i;
        
    }
    console.log(total)
}
sum(1,2,3,4,5,6)



function fun(a,b,...rest){
    console.log(`${a} and ${b}`)
    console.log(rest);
    console.log(rest[0]);
    console.log(rest.length);
    console.log(rest.indexOf('Bale'));
};
fun("Messi","Neymar","Suarez","Ronaldo","Benzema","Bale");