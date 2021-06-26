let str="rahul is an awesome guy and rahul is well mannered"
let regex=/rahl/;
let res=regex.exec(str)
// // if (regex.test(str)){
// //     console.log(`The string ${str} matches  the expression ${regex}`);//---> use regex.source to get only string and not/rahul/
// // }
// // else{
// //     console.log(`The string ${str} does not matches  the expression ${regex.source}`);
// // }

// //Metacharacter symbols 
// //1. ^(charat) expression will match if string "starts" with
 str="messi is messi";  
// //  regex=/^me/
// //  regex=/^mess/
// //  regex=/^messiy/  //---> it wil not match
// //  res=regex.exec(str);
// //  console.log(res);

//  //2.$(dollar)  expression will match if string "ends" with
// //  regex=/si$/
// //  regex=/ti/
// //  res=regex.exec(str);
// //  console.log(res);

//  //3. .(dot) means contains one character
//  str="meassi is meassi";
//  str="meassi is meassi";
//  regex=/m.ssi/;
//  res=regex.exec(str);
//  if (regex.test(str)){
//     console.log(`The string ${str} matches  the expression ${regex.source}`);//---> use regex.source to get only string and not/rahul/
// }
// else{
//     console.log(`The string ${str} does not matches  the expression ${regex.source}`);
// }

// //4.* matches 0 or more character


// str="meeeeessi";
// str="mssi";
// regex=/m*ssi/;
//  res=regex.exec(str);
//  if (regex.test(str)){
//     console.log(`The string ${str} matches  the expression ${regex.source}`);//---> use regex.source to get only string and not/rahul/
// }
// else{
//     console.log(`The string ${str} does not matches  the expression ${regex.source}`);
// }

// 5. ?(optional)   ?mark after char means that char is optional 

str="mssit"; // missing e matches bcoz e is optional so will be if u remove i
regex=/me?ssi?/;
str="mssjt"
regex=/me?ssi?t/; //here after optional i have t char but str is having j so not match
 res=regex.exec(str);
 if (regex.test(str)){
    console.log(`The string ${str} matches  the expression ${regex.source}`);//---> use regex.source to get only string and not/rahul/
}
else{
    console.log(`The string ${str} does not matches  the expression ${regex.source}`);
}

//6.
let stan="H*rry potter";
let regular=/H\*rry/;  // use backlash otherwise it will consider it as (*)metachar fnct
let results=regular.exec(stan);
if (regular.test(stan)){
    console.log(`The string ${stan} matches  the expression ${regular.source}`);//---> use regex.source to get only string and not/rahul/
}
else{
    console.log(`The string ${stan} does not matches  the expression ${regular.source}`);
}





