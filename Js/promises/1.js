// //fetch gives us promise directly so we can use then and catch method run in browser
// let word="https://jsonplaceholder.typicode.com/users"
// let cat="https://alexwohlbruck.github.io/cat-facts/"
// let anime="https://myanimelist.net/clubs.php?cid=13727"
// let promise=fetch(cat)
// .then(data=>console.log(data))
// .catch(err=>console.log(err));


// fetch(word)
// .then(response=>response.json())//fetch returns the promise which containing the response which  is an http response not actual json body content
// //so we use json()method to extract the body 
// .then(json=>console.log(json))
// .catch(err=>console.log(err));



function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data);

    return job(true);
})

.then(function(data) {
    if (data !== 'victory') {
        throw 'Defeat';
    }

    return job(true);
})

.then(function(data) {
    console.log(data);
})

.catch(function(error) {
    console.log(error);

    return job(false);
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(data);

    return new Error('test');
})

.then(function(data) {
    console.log('Success:', data.message);
})

.catch(function(data) {
    console.log('Error:', data.message);
});