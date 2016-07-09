// 

var myGrades = {};//empty object

var collegeAlgebra = {//way 1 x = {A : B},same as JSON
    level: "freshman",
    difficulty: "hard",
    expectedGrade: 98,

    textbook: function () {
        console.log("College Algebra for freshman is the required text!");
    }
}

var collegeAlg = new Object;//way 2, x = new Object; x.Attr = value
    collegeAlg.level = "freshman",
    collegeAlg.difficulty = "hard",
    collegeAlg.expectedGrade = 98,
    collegeAlg.textbook = function () {
        console.log("College Algebra for freshman is the required text!");
    },
    collegeAlg["textBook"] = function () {
        console.log("College Algebra  textBook!");
    }

console.log("xgqfrms is a " + collegeAlgebra.level + "!");
// alert("xgqfrms is a " + collegeAlgebra.level + "!");
// node.js not support alert function!

console.log("\nDemo 1:");
console.log(collegeAlgebra);
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
