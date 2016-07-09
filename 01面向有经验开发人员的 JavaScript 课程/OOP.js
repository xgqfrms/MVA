// 

var myGrades = {};//empty object

var collegeAlgebra = {//way 1 x = {A : B},same as JSON
    level : "freshman",
    difficulty : "hard",
    expectedGrade : 98,

    textbook : function(){
        console.log("College Algebra for freshman is the required text!");
    }
}

var collegeAlg = new Object;//way 2, x = new Object; x.Attr = value

collegeAlg.level = "freshman";
collegeAlg.difficulty = "hard",
collegeAlg.expectedGrade = 98,
collegeAlg.textbook = function(){
        console.log("College Algebra for freshman is the required text!");
    }

console.log(collegeAlgebra);
console.log("\n");
console.log("xgqfrms is a " + collegeAlgebra.level);
// alert("xgqfrms is a " + collegeAlgebra.level + "!");
//node.js not support alert function!
console.log("\n");
collegeAlgebra.textbook();

console.log("\n");
console.log(collegeAlg);
console.log("\n");
collegeAlg.textbook();



