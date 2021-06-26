
/*Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where 
zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression 
to be expanded in places where zero or more key-value pairs (for object literals) are expected. */


//replace apply
function sum(a,b,c){
    console.log(a+b+c);
}
// sum(1,2,3)
var arrVal=[1,2,3];
console.log(...arrVal)
sum.apply(null,arrVal)

sum(...arrVal);

//replace concat
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[7,8,9];
// arr1=arr1.concat(arr2);
// console.log(arr1);
arr1=[...arr1,...arr2,...arr3]
console.log(arr1);


//replace copy
let arrc1=[1,2,3];
// let arrc2=arrc1;
// console.log(arrc1);
// //if want to add then
// arrc2.push(4,5);
// console.log(arrc2)
// console.log(arrc1)//but it will change the arrc1 also because of reference data type

// spread operator prevents from changing the reference object
let arrc3=[10,11,12];
let arrc2=[...arrc1,4,5,...arrc3,13,14];

console.log(arrc2);
console.log(arrc1);