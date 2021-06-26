/* falsey values
null
undefined
0
""
NaN */
// var user=null;   // false value 
// if(user){
//     console.log("The condition is true")
// };

// var user="null";   // True value 
// if(user){
//     console.log("The condition is true")
// };



// var user="2";   // True value 
// if(2==user){
//     console.log("The condition is true")
// };



var user="2";   // false value ---> always check for strict equality
if(2===user){
    console.log("The condition is true")
}else{
    console.log("The condition is false")
};


