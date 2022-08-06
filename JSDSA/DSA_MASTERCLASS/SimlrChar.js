//Count number of character occurences in a string

function charCount(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}


function charCount1(str) {
    let obj = {};
    for (let char of str) {
      char = char.toLowerCase();
      if (/[a-z0-9]/.test(char)) {
        if (obj[char] > 0) {
          obj[char]++;
        } else {
          obj[char] = 1;
        }
      }
    }
    return obj;
  }


  function charCount2(str) {
    let obj = {};
    for (let char of str) {
      char = char.toLowerCase();
      if (/[a-z0-9]/.test(char)) {
        obj[char] = ++obj[char] || 1;
        //It takes a char and accesses the corresponding value in our object 
        //and if the value exists then we are going to add 1 (obj[char] = 1) or if it's false we are going to set it to one
      }
    }
    return obj;
  }



//The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.
//The charAt() method returns the character at a specified index (position) in a string.
const charCount3 = (str) => {
    let obj = {};
    for (let char of str) {
     
      if (isAlphaNumeric(char)) {
        char = char.toLowerCase();
        obj[char] = ++obj[char] || 1;
       
      }
    }
    return obj;
  }

const isAlphaNumeric = (char) => {
    let code = char.charCodeAt(0);
    if(
        !(code> 47 && code < 58) && //numeric (0-9)
        !(code > 64 && code < 91) && //upper alpha (A-Z)
        !(code > 96 && code < 123) //lower alpha (a-z)
    ){
        return false;
    }
    return true;
} 


console.log('*********For Loop***********', charCount('Hello11 hi!'))

console.log('******For OF********', charCount1('Hello11 hi!'))

console.log('******For OF With || ********', charCount2('Hello11 hi!'))

console.log('******For OF With || and charCodeAt with ES6 ********', charCount3('Hello11 hi!'))