const getRollNo = () => {
    setTimeout(() => {
        let roll_no = [1, 2, 3, 4, 5]
        console.log(roll_no)

        setTimeout(() => {
            let biodata = { name: 'rahul', age: 27 };
            console.log(`My name is ${biodata.name} and age is ${biodata.age}`)

            setTimeout((name) => {
                biodata.gender = 'male'
                console.log(`The gender of ${biodata.name} is ${biodata.gender}`)

            }, 2000,biodata.name);

        }, 2000);

    }, 2000);
}
getRollNo();