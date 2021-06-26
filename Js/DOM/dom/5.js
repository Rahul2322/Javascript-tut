document.getElementById('heading').addEventListener
('click',function(e){
    let variable;
    console.log("You have clicked the heading")
    // console.log(e)
    variable=e.target;
    variable=e.target.className;
    variable=Array.from(e.target.classList)
    // variable=e.target.id;
    variable=e.offsetX;
    // variable=e.offsetY;
    // variable=e.clientX;
    // variable=e.clientY;
    console.log(variable)
   

})//similaly mouseover

document.getElementById('btn')