//JS ES6 Map
//enhancement over using an object
/* 
-Map has a delete method
-Map has a clear method to clear all data at once in a Map
-Map keeps insertion order in case you would like to iterate in order
-Map had forEach method 
-Look up an item in O(1) time by key
*/
class Contact {
  constructor(name, age, phoneNumber) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
  }
}
const contracts = new Map();
contracts.set("Shane", new Contact("Shane Crouch", 12, "111-111-1111"));
contracts.set("Rosy", new Contact("Rosy Stark", 13, "222-222-2221"));
contracts.set("Gabriel", new Contact("Gabriel Taco", 13, "333-333-3331"));
console.log(`Each Contract in The Map`);
contracts.forEach((contact) => console.log(contact));
contracts.forEach((contact) => console.log(contact.name));
console.log(contracts);
contracts.clear();
console.log("After Clearing");
console.log(contracts);
console.log(`************************************`);

class Contact1 {
  constructor(name, age, phoneNumber, parent) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.parent = parent;
  }
}

const contracts1 = new Map();
contracts1.set(
  "Shane",
  new Contact1("Shane Crouch", 12, "111-111-1111", { fn: "ABC", mn: "DEF" })
);
contracts1.set(
  "Rosy",
  new Contact1("Rosy Stark", 13, "222-222-2221", { fn: [1, 2, 3], mn: "JKL" })
);

console.log(`Each Contract in The Map`);
contracts1.forEach((contact) => console.log(contact.parent));
contracts1.forEach((contact) => console.log(contact.parent.fn));
console.log(`************************************`);
console.log("Getting a specific contact's phone number in O(1) constant");
console.log(contracts1.get("Rosy").phoneNumber);

//Check whether the Map has specific property
if (!contracts1.has("Sinha")) {
  console.log("Adding contact Sinha");
  contracts1.set(
    "Sinha",
    new Contact1("Ashish Sinha", 14, "444-444-4441", { fn: "ABCF", mn: "DEFG" })
  );
}
console.log(contracts1.get("Sinha"));

//Delete item from Map
console.log(contracts1);
console.log(contracts1.delete("Sinha"));
console.log("After Delete");
console.log(contracts1);
console.log(`************************************`);

//The constructor takes in array of arrays. Each child array is a key value pair
const PLanguage = new Map([
  [1, "JavaScript"],
  [2, "Python"],
  [3, "Java"],
]);
console.log(PLanguage.size);
console.log(PLanguage.keys());
const Keys = PLanguage.keys();
for (let key of Keys) {
  key += 1;
  console.log(key);
}
console.log(PLanguage.values());
console.log(PLanguage.entries());
for (let entry of PLanguage.entries()) {
  console.log(`Key: ${entry[0]} Value: ${entry[1]}`);
}
