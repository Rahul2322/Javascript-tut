var shows=["Netflix","Youtube","Amazon","Instagram","Facebook"];
for (const n of shows){
    console.log(n);       // for of is mostly used for arrays
}

var symbols={yt:"Youtube",nf:"Netflix",ig:"Instagram",fb:"Facebook"};
for(const n in symbols){
    console.log(n);
}

// var symbols={yt:"Youtube",nf:"Netflix",ig:"Instagram",fb:"Facebook"};
// for(const n in symbols){
//     console.log(`Key is: ${n} and Value is:${symbols[n]}`);// for in is for objectz
// }