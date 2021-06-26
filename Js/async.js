const prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let rollno=[1,2,3,4];
        resolve(rollno)
    },2000)
  
});

const getBioData=(indexdata)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((indexdata)=>{
            let biodata={
                name:'Rahul',
                age:27

            }
            resolve(`My name is ${biodata.name} and I am ${biodata.age} years old.`)
        },2000,indexdata)
    })
}

// async function getData(){
//     const rollnodata=await prom;
//     console.log(rollnodata);
//     const bio=await getBioData(rollnodata[1]);
//     console.log(bio)

//     return bio;//---> if you write return then get data will need to be stored in var and call then it will show pending 
//     // so to see the data we need to call then method 

// }
// // getData()
// let vasr=getData().then((myname)=>console.log(myname))




async function getData(){
    try{ const rollnodata=await prom;
        console.log(rollnodata);
        const bio=await getBioData(rollnodata[1]);
        console.log(bios)
    }catch(error){
        console.log(error)
    }
}
    getData()



