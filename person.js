class Person{
    constructor(name, age){
        this.name = name;
    }
    sayMyName(){
        return `My name is ${this.name}`;
    }
}

module.exports = {
    Person,
};