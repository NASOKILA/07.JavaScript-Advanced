
class Person {
    constructor(firstName, lastName, age, email) {

        this.setFirstName = firstName;
        this.setLastName = lastName;
        this.setAge = age;
        this.setEmail = email;
    }

    get getFirstName() {
        return this.firstName;
    }

    set setFirstName(fName) {
        return this.firstName = fName;
    }

    get getLastName() {
        return this.lastName;
    }
    set setLastName(lName) {
        this.lastName = lName;
    }

    get getAge() {
        return this.age;
    }

    set setAge(Age) {
        return this.age = Age;
    }

    get getEmail() {
        return this.email;
    }
    set setEmail(Email) {
        this.email = Email;
    }

    toString() {
        return `${this.getFirstName} ${this.getLastName} (age: ${this.getAge}, email: ${this.getEmail})`;
    }
}

let person = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');

console.log(person.toString());