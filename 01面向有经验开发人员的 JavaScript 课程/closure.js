// closure 闭包
//Using Node.js Runtime
// https://mva.microsoft.com/zh-cn/training-courses/-javascript--14430?l=YVFpNWj4B_9305918554

function celebrityName(firstName) {
    var nameIntro = "This celebrity is ";
    function lastName(theLastName) {
        console.log(nameIntro + firstName + "\." + theLastName);
    }
    return lastName;
}
var myName = celebrityName("xgqfrms1");//参数 firstName
// myName("xray");  //闭包不执行
myName("xray2");//参数 theLastName，闭包执行
myName("abc3");//参数 theLastName，闭包执行
myName("UFO4");//参数 theLastName，闭包执行


function showName(firstName,lastName) {
    var nameIntro = "Your name is ";
    function makeFullName() {//enclosure
        return nameIntro + firstName + "\." + lastName;
    }
    return makeFullName();
}
console.log(showName("xgq","frms"));
// var fullName = showName("xgq","frms");
// console.log(fullName);