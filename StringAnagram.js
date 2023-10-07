// Anagram : another string that contains the same characters, only the order of characters can be different 

let str = "hello"
let str1 = 'lello'
let str2 = 'hello'
let arr =[]
let obj ={} 

// for (let i = 0; i < str.length; i++) { 
//     arr.push(str[i]); 
// };
// console.log(arr)

// let arr1 = arr.map(item => {
//     return ()
// })

const isAnagram = function(str,str1) {
  let obj ={}
  let obj1 = {}
  if(str.length != str1.length){
    return false + '1'
  }
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    if (obj1[letter]) {
      obj1[letter]++;
    } else {
      obj1[letter] = 1;
    }
  }
  console.log(obj)
  console.log(obj1)

  for(const key of Object.keys(obj)){
    if(
      !obj1.hasOwnProperty(key) 
      || 
      obj[key]!==obj1[key]
      
      ){
       
      return false  
    }
  }
 
  return true

}    

console.log(isAnagram(str,str1))
console.log(isAnagram(str,str2))



  

 