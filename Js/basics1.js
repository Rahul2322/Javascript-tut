//Execution context and call stack
//the purpose of debugger is to know on which phase of the code we are on.
var globalEC="added";

function a(){
    var fa="2nd function o/p1";
    console.log(fa);
    debugger;
    b();
    console.log("let's see when I will be console");
};

function b(){
    debugger;
    console.log("2nd function o/p2");
    c();

};

function c(){
    debugger;
    console.log("3rd function o/p3");

};
debugger;
a();
//https://stackoverflow.com/questions/11704971/why-are-two-identical-objects-not-equal-to-each-other
//Read this comparision