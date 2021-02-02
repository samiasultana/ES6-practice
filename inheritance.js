class Parent{
    constructor(){
        this.dad="mimo";
    }
}

class Child extends Parent{
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName(){
        return this.name+" "+ this.dad;
    }
}
const baby = new Child("babu");
const baby2 = new Child("babuta");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());
console.log(baby2.getFullName());