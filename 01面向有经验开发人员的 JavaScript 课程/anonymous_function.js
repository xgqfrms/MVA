// anonymous function
var x = "global var"; 
function anoy(name){
    var x = console.log("Hello," + name +"!");
    return x;
};

anoy();//undefined!
anoy("xgqfrms");


function myTime() {
    alert("just do it!");
}

var myTime = function(){
    alert("anonymous:  just do it!");
}
