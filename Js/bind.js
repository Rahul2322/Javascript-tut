var rahul={
    firstName:"Rahul",
    lastName:"Singh",
    courses:5,
    role:"admin",
    getinfo:function(){
        console.log(`The first name is ${this.firstName}
        The last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courses} courses
        `)
        
    }
}


rahul.getinfo();

var hp={ firstName:"harry",
lastName:"Potter",
courses:4,
role:"Sub-admin",
}
// rahul.getinfo();
// // dj.getinfo();
// rahul.getinfo.bind(hp);//this is a refernce so to run it it has to store in a variable or curring()()
var hpinfo=rahul.getinfo.bind(hp);//or rahul.getinfo.bind(hp)()
// hpinfo()
//bind always gives us the reference so we have to call it

//call simply calls it not refers
// rahul.getinfo.call(hp);