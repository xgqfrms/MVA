// encapsulation 封装
// zoomit.exe


var n = 999;
function f1() {
    // alert(n);
    console.log(n);
};
f1(); // 999

function f2() {
    var x = 777;
};
// alert(x); // error
// console.log(x); //ReferenceError: x is not defined

// 注意，函数内部声明局部变量的时候，一定要使用var命令;
// 如果不用的话，你实际上声明了一个全局变量！

function f3(){
　　y=888;
}
f3();
// alert(y); // 888
console.log(y); 





