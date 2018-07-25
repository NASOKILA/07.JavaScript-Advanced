
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `[name: ${this.name}, age = ${this.age}, species = ${this.species}]`;
    }
}


function extendClass(classToExtend) {

    classToExtend.prototype.species = "Human";
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

extendClass(Person);

let nasko = new Person("Atanas", 25);

console.log(nasko.toSpeciesString());
console.log();
console.log(Person.prototype.species);
console.log(Person.prototype.toSpeciesString);