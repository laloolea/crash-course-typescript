"use strict";
let id = 3;
let company = 'Lalo';
let isPublished = true;
let x = 'Hello';
x = true;
let ids = [1, 2, 3, 4, 5]; // if you add something is not that type it will break
//Tuple
let person = [1, "Lalo", false];
//Tuple array
let employee;
employee = [
    [1, "Lalo"],
    [2, "jaja"],
    [3, "lala"]
];
//union can be both types
let pid;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["UP"] = 0] = "UP";
    Direction1[Direction1["DOWN"] = 1] = "DOWN";
    Direction1[Direction1["LEFT"] = 2] = "LEFT";
    Direction1[Direction1["RIGHT"] = 3] = "RIGHT";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'Lalo'
};
//Type Assertion
let cid = 1;
//let customerId =<number>cid;
let customerId = cid; //To change the type in assignation
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 5));
function log(message) {
    console.log(message);
}
log("2");
const user1 = {
    id: 1,
    name: 'lalo'
};
const p1 = 1;
const add = (x, y) => x + y;
const substract = (x, y) => x - y;
//Classes!!!
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const lalo = new Person(1, "lalo");
//lalo.id =5;//You cant do this if is private  is only accesible by the class,same for protected that case only the class or whatever class that is extended from that class, for Public everyone can access
//console.log(lalo.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // this call the constructor from the parent class
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", 'Developer');
console.log(emp.register());
//Generics !!
function getArray(items) {
    return new Array().concat(items);
}
//Reminded me to overload functions in C 
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Lalo", "Pedro", "Jaime"]);
strArray.push('hello');
