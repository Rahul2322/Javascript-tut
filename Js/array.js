var countries=["India","USA","Japan","Spain"]
console.log(countries[2]);
console.log(countries.length);
countries[1]="Malaysia"
console.log(countries);
countries.pop();
countries.pop();
console.log(countries);



var user=["Rahul","Rahul23@gmail.com",5,24];
user.unshift("New value");
console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf(5));

console.log(Array.from("Rahul"));



/*Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and 
the sum of all digits to the right of the middle digit(s) are *equal**.
Notes
If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

Number passed is always Positive .

Return the result as String

*/
function balancedNum(number)
{
      if(number.length%2===0){
        var a=number.slice(0,number.length/2-1);
          var add=a.reduce((c,d)=>(c+d));
        var b=number.slice(number.length/2+1,number.length);
            var sum=b.reduce((e,f)=>(e+f));
                             if( add== sum){
              return "Balanced"
                             }
                             else{
                                 return "Not Balanced"
                             }
                            }
                             
        
         else if (number.length%2!==0){
          var a=number.slice(0,((number.length+1)/2)-1);
          var add=a.reduce((c,d)=>(c+d));
          var b=number.slice((number.length+1)/2,number.length);
          var sum=b.reduce((e,f)=>(e+f));
                              if(add== sum){
              return "Balanced"

            }
        else{
            return "Not Balanced"

            };
      };
    }
  console.log(balancedNum([2,4,5,5,5,1,5]));
  //how i solved as array which is wrong.


  function balancedNum(number) {
    let numstr = number.toString();
    let leftside = "";
    let rightside = "";
    if (numstr.length/2 < 1 || numstr.length === 2) { 
      return "Balanced";
    }
    if (numstr.length % 2 === 0) {
      leftside = numstr.slice(0,numstr.length/2-1);
    } else {
      leftside = numstr.slice(0,numstr.length/2);
    }
    rightside = numstr.slice(numstr.length/2+1);
    
    let lefttotal = leftside.split("").reduce((a,b)=>parseInt(a)+parseInt(b));
    let righttotal = rightside.split("").reduce((a,b)=>parseInt(a)+parseInt(b));
    return (lefttotal === righttotal) ? "Balanced" : "Not Balanced";
}

function balancedNum(number){
    let i, result = 0;
    number = number + "";
    for(i = 0; i < number.length / 2 - 1; i++){
        result += +number[i] - +number[number.length - 1 - i];
    }
    return result === 0 ? "Balanced" : "Not Balanced";
}

 
function balancedNum(number) {

    let str = `${number}`
    ,   len = (str.length - (str.length % 2 ? -1 : -2)) / 2
    ,   sum = digits => [ ...digits ].reduce((a, b) => a + +b, 0);
  
    return sum(str.slice(0, len)) === sum(str.slice(-len)) 
    ? 'Balanced' 
    : 'Not Balanced';
  
  }
//how someone else solved