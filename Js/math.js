//sign
let num=5.55;
let num1=-5.55;
let num0=0
let nums=-0
let one=NaN
let ones='NaN'
console.log(Math.sign(num));//1
console.log(Math.sign(num1));//-1
console.log(Math.sign(num0));//0
console.log(Math.sign(nums));//-0
console.log(Math.sign(one));//NaN
console.log(Math.sign(ones));//NaN


console.log(Math.trunc(num));//5
console.log(Math.floor(num));//5
console.log(Math.trunc(num1));//-5
console.log(Math.floor(num1));//-6
//only diff between trunc and floor.Floor will give  a lower value in case of negative while trunc will give the same num