// function name(){
//     console.log("My name is Rahul");
// };
// name()//--> calling the function



// function name(a){
//     console.log(`My name is ${a}`);
// };
//
// name("Rahul")//--> calling the function
// name("Nilesh")


// function name(a){
//     console.log("My name is Rahul")
//     console.log(`My name is ${a}`);
// };
// name();
// name('Rahul')


// function name(){                //here i am returning so it will execute to get value i have to console
//     return "My name is Rahul"
    
// };
// name();



// function name(){
//     return "My name is Rahul"
    
// };
// console.log(name());





// function name(){
//     return "My name is Rahul"
    
// };
// var greeting=(name());     // store in a varible
// console.log(greeting);


// function getuserrole(name,role){
//     switch(role){
//         case 'admin':
//             return `The ${name} has all the access.`
//             break;// not necessary since its returning and the code stops after returing
//         case 'subadmin':
//             return `The ${name} can create and delete all courses.`
//             break;
//             case "Testprep":
//                 return `The ${name} can create and delete all tets.`
//                 break;
//                 case "User":
//                     return `The ${name} can consume all content.`
//                     break;
//                     default:
//                         return `The ${name} is a trial user.`
//                         break;
            

//     };
// };
// var get=getuserrole('ME','admin');
// console.log(get);








//here i am taking a  variable as function 

var getuserrole=function (name,role){
    switch(role){
        case 'admin':
            return `The ${name} has all the access.`
            break;// not necessary since its returning and the code stops after returing
        case 'subadmin':
            return `The ${name} can create and delete all courses.`
            break;
            case "Testprep":
                return `The ${name} can create and delete all tets.`
                break;
                case "User":
                    return `The ${name} can consume all content.`
                    break;
                    default:
                        return `The ${name} is a trial user.`
                        break;
            

    };
};
console.log(getuserrole('ME','admin'));
var getrole=getuserrole("Nilesh","subadmin");
console.log(getrole);
