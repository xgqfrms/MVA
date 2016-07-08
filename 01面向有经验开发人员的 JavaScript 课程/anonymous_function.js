/*
Application Scenarios(应用场景):
enclosures && recursion (闭包，递归)
*/

// anonymous function
var x = "global var"; 
function anoy(name){
    var x = console.log("Hello," + name +"!");
    return x;
};

anoy();//undefined!
anoy("xgqfrms");


function myTime() {
    // alert("just do it!");
    console.log("just do it!");
}
//function 能在任何地方(fun声明：前面/后面)，调用

var myTime_anoy = function(){
    // alert("anonymous:  just do it!");
    console.log("anonymous:  just do it!");
}
// var 只有在var被初始化后，才能使用

myTime();
console.log(myTime_anoy);



// function expression
var sayHi = function(){
    // alert("Hi, function expression!");
    console.log("Hi, function expression!");
};
console.log(sayHi);

//in a object
var xray = {
    sayName: function(){
        // alert("Hi, My name is xray!");
        console.log("Hi, My name is xray!");
    }
};
console.log(xray);

// event handler
/*
$("p").click = function(){
    alert("Hi, JQuery!");
    console.log("Hi, JQuery!");
}
*/

//self invoking function(自调用)
((function(){
    // alert("Hi, self invoking function!");
    console.log("Hi, self invoking function!");
})());


//factorial(阶乘)
var factorial = function(n){
    return !(n>1) ? 1 : arguments.callee(n-1)*n;//callee (被调用函数)
}
console.log(factorial(10));

