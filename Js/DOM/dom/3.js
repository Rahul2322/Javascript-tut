let cont=document.querySelector(".no");
cont=document.querySelector(".container")
console.log(cont.childNodes)//childnodes gives us everyting like text,comment ,newline
console.log(cont.children)//it gives only the main content mostly use this unless you are intersted in comment and text
let nodeName=cont.childNodes[0].nodeName;
nodeName=cont.childNodes[1].nodeName;
console.log(nodeName)
let nodeType=cont.childNodes[0].nodeType;
console.log(nodeType)


//NodeType
// 1.Element
// 2.Attributes
// 3.Textnode
// 8.comment
// 9.document
// 10.doctype


let container=document.querySelector(".container")
console.log(container.children[1].children[0].children)

// console.log(container.firstChild)//it gives last child of childnodes
// console.log(container.lastChild)//it gives last child of childnodes
// console.log(container.lastElementChild)
console.log(container.childElementCount)

console.log(container.firstElementChild.parentNode)
console.log(container.firstElementChild.nextSibling)//gives next childnodes
console.log(container.firstElementChild)
console.log(container.firstElementChild.nextElementSibling)
console.log(container.firstElementChild.nextElementSibling.nextElementSibling)


