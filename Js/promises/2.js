//creating our own promises
function setUp() {
    delay('ggg')
        .then(() =>console.log ('hello'))
        .catch(err => console.error(err));
}
function delay(time) {
    return new Promise(function (resolve, reject) {
        if (isNaN(time)) {
            reject(new Error('delay requires a valid number'))
        }
        setTimeout(resolve, time)
    });

}
setUp()