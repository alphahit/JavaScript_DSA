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
