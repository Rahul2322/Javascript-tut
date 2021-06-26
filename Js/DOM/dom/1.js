console.log("Welcome")
let a=document;
a=document.a11;
a=document.body
a=document.forms;
Array.from(a).forEach(function(ele){
    console.log(ele)
})
a=document.links[0].href;
console.log(a)



var str=document.links;
var ilinks='you'
for(i=0;i<str.length;i++){
    if(str[i].href.includes(ilinks)){
        console.log(str[i].href)
    }
}



