/*Single element selector
Multiple element selector*/
let element=document.getElementById('Myfirst');
// element=element.className
// element=element.childNodes;
// element=element.parentNode;
element.style.color="red"
element.innerText="It's me"
element.innerHTML="<b>It's me</b>"
// console.log(element)



let sel=document.querySelector("#Myfirst");
sel=document.querySelector(".child");
sel=document.querySelector('div')
sel=document.querySelector('h1')
// console.log(sel)


//Multiple selector
let elems=document.getElementsByClassName('child');
elems=document.getElementsByClassName('container')
elems=document.getElementsByTagName('div')

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//     element.style.color="blue";
    
// }
Array.from(elems).forEach(function(ele){
    console.log(ele)
    ele.style.color="blue"
})
console.log(elems)