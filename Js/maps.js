var myMap=new Map();
myMap.set(1,"Uno");
myMap.set(2,"Dos");
myMap.set(3,"Tres");
myMap.set(4,"Cuatro");

console.log(myMap)


//for of method will always give key first
for(let key of myMap.keys()){
    console.log(`key is ${key}`)
}

for(let value of myMap.values()){
    console.log(`Value is ${value}`)
}

for(let [key,value] of myMap){
    console.log(`Key is ${key} and Value is ${value}`)
}



//for each method gives the value because it knows we want the value
myMap.forEach((key)=>(console.log(`key is ${key}`)))


myMap.forEach((v,k)=>(console.log(`key is ${k} and Value is ${v}`)))