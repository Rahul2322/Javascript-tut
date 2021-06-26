/* Function declarations are scanned and are made available.
variable declarations are scanned and are made undefined.


Exeution context
Exeution context
Exeution context
GLobalcontext*/


sayMyname(); // here the global contxt searches for the function name thoroughly it will not give an error 
             //  by seeing the function name before

function sayMyname(){
    console.log("The name is Rahul.");
};
//The name is Rahul.

console.log(name); // here js searches for name var finds it but stores as undefined, but if ill console again it will exec
var name="Rahul"
console.log(name);
//undefined

//This is code hoisting

tipper("15");
function tipper(a){
    var bill=parseInt(a);
    console.log(bill + 5);
};



// bigtipper("80");            // bigtipper is not a function/ bcoz its a var and when it searches down no bigtipfunc
// var bigtipper=function (a){
//     var  bill=parseInt(a);
//     console.log(bill+25);
// };



var bigtipper=function (a){ // this is hoisting which requires to put the code in correct method for var(as per def)
    var  bill=parseInt(a);
    console.log(bill+25);
};
bigtipper("80");



console.log(Name);
var Name="Nilesh";
      
function saymyname(){  //here the context its on it own(execution,execution,global like that) 
    var Name="Kohli"
    console.log(Name);
};
saymyname();
console.log(Name);
/*undefined
Kohli
Nilesh*/




