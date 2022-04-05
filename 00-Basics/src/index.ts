let id: number = 5;
let company: string = "ABC";
let isPublished: boolean = true;

let x: any = "Any String or number or boolean etc";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "ABC", 2, 3, 4, 5];

// Tuple
let person: [number, string, boolean] = [1, "Adil", true];

// Tuple Array
let employee: [number, string][];
employee = [
  [1, "A"],
  [2, "B"],
  [3, "C"]
];

// Union
let prodId: string | number;
// prodId = 22
prodId = "ABCD";

// Enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}
console.log("Enum Direction Up", Direction.Up);

enum directionString {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}
console.log("Enum directionString Left", directionString.Left);

// Objects
type User = { id: number; name: string };
const user: User = {
  id: 1,
  name: "John"
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// functions
function addSum(x: number, y: number): number {
  return x + y;
}
console.log(addSum(3, 7), "addSum Function");

// Void functions
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}
const user1: UserInterface = {
  id: 1,
  name: "John"
};

interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// classes
class Person {
  // Private, Public, Protected
  id: number;
  name: string;
  constructor(id: number, name: string) {
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
