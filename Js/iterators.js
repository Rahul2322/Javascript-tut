

function fruitsIterator(values){
    let nextIndex=0;
    //we will return an object
    return{
        next:function(){
            if(nextIndex<values.length){
                //we will return below object
                return{
                    value:values[nextIndex++],
                    done:false
                }
            }else{
                return{
                    done:true
                }
            }
        }
    }
};
myarray=["Apples","Oranges","Grapes","Banana"];
let fruits=fruitsIterator(myarray);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next().value);
console.log(fruits.next().value);