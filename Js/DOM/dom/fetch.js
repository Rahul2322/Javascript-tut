function getData(index){
    
let obj=fetch('https://api.covid19api.com/summary'
)

obj
.then(resp=>{
    // console.log(resp),
    return resp.json()
})
.then(data=>{
    const actualdata=data.Countries[`${index}`];
    console.log(`The name of country is ${actualdata.Country} and recovered cases is ${actualdata.TotalRecovered}`)
})

.catch((error)=>console.error(error)
)
}
getData(2)


async function getdata(){
    try{
        const jsondata=await fetch('https://api.covid19api.com/summary');
    const response=await jsondata.json();
    console.log(response)
    }catch(error){
        console.log(error)
    }
    

}
getdata()

