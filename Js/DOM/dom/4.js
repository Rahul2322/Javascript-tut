let element=document.createElement("li");
let text=document.createTextNode("I am a text node");
element.appendChild(text);
element.className="childul";
element.id="created li";
element.setAttribute("title","My title")
// console.log(element)


let ul=document.querySelector("ul.this")
ul.appendChild(element)
// console.log(ul)
// console.log(element)


let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
let tnode=document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2);

let myul=document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'))//replacing this by I am a node
myul.removeChild(document.getElementById('lui'))

let pr=elem2.getAttribute('id');
//  elem2.getAttribute('class');
//  elem2.hasAttribute('class');
 elem2.removeAttribute('id');
console.log(elem2,pr);
elem2.setAttribute('title','mytitle')
console.log(elem2,pr);  

