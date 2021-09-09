let greet: Function;

greet = () => {
  console.log("hello world");
};

//we can either use the optional chaineing syntax c?: number | string of use a default parameter but for now we will be using the optional parameter
const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

add(5, 30, 77);

const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(10, 77);
//result = " a sting is not possible"

console.log(result);
