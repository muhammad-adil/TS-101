"use strict";
let id = 5;
let company = "ABC";
let isPublished = true;
let x = "Any String or number or boolean etc";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "ABC", 2, 3, 4, 5];
// Tuple
let person = [1, "Adil", true];
// Tuple Array
let employee;
employee = [
    [1, "A"],
    [2, "B"],
    [3, "C"]
];
// Union
let prodId;
// prodId = 22
prodId = "ABCD";
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log("Enum Direction Up", Direction.Up);
var directionString;
(function (directionString) {
    directionString["Up"] = "Up";
    directionString["Down"] = "Down";
    directionString["Left"] = "Left";
    directionString["Right"] = "Right";
})(directionString || (directionString = {}));
console.log("Enum directionString Left", directionString.Left);
const user = {
    id: 1,
    name: "John"
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// functions
function addSum(x, y) {
    return x + y;
}
console.log(addSum(3, 7), "addSum Function");
// Void functions
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // console.log(123);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const Adil = new Person(1, "Adil");
console.log(Adil, "Person");
console.log(Adil.register());
