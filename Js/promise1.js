const students = [
    { name: 'harry', sub: 'Js' },
    { name: 'Rahul', sub: 'Python' }
]

function enrollstudent(student) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            students.push(student);
            console.log('Students have been enrolled');
            const error=false;
            if (!error) {
                resolve();
            } else {
                reject();
            }

        }, 8000);

    })

}

function getStudents() {
    setTimeout(function () {
        let str = '';
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`
        });
        document.getElementById('student').innerHTML = str;
        console.log('Students have been fetched')

    }, 1000)
}
let newstudent = { name: 'Potter', sub: 'C++' };
enrollstudent(newstudent)
    .then(getStudents)
    .catch(err => console.log('Some error occured'))
