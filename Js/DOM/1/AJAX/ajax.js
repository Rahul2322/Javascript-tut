let fetchbtn=document.getElementById('fetchbtn');
fetchbtn.addEventListener('click',buttonClickHandler);
function buttonClickHandler(){
    let xhr=new XMLHttpRequest();

    // xhr.open('GET','harry.txt',true);
    xhr.open('POST','https://jsonplaceholder.typicode.com/posts',true);
    xhr.getResponseHeader('Content-type','json')

    xhr.onload=function(){
        if(this.status===200){
        console.log(this.responseText)
    }else
    {
        console.log('Some error occurred')
    }
}
   params= `{title: 'foo',
   body: 'bar',
   userId: 1}` 
    // xhr.send();
    xhr.send(params);
}
