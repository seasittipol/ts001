function sayHi(name: string): void {
    console.log(`Hellow ${name}`);
};

// sayHi('totot');
// sayHi('Sit');

function getDiscount(): number {
    return 500;
}

function getAdress(): string {
    return 'chacheongsao';
}

// console.log(getAdress());

function checkNumber(num: number): string {
    if (num % 2 === 0) {
        return 'เลขคู้';
    } else {
        return 'เลขคี่';
    }
}

const total = (a: number, b: number): number => {
    return a + b;
};

// console.log(checkNumber(3));
// console.log(total(2, 4));

function showEmployee(name: string, age: number, address: string = 'bangkok') {
    console.log(`name = ${name} , age = ${age} , address = ${address}`);
}

// showEmployee('best', 22, 'chasao');
// showEmployee('best', 22);
// showEmployee('best', 22, 'chasao');

const person = {
    name: "best",
    age: 22
};

const person2: {
    name: string,
    age: number;
} = {
    name: "sittipol",
    age: 22
};

const showDetail = (data: { name: string, age: number; }): void => {
    console.log(`name = ${data.name} , age = ${data.age}`);
};

// showDetail(person);

const position: { lat: number, long: number; } = { lat: 123123, long: 1231232 };

const randomPosition = (): { lat: number, long: number; } => {
    return { lat: Math.random(), long: Math.random() };
};

// console.log(randomPosition());

const listDetail = (data: { name: string, age: number; }) => {
    console.log(`name = ${data.name} , age = ${data.age}`);
};

const list = {
    name: 'best',
    age: 123,
    address: 'cha'
};

// listDetail(list);

type employee = {
    id: number,
    readonly name: string,
    salary: number,
    phone?: string;
};

let noob1: employee = { id: 1, name: 'bestza', salary: 555555, phone: '777777' };
let noob2: employee = { id: 2, name: 'bestza002', salary: 566666 };
// console.log(noob1);
// console.log(noob2);

// array
const users: string[] = ['bestza', 'bestkrub', 'bestnarak'];
const age: number[] = [19, 29, 33];

// console.log(users);
// console.log(age);

// for (let i = 0; i < users.length; i++) {
//     console.log(i, users[i]);
// }

// users.forEach((el, index) => console.log(index, el));

type Employee = {
    name: string,
    salary: number,
    department?: string;
};

const em: Employee[] = [];
em.push({ name: 'bestno1', salary: 5555 });
em.push({ name: 'bestno2', salary: 5555, department: 'programmer' });

// console.log(em);
// for (let person of em) {
//     console.log(person);
// }

function sayHello(): string;
function sayHello(name: string): string;
function sayHello(name?: unknown): unknown {
    if (!name) {
        return `Hello TS`;
    }
    if (typeof name === 'string') {
        return `Hello ${name}`;
    }
    throw new Error('invalid type input');
}
// console.log(sayHello('bestmalaew'));

function sum(a: number, b: number): number;
function sum(a: string, b: string): string;
function sum(a: unknown, b: unknown): unknown {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    if (typeof a === 'string' && typeof b === 'string') return parseInt(a) + parseInt(b);
    throw new Error('invalid input');
}

// console.log(sum(2, 4));
// console.log(sum('111', '222'));

const section: string[] = ['บัญชี', 'การเงิน'];
const departments: string[] = ['โปรแกรมเมอร์', 'การตลาด', 'กราฟิก'];
departments.push(...section);
// console.log(departments);

const acc = (...numbers: number[]) => {
    return numbers.reduce((result, value) => {
        return result + value;
    }, 0);
};

// console.log(acc(111, 222, 333));
// console.log(acc(111, 222, 333, 444));

const colors: string[] = ['red', 'green', 'blue'];
const [red, green, blue] = colors;
console.log(red);