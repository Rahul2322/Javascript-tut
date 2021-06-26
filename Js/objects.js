// var user={
//     firstName:"Rahul",
//     lastName:"Singh",
//     loginiId:"Rahul@23",
//     loggedIn:true,
//     loginCount:32,
//     role:"admin"
//     };

//    console.log(user.lastName);
//    console.table(user);
//    user.loginCount=40;
//    console.log(user.loginCount)
//    console.log(user['lastName']//this is another way make sure u write the key in quotes



   //methods in object

   var user={
    firstName:"Rahul",
    lastName:"Singh",
    loginiId:"Rahul@23",
    loggedIn:true,
    loginCount:32,
    role:"admin",
    courseList:[],
    buyCourses:function(coursename){
        this.courseList.push(coursename);
    },
    getcourses:function(){
        return `${this.firstName} is enrolled in total of  ${this.courseList.length} courses`;

    },

    };
    var courseList=true        //(this) method allows to see in that particuar object otherwise it will see var also& give error
    user.buyCourses("ReactJs");
    user.buyCourses("Angular");
    console.log(user.getcourses());
