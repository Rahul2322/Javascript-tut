var sum=()=>{
    let a=5;
    let b=15;
    return a+b;
};
console.log(sum());

// let c=35;
// let d=25;
// // var add=()=>{return c+d}
// var add=()=>(c+d)//to remove return
// console.log(add())

var add=(c,d)=>(c+d)
console.log(add(20,48))