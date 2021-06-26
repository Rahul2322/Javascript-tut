var user='subadmin';
switch (user) {
    case 'admin':
        console.log("You get full access")
        
        // break;
    case 'subadmin':
        console.log("You get access to read/delete courses ") 
        // break;
    case 'testprep':
        console.log("you get access to read/deleta files")
        // break;


    default:
        console.log("You cant get access at all")
        // break;
}
//if you dont write break at the end of case statement then all will be executed 
