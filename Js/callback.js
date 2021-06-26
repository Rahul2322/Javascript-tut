// function isEven(ele){
//     if(ele%2===0){
//         return true;
//     }
//     else
//     {
//         return false
//     }
// }console.log(isEven(4));


// function isEven(ele){
//     {
//         return ele%2===0;
//     }
    
//     }console.log(isEven(5));



// var isEven= (ele)=>{   //arrow method
//   return ele%2===0;                    //if u remove return it will return undefined
// };
// console.log(isEven(6))



// var array=[2,4,6,8].every(isEven)  //every is a callback function which is calling fun iseven
//                                    //every looks for every single element and gives combined result[2,3,6] is false
// console.log(array);


// var array=[10,12,14,16].every((ele)=>{   //when u  return the syntax is like this every(()=>{})
// return ele%2===0;
// });
// console.log(array);


// var arrays=[3,6,9,12].every((ele)=>ele%3===0) //when u remove return the syntax is like this every(()=>())
// console.log(arrays);



//pretend this response is coming from server
// const students=[
//     {name:'harry',sub:'Js'},
//     {name:'Rahul',sub:'Python'}
// ]

// function enrollstudent(student){    
//     setTimeout(function(){
//         students.push(student);
//         console.log('Students have been enrolled')
//     },8000)

// }

// function getStudents(){
//     setTimeout(function(){
//         let str='';
//         students.forEach(function(student){
//             str+=`<li>${student.name}</li>`
//         });
//         document.getElementById('student').innerHTML=str;
//         console.log('Students have been fetched')

//     },1000)
// }
// let newstudent={name:'Potter',sub:'C++'};
// enrollstudent(newstudent);
// getStudents();
//here the diff is that only rahul and harry will be added bcoz getstudent fun is executed and then enrollstudent adds potter


const students=[
    {name:'harry',sub:'Js'},
    {name:'Rahul',sub:'Python'}
]

function enrollstudent(student,callback){    
    setTimeout(function(){
        students.push(student);
        console.log('Students have been enrolled');
        callback();
    },8000)

}

function getStudents(){
    setTimeout(function(){
        let str='';
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`
        });
        document.getElementById('student').innerHTML=str;
        console.log('Students have been fetched')

    },1000)
}
let newstudent={name:'Potter',sub:'C++'};
enrollstudent(newstudent,getStudents);


