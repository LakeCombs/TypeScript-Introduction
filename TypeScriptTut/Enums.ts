//Emuns
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

//generics with interface
interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.AUTHOR,
  data: { name: "lami" },
};

const docFour: Resource<string> = {
  uid: 2,
  resourceType: ResourceType.FILM,
  data: "let me in",
};

const docFive: Resource<string[]> = {
  uid: 3,
  resourceType: ResourceType.PERSON,
  data: ["hmm", "yea"],
};

console.log(docThree, docFour, docFive);
