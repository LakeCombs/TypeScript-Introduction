//explicit types
let character: string;
let age: number;
let isLogged: boolean;

age = 55;

// age = 'lake'     not possible

//arrays
let ninjas: string[] = [];

// ninjas = [10, 34] not possible because it has to contain only string
// ninjas = ["lake", "chi", "black"];

ninjas.push("lake");
ninjas.push("combs");
console.log(ninjas);

//union types
// to create a mixed array you can use  the union type
let mixed: (string | number | boolean)[] = [];
mixed.push("lake");
mixed.push(556);
mixed.push(true);
console.log(mixed);

let uid: string | number;
uid = "123";
uid = 123;

//objects
let ninjaOne: object;
ninjaOne = { name: "comm", age: 22 };

let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = { name: "chila", age: 33, beltColor: "green" };
