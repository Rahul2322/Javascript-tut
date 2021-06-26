/*Primitve data types-they have value
1.string,boolean,number,undefined,null,symbol*/
let a=1;
let b="string"
let c=""
let d;
let e=true;
// let f=   //--->will give an error
let g=null //Note:type of null will give an object although its a primitive data type
console.log(typeof(a));//number
console.log(typeof(b));//string
console.log(typeof(c));//string
console.log(typeof(d));//undefined
console.log(typeof(e));//boolean
console.log(typeof(f));//error
/*Non primitive data types or Reference data types-they have reference
object(array,function,object,null,date)
*/
//Note:typeof(funcion) is a function not object but function is an object
const check=()=>{
    console.log("checking")
};
check.letshavefun="I am an object too!"//this . method is used for object
console.log(check.letshavefun);//it will run


//pass by value-We only pass the value (copy) and they will have independent memory
let a=10;
let b=a;
console.log(a);
console.log(b);
b=b+10;
console.log(a);
console.log(b);
//only b will be updated

//pass by reference-copy the value but change in one changes the reference.Have reference to same memory type .
let obj1={name:"abc",job:"nalla"};
let obj2=obj1;
obj2.job="mil gyi nayi";
console.log(obj1);
console.log(obj2);

//If want to affect only one
let arr1=[1,2,3,4];
let arr2=[].concat(arr1);
arr2.push(5);
console.log(arr1);
console.log(arr2);

let like=100;
let yt={name:"Rohit",subscribers:1000000};
const rohit=(a,b)=>{
    a=200;
    console.log(a)
    b.subscribers=2000000
};
// a will have scopecontext 
rohit(like,yt);//this will have global context
console.log(like);
console.log(yt.subscribers);


const fullName= "Rahul singh"
var email="singhraul23@gmail"
var password=1234
var country="India"
var state="Maharashtra"
var isloggedinfromgoogle=false
console.log(`UserName is:${fullName}
Emailid:${email}
IsloogedInfromGoogle:${isloggedinfromgoogle}
`)
// we use backward tick and not single quotes to add multiple statements for console and dollar sign is to take the vriable 


//Data types
console.log(10+"str");//10str
console.log(9-"5");//4-->bug
console.log(""+"");//
console.log(""+0);//0
console.log("abc"-"def");//Nan
console.log(true + true);//2  
console.log(false + true);//1
console.log(false - true);//-1

console.log(typeof(null))// object
console.log(typeof(undefined))// undefined
console.log(typeof(NaN))// number


console.log(NaN===NaN);//false
console.log(Number.NaN===NaN);//false
console.log(isNaN(NaN));//true
console.log(isNaN(Number.NaN));//true
console.log(Number.isNaN(NaN));//true


//operator:x++,++x
//if used postfix,with operator after operand(for ex,x++)
//the increment operator increments and returns

