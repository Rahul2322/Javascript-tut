console.log("Ajax in one")

// let fetchbtn = document.getElementById("fetchbtn");
// fetchbtn.addEventListener("click", buttonClickHandler);
// function buttonClickHandler() {
//     console.log('You have clicked fetchbtn')
//     //instantiate an xhr object
//     const xhr = new XMLHttpRequest();


//     //open the obj
//     //  xhr.open('GET','harry.txt',true);

//     //POST request
//     xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true)
//     xhr.getResponseHeader('content-type', 'application/json')

//     //what to do on progress

//     xhr.onprogress = function () {
//         console.log("on progress")
//     }
//     //  xhr.onreadystatechange=function(){
//     //      console.log("ready state is",xhr.readyState)//this shows the stage in which it is
//     //  }
// //what to do when response is ready
//     xhr.onload = function () {
//         if (this.status === 200) {//http status see on google
//             console.log(this.responseText)
//         }
//         else {
//             console.log("some error occured")
//         }

//     }
//     //send the request
//     params = `{"name":"test12354","salary":"123","age":"23"}`
//     xhr.send(params);
// }



let popbtn = document.getElementById('popbtn');
popbtn.addEventListener('click', pophandler)

function pophandler() {
    console.log('You have clicked popbtn')
    //instantiate an xhr object
    const xhr = new XMLHttpRequest();


    //open xhr
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true)


    xhr.onload = function () {
        if (this.status === 200) {//http status see on google
            let obj=JSON.parse(this.responseText);
            console.log(obj)
            let list=document.getElementById('list');
            let str='';
            for(key in obj){
                str+=`<li>${obj[key].employee_name}</li>`;
                list.innerHTML=str;//appending in list 
            }

        }
        else {
            console.log("some error occured")
        }

    }
    //send the request
   
    xhr.send();
    console.log("We are done fetching data")
}


