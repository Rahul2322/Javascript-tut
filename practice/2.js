/*Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs
 from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers
, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this 
number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Examples:
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqtest(numbers) */



function arr1(numbers){
    var arr=numbers.split(' ');
   for(let i=0;i<arr.length-1;i++){
     if((arr[i+1]-arr[i])%2!=0){
       if((arr[i+2]-arr[i])%2==0){
         return (i+1) + 1;
       }else{
           return i+1
       
       }
     }
   }
   }
   console.log(arr1('2 4 7 8 10'))
   console.log(arr1('1 2 1 1 1 1'))
   console.log(arr1('3 5 7 10 11'))
   console.log(arr1('4 5 7 9 11'))
   console.log(arr1('3 5 7 9 12'))
//mine is wrong
function iqTest(numbers) {
    numbers = numbers.split(" ");
    var parity = numbers.shift() % 2;
    for( var i=0; i<numbers.length; i++) {
        if( numbers[i] % 2 != parity) {
            return i+2; // 1-based, but we've also skipped the first
        }
    }
    return 0; // no number broke the pattern
}
console.log(iqTest('3 5 7 9 12'))
console.log(arr1('2 4 7 8 10'))



function iqTest(numbers) {
    var num = numbers.split(" ");
    var odd = 0;
    var even = 0;
    var positionOdd = 0;
    var positionEven = 0;
    for(var i = 0; i < num.length; i++) {
       if(num[i]%2!==0) {
       odd++;
       if(odd===1) {
       positionOdd = i + 1;
         }
       }
       else if(num[i]%2===0) {
       even++;
       if(even===1) {
       positionEven = i + 1;
        }
      }
    }
    if (odd == 1)
       return positionOdd;
    else if (even == 1)
       return positionEven;
    else
       return -1;
   }
   

//You have to define which "evenness" is the different one. Use different counters for the two cases, and return -1 if 
//you don't have a single different one. Something like this


//remove duplicates
var arr = ["apple", "bannana", "orange", "apple", "orange"];
console.log(arr.indexOf('apple',1))

arr = arr.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });//index of apples will always give 1 so when it goes to index 4 indexof('apple')!==4


    function removeDuplicates(text) {
        var seen = {};
        var result = '';
    
        for (var i = 0; i < text.length; i++) {
            var char = text.charAt(i);
    
            if (char in seen) {
                continue;
            } else {
                seen[char] = true;
                result += char;
              console.log(seen)
              
            }
        }
    
        return result;
        
    }console.log(removeDuplicates('abcdacvb'))
