/*
error & exception
*/

/*
try {
    
} catch (error) {
    
}
*/
/*
function errorFunc() {
    var a, b;
    a = 100;
    // b = 10;
    b = 0;
    try {
        if (b == 0) {
            throw("Fatal Error:\n divide by zero!");
        } else {
            var c = a / b;
            alert("c = "+c);
        }
    } catch (error) {
        alert("Error information:\n"+error);
    } finally{
        alert("No matter how(Anyhow) , Finally block will be executed!");
    }
}
*/
//test
errorFunc();

window.onerror = function(msg, url, line){
    alert("Message :" + msg);
    alert("URL :" + url);
    alert("Line Number :" + line);
}