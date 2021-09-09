//generics with interface
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "lami" },
};

const docFour: Resource<string> = {
  uid: 2,
  resourceName: "person",
  data: "let me in",
};

const docFive: Resource<string[]> = {
  uid: 3,
  resourceName: "person",
  data: ["hmm", "yea"],
};

console.log(docThree, docFour, docFive);
