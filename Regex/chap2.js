//match()----> it will return an array of results or null
// const str="Kohli is the GOAT";
// const reg=/kohli/i;
// const result=str.match(reg)//---> this is right
// // const result=reg.match(str)-----> this is wrong syntax
// console.log(result)


//search()---> returns index of first match or -1
// const str="Kohli is the GOAT";
// const reg=/kohli/;
// const result=str.search(reg)//---> this is right
// // const result=reg.match(str)-----> this is wrong syntax
// console.log(result)


//replace()----> replaces the existing string with new string

// const string1="Messi is GOAT of Football";
const string1="Messi is GOAT of Football,Messi";
// const reg=/messi/;-----> if no global flag it will replace only first match
const reg=/Messi/g
const res=string1.replace(reg,"CR7");
console.log(res);