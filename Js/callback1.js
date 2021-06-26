/* "Function is a first class citizens"
1. In javascript we can assign a function to a variable
2.Pass a function as an argument
3.Returning functions*/

//"callback Function-Any function that is passed as an argument is called as callback function. "
//A callback is a function that is to be executed after another function has finished executing-hence the name "callback"


// const funA=()=>{
//     console.log(`Welcome funA`);
// };

// const funB=()=>{
//     console.log(`Welcome funB`);
// };
// funA();
// funB();
// //in this first A & then B will execute



// const funC=()=>{
//     setTimeout(funC,3000);
//      console.log(`Welcome funC`);
// };



// // const funC=()=>{
// //     setTimeout(function(){
// //         console.log(`Welcome funC`)//another way of writing
// // },3000);

// // };


// const funD=()=>{
//     console.log(`Welcome funD`);
// // };
// // funC();
// funD();

//Here the funC will execute 3s after so js will execute the other fun available within this time which we sometime dont want
//Js is an event driven language,that means instead of waiting for response  before moving on,javascript will keep executing
//while listening for other events.

//callbacks are way to make sure certain code doesnt execute untill the other code has already finished execution.

const perOne=(friend,callback)=>{
    console.log(`I am busy right now ${friend},I will call you back.`);
    callback();//after consoling iam..... ,calling the func callback
}
const perTwo=()=>{
    console.log(`Hey what's up.`);

}
perOne("Rahul",perTwo);
//Note:when i wrote perOne("Rahul",perTwo()) and removed callback() then pertwo executed first then perone

