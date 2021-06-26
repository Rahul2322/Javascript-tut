//Character sets we use []
let stan="Harry potter";
let regular=/H[a-z]rry/;  // can be any char from a to z
// regular=/H[aty]rry/       // can be a,t,y
// regular=/H[^aty]rry/       // can't be a,t,y
// stan="Hcrry potter"   // matches with not^
// regular=/H[a-z]rr[yu]/;   //can be a-z,y,u
// regular=/H[a-zA-Z]rr[yu0-9]/;  // we can have as many character sets we want
// regular=/H[a-zA-Z]rr[yu0-9][0-9]/;
// stan="HArr8 potter"
// stan="HArru8 potter"

//Quantifiers we use{}
regular=/har{2}y/i; // can occur exactly 2 times
regular=/har{0,2}y/i; // can occur 0,1,2 times

//Groupings we use ()
regular=/(har){2}ry/;
regular=/(har){2}([0-9]r){3}y/;
stan="harharry";
stan="harhar1r2ry";





let results=regular.exec(stan);
console.log("The  test result is ",stan);
if (regular.test(stan)){
    console.log(`The string ${stan} matches  the expression ${regular.source}`);//---> use regex.source to get only string and not/rahul/
}
else{
    console.log(`The string ${stan} does not matches  the expression ${regular.source}`);
}
