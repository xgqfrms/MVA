// 
var Person = function(firstName){
    this.firstName = firstName;
};

Person.prototype.sayHello = function(){
    console.log("Hello, I'm " + this.firstName);
};


function Student(firstName,subject) {
    Person.call(this.firstName);
    this.subject = subject;
    Person.walk = function(firstName){
        console.log("Hello, I'm " + this.firstName
        + ". I'm wakying ");
    };
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayHello = function(){
    console.log("Hello, I'm " + this.firstName
     + ". I'm studying " + this.subject + ".");
};

var student = new Student("Smith","Physics");
student.sayHello();
// console.log("call:" + student.call);//undifined

//instanceof  ? ture : false
console.log(student instanceof Person);
console.log(student instanceof Student);

