type StringOrNum = string | number;
type objectWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objectWithName, message: string) => {
  console.log(` ${user.name} says hello`);
};

const greetAgain = (user: objectWithName, message: string) => {
  console.log(`${user.name} says hello too `);
};
