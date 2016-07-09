// 

var vegetable = function(){
    this.type = "veggie";
}
vegetable.prototype.print = function(){
    console.log(this.type + " is god for your health!");
}

var carrot = new vegetable();