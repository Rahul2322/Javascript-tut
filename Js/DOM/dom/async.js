async function data(){
    console.log('Inside funcion');
    const response=await fetch('https://api.github.com/users');
    console.log('Waiting for data');
    const users=await response.json();
    console.log('users resolved');
    return users;
}
console.log('Before calling data')
let promise=data();
console.log('After calling data');
console.log(promise);
promise.then(resp=>console.log(resp))