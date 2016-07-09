// 

function Fruit(name,color){
    console.log("Object created by constructor!");

    this.type = function(){
        console.log("Hi, I am a fruit!");
    }

    this.name = name;
    this.color = color;
}

var orange = new Fruit("orange","orange color");//
console.log(orange.type);
console.log(orange);

