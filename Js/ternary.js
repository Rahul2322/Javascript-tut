var authenticated=false;
// if(authenticated){
//     console.log('LogIn')
// }else{
//     console.log("LogOut")
// }
// one way of writing conditonal checking is if else another way is ternary operaor 


// condition?true:false

authenticated?console.log("LogIn"):console.log("LogOut")


let like=100;
let yt={name:"Rohit",subscribers:1000000};
const rohit=(a,b)=>{
     a=200;
    console.log(a)
    b.subscribers=2000000;
    console.log(b)
};
console.log(rohit(like,yt));