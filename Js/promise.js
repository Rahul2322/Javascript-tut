// function func1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             let error=true;
//             if(!error){
//                 console.log("function:Your promise has been resolved")
//                 resolve();
//             }else{
//                 console.log("function:Your promise has not been resolved");
//                 reject('Sorry not fullfilled');
//             }

//         }, 2000);
//     })
// }
// func1()
// .then(()=>console.log("Thanks for resolving"))
// .catch((err)=>console.log("Very Bad: "+err))



// function job() {
//     return new Promise(resolve=>setTimeout(()=>resolve(),2000))
// }
// job().then(()=>console.log('hello world'))



// function job(callback1, callback2) {
//     setTimeout(callback1, 2000);
//     let count = 0;
//     let timer = setInterval(() => {
//     callback2();
//     count++;
//     if (count >=3) {
//     clearInterval(timer);
//     }
//     }, 1000);

// }job(callback1, callback2)
function job(callback1, callback2) {

    setTimeout(()=> callback1(), 2000);
    let counter=0;
    
    let f2 = setInterval(()=>{
        callback2();
        counter++;
        if(counter>=3){
            clearInterval(f2)  
        }
    }, 1000);
    
    }
    function job(callback1, callback2) {

        setTimeout(()=> callback1(), 2000);
        let counter=0;
        
        let f2 = setInterval(()=>{
            callback2();
            counter++;
            if(counter>=3){
                clearInterval(f2)  
            }
        }, 1000);
        
        }
        function callback1(){
            console.log('callback1')
        }
        function callback2(){
            console.log('callback2')
        }
        job(callback1,callback2)
