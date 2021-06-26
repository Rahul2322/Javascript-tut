// var mystates=["Maharashtra",
//               "Punjab",
//             "Kerala",
//         "Karnataka",
//     "Assam"];
//     for(let i=0;i<mystates.length;i++){
//     console.log(i)      
//     }

//     //here iam just printing the index which is wrong


//     var mystates=["Maharashtra",
//               "Punjab",
//             "Kerala",
//         "Karnataka",
//     "Assam"];
//     for(let i=0;i<mystates.length;i++){
//     console.log(mystates[i]) ;     
//     }


//     var mystates=["Maharashtra",
//     "Punjab",
//   "Kerala",
// "Karnataka",
// "Assam"];
// for(let i=0;i<=mystates.length;i++){
// console.log(mystates[i]) ;     
// }
/*Maharashtra
Punjab
Kerala
Karnataka
Assam
undefined*/ //since i=length it goes one more round and finds nothing





// var mystates=["Maharashtra",
// "Punjab",
// "Kerala",
// "Karnataka",
// 1947,
// "Assam"];
// for(let i=0;i<mystates.length;i++){
//     if(typeof mystates[i]!=="string"){continue
//         ;}
//         console.log(mystates[i]) ;     

//     };//continue basically tells to keep on going even after 1947 which is not string as per if condition



// var mystates=["Maharashtra",
// "Punjab",
// "Kerala",
// "Karnataka",
// 1947,
// "Assam"];
// for(let i=0;i<mystates.length;i++){
//     if(typeof mystates[i]==="string")continue;
// console.log(mystates[i]) ;     
// }
    

// var mystates=["Maharashtra",
// "Punjab",
// "Kerala",
// "Karnataka",
// 149,
// "Assam"];
// for(let i=0;i<mystates.length;i++){
//     if(typeof mystates[i]!=="string")break;//break will come out of loop if the condition matches
// console.log(mystates[i]) ;     
// }


// var states = [
//     "Bihar",
//     "UP","MP","Maharastra",300,"Tamil Nadu","AP"];
    
//     for (let i = 0; i < states.length; i++) {
//          if(typeof states[i] === 'number')
         
//         console.log(states[i]); 
        
//     }
    
    let str="I am Rahul";
    let newStr="" ;
    for(let i=str.length-1;i>=str.length-6;i--){
        newStr+=str[i]
          
    };
    console.log(str.slice(0,str.length-6)+' '+newStr)
 
       
let left={w:4,p:3,b:2,s:1};
let right={m:4,q:3,d:2,z:1};
let sumright=0;
let sumleft=0;
function alphabetwars(fight){
  for( i in fight){
    if(left[fight[i]]){ sumleft+=left[fight[i]]}
    if(right[fight[i]]){ sumright+=right[fight[i]]}
  }
  if(sumleft>sumright){return "leftwins"}
  if(sumleft<sumright){return "rightwins"}

   return "Let's Fight Again"
}
console.log(alphabetwars("dwwwwzmz"))
 

function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}