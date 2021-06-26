var num=[2,5,8,9,45,46,24];
// console.log(num.fill("R"));

// console.log(num.fill('R',2));

console.log(num.fill('R',2,5));

//array.fill(value,start,end)


var testarray=[2,4,8,15,45,25];
console.log(testarray.filter((num)=>(num!=45)));

var words=["Rahul","Nagesh","Nilesh","Ayush"];
console.log(words.filter((word)=>(word.length<6)));

//array.filter(callback)-->return new array if true



// var add=0;
// function sum(){
//     for(i=1;i<1000;i++)
//     {
//         if(i%3===0 || i%5===0){

//             add+=i;
//         }
//     }
// }sum();
// console.log(add)



// // // var add=[];
// // // function sum(){
// // //     for(i=1;i<1000;i++)
// // //     {
// // //         if(i%3===0 || i%5===0){

// // //             add.push(i);
// // //         }
// // //     }
// // // }sum();
// // // console.log(add.reduce((acc,cur)=>acc+cur));





// // var strMatchBy2char=function (a, b) {
// //     let res = 0;
// //     for (let i = 0; i < a.length; i++) {
// //         if (a.slice(i, i + 2) === b.slice(i, i + 2) )
// //         res += 1;
// //     }
// //     return res;
// // }
// // console.log(strMatchBy2char("yy", "yyjaaz"));