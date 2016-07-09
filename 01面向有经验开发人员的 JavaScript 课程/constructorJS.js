// 

function Fruit(name,color){
    console.log("Object created by constructor!");

    this.type = function(){
        console.log("Hi, I am a fruit!");
        return "type!";
    }

    this.name = name;
    this.color = color;
}

var orange = new Fruit("orange","orange color");//instantiated
orange.type();
console.log(orange);

