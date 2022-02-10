/* //Normal Function
export default function doSomething () {

}
//Arrow Function
export const DoSomething = () => {

} */

// && and ||
let age = 16;
let namee = age>10 && "Prateek";//If age greater than 10 then do this(after the &&) 
console.log(namee);
//The opposite of line 14
let age1 = 9;
let name1 = age1>10 || "Prateek1";//If age is not greater than 10 then do this(after the ||) 
console.log(name1);
//Ternary Operators
let age2 = 20;
let name2 = age2> 10?"Prateek2":"Priyadarshi2";
console.log(name2);


//Object
//Destructuring
const person = {
    name3: "Prateek3",
    age3: 23,
    isMarried: false
}
const person1 = {
    name4: "Prateek3",
    age4: 23,
    isMarried1: true
}

const {name3, age3, isMarried} = person
console.log(name3)
const {name_, age_, isMarried_} = person1
console.log(name_)

const name5 = "Prateek5"
const age5 = 10;
const isMarried2 = true;
const person2 = {
//When key value pair has the same name that the variable you are sending you don't have to repeat the variable name again
    name5,
    age5,
    isMarried2,
}
console.log(name5)
console.log(person2.name5)

//Copying Object and changing one value
const person3 = {
    ...person2, name5 : "Priyadarshi5",
}
console.log(person3.name5)


//Arrays
const names = ["Priyadarshi5", "Priyadarshi", "Prateek3"]
console.log(names)
const names1 = [...names, "Prateek2"]
console.log(names1)
//.map() : The map will take an argument which defines 
const names2 = names1.map((name)=>{
    return name + "1"
});
console.log("After Map")
console.log(names1)
console.log(names2)



let names3 = ["Priyadarshi5", "Priyadarshi", "Prateek3", "Priyadarshi", "Prateek"]
const names4 = names3.filter((name)=>{//return condition
    return name !== "Priyadarshi"
})
console.log(names4)




/* function categoryOfString(N,str) {

    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var data = [];
    var data1 = [];
    var mid = "";
    for(var i =0;i<26;i++){
        mid = alphabet.slice(i,i+1);
        data.push(mid);
        
    }
    

    for(var i = 0;i<str.length;i++){
        data1.push(mid.indexOf(str.slice(i,i+1)));
    }
    console.log(data);
} */
