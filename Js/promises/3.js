let word = "https://jsonplaceholder.typicode.com/users";
function setUp() {
    words().
        then(results => console.log(results))
        .catch(err => console.error(err));
}

async function words() {
    let response1 = await fetch(word);
    let json1 = await response1.json();
    return json1[0].address

}
setUp();