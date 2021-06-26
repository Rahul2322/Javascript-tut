/* scope always goes from low level to highlevel*/

// var name="Rahul";
// console.log('Line number 2',name);

// function saymyname(){
//     console.log('Line number 5',name);
// };
// saymyname();




var name="Rahul";
console.log('Line number 15',name);

function saymyname(){
    var name="Mr R"
    console.log('Line number 19',name);
    
    saymyname2();
    function saymyname2(){
        console.log('Line number 23',name);
    }
};
saymyname();



var name="Rahul";
console.log('Line number 31',name);

function saymyname(){
    var name="Mr R"
    console.log('Line number 35',name);
    
    saymyname2();
    function saymyname2(){
        var name="Mr RS"
        console.log('Line number 40',name);
    }
};
saymyname();