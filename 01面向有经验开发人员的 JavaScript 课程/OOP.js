// How to Create An Object

var myGrades = {};//empty object

//way 1 x = {A : value, B : value,...},same as JSON
var collegeAlgebra = {//初始化_属性 属性: 属性_分隔符 ，
    level: "freshman",
    difficulty: "hard",
    expectedGrade: 98,
    textbook: function () {
        console.log("College Algebra for freshman is the required text!");
    },
    ["textBook"] : function () {
        console.log("College Algebra  textBook!");
    }
}

//Bracket Notation :  Also lets you access a property name through other variable names
var tb = collegeAlgebra["textBook"]();
console.log(tb);//output + undefined ?

//modify
collegeAlgebra.level = "hacker";
console.log(collegeAlgebra.level);

//way 2, x = new Object; x.Attr1 = value,x.Attr2 = value ...
var collegeAlg = new Object;//实例化_对象  .属性 =  属性_分隔符 ，
    collegeAlg.level = "freshman",
    collegeAlg.difficulty = "hard",
    collegeAlg.expectedGrade = 98,
    collegeAlg.textbook = function () {
        console.log("College Algebra for freshman is the required text!");
    },
    collegeAlg["textBook"] = function () {
        console.log("College Algebra  textBook!");
    }

console.log("\nxgqfrms is a " + collegeAlgebra.level + "!");
// alert("xgqfrms is a " + collegeAlgebra.level + "!");
// node.js not support alert function!

console.log("\nDemo 1:");
console.log(collegeAlgebra);
collegeAlgebra.difficulty;//nothing
collegeAlgebra.level;//nothing
console.log(collegeAlgebra.level);
console.log(collegeAlgebra.expectedGrade);
console.log(collegeAlgebra.difficulty);
collegeAlgebra.textbook();


console.log("\nDemo 2:");
console.log(collegeAlg);
collegeAlg.textbook();


console.log("\nDemo 3:");
console.log(collegeAlg);
collegeAlg["textBook"]();
collegeAlg.textBook();

console.log("\t"+collegeAlg["textBook"]());//output + undefined ?
console.log("\t"+collegeAlg.textBook());//output + undefined ?


console.log("\nDemo abc+xyz:");
var abc = collegeAlg["textBook"]();//output
var xyz = collegeAlg.textBook();//output

console.log("\t"+abc);// undefined
console.log("\t"+xyz);// undefined

console.log("\nDemo modify:");
// modify attribute === 重新赋值 
collegeAlg.difficulty = "super easy!";
console.log(collegeAlg);


console.log("\nDemo delete:");
delete collegeAlg.difficulty;//inherited can not be deleted
console.log(collegeAlg);
