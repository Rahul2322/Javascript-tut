class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    cousreList=[];
    getInfo(){
        return {name:this.name,email:this.email}
    }
    enrollCourse(name){             
        this.cousreList.push(name)
    }
    getCourseList(){               
        return this.cousreList;
    }
  static  login(){
        console.log('You are logged in')//if i want some methods not to be accessible to subclass use static
    }
}

class Subadmin extends User{
    constructor(name,email){
        super(name,email)
    }
    
    getAdminInfo(){
        console.log('I am a subadmin')
    }
    login(){
        console.log("You are a subadmin")//here i used login method which the javscript knows is of subclass not a parent class
    }
}

let tom=new Subadmin('tom','tom@23')
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());