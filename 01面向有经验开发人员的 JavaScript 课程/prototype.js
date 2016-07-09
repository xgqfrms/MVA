// prototype

var vegetable = function(){
    this.type = "veggie";
}

vegetable.prototype.print = function(){
    console.log(this.type + " is god for your health!");
}
vegetable.prototype.color = "default color!";

// 
var carrot = new vegetable();
carrot.print();

carrot.color = "orange color";
console.log(carrot.color);

