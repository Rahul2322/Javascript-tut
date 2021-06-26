const sub1={
    name:"Maths",
    score:147,
    result:function(grade){
        console.log(`I scored ${this.score} in ${this.name} with ${grade}`)
    }
    
};
sub1.result('A++');

const sub2={
    name:"Science",
    score:98
}

sub1.result.apply(sub2,['A++']);
//The only difference between apply and call is call takes arguments separately while apply takes it as an argument of array

let max=Math.max(1,2,3,4);
console.log(max)
//The math method is not for array

let arrMax=Math.max.apply(null,[9,8,7,10,6]);//when there is not this then use null or ""
console.log(arrMax);
//So apply method helps in using math