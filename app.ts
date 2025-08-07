
console.log("Hello, TypeScript!");

function greet(name: string): string {
    return `Olá, ${name}! Bem-vindo ao TypeScript!`;
}

const userName: string = "Desenvolvedor";
console.log(greet(userName));

interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "João",
    age: 30
};

console.log(`Nome: ${person.name}, Idade: ${person.age}`);