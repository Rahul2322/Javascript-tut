//concat
var numbers=[1,2,3];
var numbers1=[4,5,6];
var numbers2=[7,8,9];
var add=numbers.concat(numbers1,numbers2);
console.log(add);


//copieswithin array.copyWithin(target,[,start[,end]]) copies part of an array to another location in the same array
var array1=['a','b','c','d','e'];
console.log(array1.copyWithin(1,3));
//[ 'a', 'd', 'e', 'd', 'e' ]
console.log(array1.copyWithin(1,3,4));//copies element only from index 3upt0 4 excluding 4
//[ 'a', 'd', 'c', 'd', 'e' ]

//find --> return the first element after satisfying the given testing function./arr.find(callback(element[, index[, array]])[, thisArg])
var array2=[2.10,15,24,48,59];
var found=array2.find((e)=>(e>20),);
console.log(found);
//24

var s=''
function nTablesPlusOne(n) {
for(var i=1;i<=10;i++){
		s+=((n*i)+1)+','  ;
	

	
}
}nTablesPlusOne(8);
console.log(s.slice(0,s.length));
