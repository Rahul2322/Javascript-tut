//btn with id mybtn
let btn=document.getElementById('myBtn');
//div with id content
let content=document.getElementById('content');

// function getData(){
//     console.log('Started getting data')
//     url="harry.txt";
//     fetch(url)
//     .then((response)=>{
//         console.log('Inside first then');
//         return response.text()
//     })
//     .then((data)=>{
//         console.log('Inside second then');
//         console.log(data)
//     })
// }
// console.log('before running get data')
// getData();
// console.log('after running get data')

// function getData(){
    
//     url="https://api.github.com/users";
//     fetch(url)
//     .then((response)=>{
//         return response.json()
//     })
//     .then((data)=>{
//         console.log(data)
//     })
// }
// getData();



function postData(){
    
    url="http://dummy.restapiexample.com/api/v1/create";
    data='{"name":"rahul345686154","salary":"123","age":"23"}';
    params={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:data
    }
    fetch(url,params)
    .then(response=> response.json())
    .then(data=>console.log(data))
}
postData();
    