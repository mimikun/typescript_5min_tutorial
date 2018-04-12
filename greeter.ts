class Student {
    fullName: string;
    constructor(public firstname: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstname + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("kerosene", "Y", "mimikun");

document.body.innerHTML = greeter(user);
