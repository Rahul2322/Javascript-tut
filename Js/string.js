// charAt()
// const sentence="You are an amazing person"
// const index=4
// console.log(`The letter at index ${index} is ${sentence.charAt(index)}`)
// console.log(sentence.length-2)
// console.log(`The letter at index ${index} is ${sentence.charAt(sentence.length-1)}`)



// concat

// const sentence1="You are an amazing person"
// const sentence2="Rahul"
// console.log(sentence1.concat(',',sentence2))

// let greetList = ['Hello', ' ', 'Venkat', '!']
// console.log(greetList[0]+greetList[1] + greetList[2])
// console.log(greetList[0].concat(greetList[1]).concat(greetList[2]) )



// includes

// const sent= "The quick fox jumps over the lazy dog"
// const word="fox"  // case sensitive it will return false if it is "Fox"
// console.log(sent.includes(word))
// console.log(`The word ${word} ${sent.includes(word)?"is":"is not"} in the sentence`)


//  indexof
//  const paragraph="The quick  brown fox jumps over the lazy dog? Was it the dog lazy ";
//  const word= "dog";
//  const indexofword=paragraph.indexOf(word);
//  console.log(`The index of ${word} is ${indexofword}`);
//  console.log(`The second output of " ${word}" is ${paragraph.indexOf(word,(indexofword+1))}`);// here i wrote 'o' instead of "O"in indexof hence errpr
// console.log(paragraph.indexOf(word,indexofword+1))
// // syntax String.indexOf(searchword,fromindex)


// const para="to be , not to be ,let it be,will see";
// var count=0;
// var position=para.indexOf('e')
// while(position!==-1){            // -1 index basically means end of string length 
//     count++;
//     position=para.indexOf('e',position+1)
// }console.log(count);


//lastindexof



// const paragraph="The quick  brown fox jumps over the lazy dog? Was it the dog lazy ";
//  const word= "dog";
//  const indexofword=paragraph.lastIndexOf(word);
//  console.log(`The index of ${word} is ${indexofword}`);
//  console.log(`The second output of " ${word}" is ${paragraph.lastIndexOf(word,(indexofword))}`);// here i wrote 'o' instead of "O"in indexof hence errpr
// console.log(paragraph.lastIndexOf(word,indexofword))

// last index of (,fromindex) here from index signifies up to that index word string should be considered for
//ex canal lastindexof('a',3) means cana ('a',2) means can


//split()----> returns an array of substrings
//str.split(separator,limit)

let sent="I am inevitable and I am a God.";
console.log(sent.split(" ",6));
//If I want to extract a particur index from the array then specify index

