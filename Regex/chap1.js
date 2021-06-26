//exec() function
// let str="Rahul is a common name";
// let regex=/rahul/;
// let result=regex.exec(str);
// console.log(result)
// //exec function gives the array of first desired search result and returns null if it doesnt matches

// let regex1=/rahul/i;   // i means case insensitive R=r
// let result2=regex1.exec(str)
// console.log(result2);


// let str="rahul is a common name,rahul ";
// let regex=/rahul/g; //global means it will keep searching for rahul and return its index as u wil keep running until null
// let result=regex.exec(str);
// console.log(result);
// result=regex.exec(str)
// console.log(result);
// console.log(regex.source);//source tells us what is inside regex search


//test()-----> return boolean value
const str1="rahul is a common name,rahul "
const str2="raully is a common name "// it returned true on rahully bcoz it matches with rahul
const reg=/rahul/;
const result2=reg.test(str1);
const result3=reg.test(str2);
console.log(result2);
console.log(result3);