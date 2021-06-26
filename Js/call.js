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
sub1.result.bind(sub2,'A++');
let arr=sub1.result.bind(sub2,'A++');
