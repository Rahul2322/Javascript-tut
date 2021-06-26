//For all regular functions,this refers to window object
console.log(this);
//{} this will give empty object ,in browser it will give window object (undefined)
var user={firstName:"Rahul",
          usercount:4,
        getcourses:function(){
            console.log(this)
        }}

        user.getcourses() // this is a object function and not regular function so when u see this it will provide info
        //about the object




        var user={firstName:"Rahul",
          usercount:4,
        getcourses:function(){
            console.log("Line 19:",this)
            function sayHello(){
                console.log("Hello");
                console.log("Line 22:",this)

            }
            sayHello();//Note: here say Hello is a regular function so it will give window object.
        }
    }

        user.getcourses();


        //In strict mode when we use this we get undefined
        "use strict"
        function sum(a,b){
            var add=a+b;
            console.log(add);
            console.log(this);
        };
        sum(10,15);
//25
//undefined



        
        






    