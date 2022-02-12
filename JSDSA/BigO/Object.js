//Objects work well when you don't need order
//When you need fast access, insertion, update and removal(constant time)
//searching: O(n)
let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};
console.log("Keys:");
console.log(Object.keys(instructor)); //O(N): Returns an array

console.log("Values:");
console.log(Object.values(instructor)); //O(N): Returns an array

for (const [key, value] of Object.entries(instructor)) {
  console.log(`${key}: ${value}`);
} //O(N)

console.log(instructor.hasOwnProperty("firstName")); //O(N)

//Accessing Value of Keys in Objects
console.log(instructor.firstName);
console.log('******************************************');
const data = {
  code: 42,
  items: [
    {
      id: 1,
      name: "foo",
    },
    {
      id: 2,
      name: "bar",
    },
  ],
};
//Accessing Value of Keys in Objects
//https://stackoverflow.com/questions/11922383/how-can-i-access-and-process-nested-objects-arrays-or-json
console.log(data.items[1]);
console.log(data.items[1].name);
console.log(data['items'][1]['name']);
console.log('******************************************');
for (const prop in data) {
    // `prop` contains the name of each property, i.e. `'code'` or `'items'`
    // consequently, `data[prop]` refers to the value of each property, i.e.
    // either `42` or the array
    console.log(prop);
}
console.log('******************************************');