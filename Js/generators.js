//generates help us in generating something on a fly when u call it instead of storing in an array like 1-1billion
 function* numbersGenerators(){
     let i=0;
    //  yield 1;
    //  yield 2;
    //  yield 3;
     while(true){
         yield i++//yield (i++).toString();
     }
 };
 let number=numbersGenerators()
 console.log(number.next());
 console.log(number.next());
 console.log(number.next());
 console.log(number.next());
 console.log(number.next());
 console.log(number.next());
 console.log(number.next());