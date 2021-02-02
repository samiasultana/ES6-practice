// 1
// class Student {

// }
// const Student1= new Student();
// const Student2= new Student();
// console.log(Student1, Student2);

// 2
// class Student{
//     constructor(){
//         this.id= 1;
//         this.name= "babun";
//     }
// }
// const Student1= new Student();
// const Student2= new Student();
// console.log(Student1, Student2);

class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "Zilla this.school, Barisal";
    }
}
const Student1 = new Student(1, "AAA");
const Student2 = new Student(2, "BBB");
console.log(Student1.name, Student2.name);
console.log(Student1.id, Student2.id);
console.log(Student1, Student2);
console.log(Student1);



