"use strict";
function sayHi(name) {
    console.log(`Hellow ${name}`);
}
;
// sayHi('totot');
// sayHi('Sit');
function getDiscount() {
    return 500;
}
function getAdress() {
    return 'chacheongsao';
}
// console.log(getAdress());
function checkNumber(num) {
    if (num % 2 === 0) {
        return 'เลขคู้';
    }
    else {
        return 'เลขคี่';
    }
}
const total = (a, b) => {
    return a + b;
};
// console.log(checkNumber(3));
// console.log(total(2, 4));
function showEmployee(name, age, address = 'bangkok') {
    console.log(`name = ${name} , age = ${age} , address = ${address}`);
}
// showEmployee('best', 22, 'chasao');
// showEmployee('best', 22);
// showEmployee('best', 22, 'chasao');
const person = {
    name: "best",
    age: 22
};
const person2 = {
    name: "sittipol",
    age: 22
};
const showDetail = (data) => {
    console.log(`name = ${data.name} , age = ${data.age}`);
};
// showDetail(person);
const position = { lat: 123123, long: 1231232 };
const randomPosition = () => {
    return { lat: Math.random(), long: Math.random() };
};
// console.log(randomPosition());
const listDetail = (data) => {
    console.log(`name = ${data.name} , age = ${data.age}`);
};
const list = {
    name: 'best',
    age: 123,
    address: 'cha'
};
let noob1 = { id: 1, name: 'bestza', salary: 555555, phone: '777777' };
let noob2 = { id: 2, name: 'bestza002', salary: 566666 };
// console.log(noob1);
// console.log(noob2);
// array
const users = ['bestza', 'bestkrub', 'bestnarak'];
const age = [19, 29, 33];
const em = [];
em.push({ name: 'bestno1', salary: 5555 });
em.push({ name: 'bestno2', salary: 5555, department: 'programmer' });
function sayHello(name) {
    if (!name) {
        return `Hello TS`;
    }
    if (typeof name === 'string') {
        return `Hello ${name}`;
    }
    throw new Error('invalid type input');
}
function sum(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    if (typeof a === 'string' && typeof b === 'string')
        return parseInt(a) + parseInt(b);
    throw new Error('invalid input');
}
// console.log(sum(2, 4));
// console.log(sum('111', '222'));
const section = ['บัญชี', 'การเงิน'];
const departments = ['โปรแกรมเมอร์', 'การตลาด', 'กราฟิก'];
departments.push(...section);
// console.log(departments);
const acc = (...numbers) => {
    return numbers.reduce((result, value) => {
        return result + value;
    }, 0);
};
// console.log(acc(111, 222, 333));
// console.log(acc(111, 222, 333, 444));
const colors = ['red', 'green', 'blue'];
const [red, green, blue] = colors;
console.log(red);
