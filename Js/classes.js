class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    #cousreList=[];
    getInfo(){
        return {name:this.name,email:this.email}
    }
    enrollCourse(name){             //this is a setter it usual expects a paramter
        this.#cousreList.push(name)
    }
    getCourseList(){               // this is a getter it not usually expects a parameter
        return this.#cousreList;
    }
}
module.exports=User;


//written it here only for getters and setters
let john=new User('john','john84@gm');
console.log(john.getInfo());
john.enrollCourse('react','angular')
console.log(john.getCourseList());//both will give same output
console.log(john.cousreList);//both will give same output
// { name: 'john', email: 'john84@gm' }
// [ 'react' ]
// [ 'react' ]
//so to make courselist private we use# and the code will be changed to and output will be
// { name: 'john', email: 'john84@gm' }
// [ 'react' ]
// undefined