//square every digit
function squareDigit(num){
    return Number((''+num).split('').map(val=>val*val).join(''))
}
console.log(squareDigit(9119))

//refactored code means more readable and short and easy code
sd=x=>+`${x}`.replace(/./g,a=>a*a)
console.log(sd(9119))

sd=x=>+[...""+x].map(a=>a*a).join``;
console.log(sd(9119))