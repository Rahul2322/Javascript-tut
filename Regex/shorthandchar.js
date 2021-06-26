let stan="Harry potter";
let regular=/\warr/; //w  wordcharacter means---> _,alphabet,numbers
regular=/\w+arr/; //w+ morethan one wordcharacter 
stan="Hadfvdffarry potter";
regular=/\Warr/;  // W one non word character 
stan="H arry potter";
regular=/\W+potter/;  // W+ more than  one non word character 
stan="Harry @#$%@#$@$@potter";
regular=/potter\d585/;  // d one digit  
stan="Harry @#$%@#$@$@potter6585";// after potter thereis one digit
stan="Harry @#$%@#$@$@potter 585";// there is space after potter not a number
regular=/potter \d+/;  // d+ more  than one digit
stan="Harry @#$%@#$@$@potter 666965875585";
regular=/\D585/;                        //D means one nondigit
stan="Harry @#$%@#$@$@potter 899h585"; //  here if it will be harry thenalso matches
regular=/\D585/;                        //D means morethan one nondigit
stan="Harry @#$%@#$@$@potter 55986harry585"; 

regular=/\spotter/;                        //s means whitespace
stan="Harry potter"
regular=/\s+potter/;                        //s+ means one or more thanoonewhitespaces
stan="Harry      potter"
regular=/\Spotter/;                        //s means nonwhitespace
stan="Harryipotter"
regular=/\S+potter/;                        //s+ means one or morethanone whitespaces
stan="Harryipotter"

// regular=/\potter\b/;                        //word boundary means after a string there should be a boundary
// stan="Harry potter and"
// stan="Harry potterand"

// //Assertions
// regular=/p(?=o)/; ///-----> means after p o should come
// stan="Harry potter and"
regular=/p(?!o)/; ///-----> means after p o should not come
stan="Harry potter"

let results=regular.exec(stan);
console.log("The  test result is ",stan);
if (regular.test(stan)){
    console.log(`The string ${stan} matches  the expression ${regular.source}`);//---> use regex.source to get only string and not/rahul/
}
else{
    console.log(`The string ${stan} does not matches  the expression ${regular.source}`);
}
