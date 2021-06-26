// let btn=document.getElementById('btn');
// btn.addEventListener('click',func1)
// btn.addEventListener('mousedown',func3)
// btn.addEventListener('dblclick',func2)
// function func1(e){
//     console.log('Thanks',e);
//     e.preventDefault();//if dont write this after clicking button it will submit this and u need to prevent it from submitting. 
// }


// function func2(e){
//     console.log(`Thanks it's a double click`,e);
//     e.preventDefault();
// }
// function func3(e){
//     console.log(`Thanks it's a mouse down`,e);//whether u click with right or left or middle scroll it will implement
//     //unlike click or double click which requires left click
//     e.preventDefault();
// }


// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log('You entered no')
// })//when  u take your mouse to first class it will print consoled.


// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log('You leave no')
// })

document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY)
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetX},${e.offsetX})`
    console.log('You triggered the mouse over event')
})
