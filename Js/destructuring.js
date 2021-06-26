//Destructuring-The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values 

//from arrays, or properties from objects, into distinct variables.

let letters=["a","b","c","d"];
// let first=letters[0];
// let second=letters[1];
// let third=letters[2];
// let fourth=letters[3];


// let[first,second,third,fourth]=letters;
// console.log(`${first},${fourth}`)

//if i just want 1 and last then
let[first,,,fourth]=letters;

console.log(`${first},${fourth}`)

//program to swap 2 numbers
let a=5;
let b=10;
// let temp=a;
// a=b;
// b=temp;

 [a,b]=[b,a];
console.log(a);
console.log(b);



let biodata={name:"Rahul",age:27,deg:"BE Mech",hobb:{fir:"Cricket",sec:"Football"}}


// let name,age,deg; ----> another way of writing
// ({name,age,deg}=biodata)----> in parenthesis otherwise will give error

// let {name,age,deg}=biodata;
// console.log(`My name is ${name} and age is ${age} having qualification ${deg}`);



//if want diff name then
// let {name:myname,age:ages,deg:mydeg,hobb}=biodata;
// console.log(`My name is ${myname} and age is ${ages} having qualification ${mydeg} and fav hobby is ${hobb.sec}`);



//Note in object destructuring sequence doesnt matter like in array

let {deg,age,name}=biodata;
console.log(`My name is ${name} and age is ${age} having qualification ${deg} `);