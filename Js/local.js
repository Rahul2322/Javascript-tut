//local storage-it will be stored on that particular website only but will not work whwn u open another website and when u will go 
//in application after inspecting it will not show key value pair in local storage


//Adding key value pair inside local storage
localStorage.setItem('Name', 'rahul');
localStorage.setItem('Name1', 'nagesh');


//clears the entire local storage
//localStorage.clear();


//removes a particular key value pair
//localStorage.removeItem('Name')

//reterive an item from local storage
let name=localStorage.getItem('Name')
console.log(name)

//to store info as an array we have to store as json because when u store simply as array it will give string on retreving that array

let inarray=['apples','banana','orange'];
localStorage.setItem('fruits',JSON.stringify(inarray))
name=JSON.parse(localStorage.getItem('fruits'));
console.log(name);
//this file was saved in domfolder web html and run from live server


//session storage-it works same as local storage except that its available till the browser is open but when u will restart
//the bowser it will not show any key value pair in session storage means it works only for a session

sessionStorage.setItem('Name', 'rahul');
sessionStorage.setItem('Name1', 'nagesh');
sessionStorage.setItem('fruits',JSON.stringify(inarray));