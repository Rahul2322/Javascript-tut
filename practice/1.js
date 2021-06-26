var count=[]
function countTrue(arr){
  for(i=0;i<arr.length;i++){
    if(arr[i]===true){
      count.push(arr[i]);
                 }
  }
}
countTrue([true, false, false, true, false]);
console.log(count.length);

      
// Create a function which returns the number of true values there are in an array.

// Examples

// countTrue([true, false, false, true, false]) ➞ 2

function avg(a,b,c){
  let sum=(a+b+c)/3;
  if(90<=sum<=100){
    return 'A';
  }
    else if(80<=sum<=90){
      return 'B';
    }
    else if(70<=sum<=80){
     return 'C';
    }
    else if(60<=sum<=70){
      return 'D';
    }
    else if (0<=sum<=60){
      return 'F'
    }
   
    

};
console.log(avg(0,0,60));



function getGrade (s1, s2, s3) {
  var avg = (s1 + s2 + s3)/3;
  switch(true) {
    case (avg >= 90):
      return 'A';
    case ( avg >= 80):
      return 'B';
    case ( avg >= 70):
      return 'C';
    case ( avg >= 60):
      return 'D'; 
    default:
      return 'F';   
  }
 }

 function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if(avg<60) return'F';
  else if(avg < 70) return 'D';
  else if(avg < 80) return 'C';
  else if(avg < 90) return 'B';
  else return 'A';
 }