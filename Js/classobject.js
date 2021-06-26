// import User from './classes';
const User=require('./classes');
const rahul=new User('rahul','sr1994.com');
console.log(rahul.getInfo());
rahul.enrollCourse('nodejs')
rahul.enrollCourse('reactjs')
let courses=rahul.cousreList;
console.log(courses);
courses.forEach(e=>console.log(e))