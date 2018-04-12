interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "kerosene", lastName: "mimikun" };

document.body.innerHTML = greeter(user);
