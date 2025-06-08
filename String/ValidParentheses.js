/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {


//     if(s.length % 2 !== 0){
//         return false
//     }
//   let elements = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
//       elements.push(s[i]);
 
//     } else if (
//       (s[i] === ")" && elements[elements.length - 1] === "(") ||
//       (s[i] === "}" && elements[elements.length - 1] === "{") ||
//       (s[i] === "]" && elements[elements.length - 1] === "[")
//     ) {
//     //    j-- 
//       elements.pop();
 
//     }else{
//         return false
//     }
//   }

//   return elements.length === 0
// };



/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // If the length is odd, it's impossible to have all pairs matched.
    if (s.length % 2 !== 0) {
        return false;
    }

    const stack = []; // Using 'stack' for clarity
    const map = { // A map for quick lookup of matching parentheses
        "(": ")",
        "{": "}",
        "[": "]"
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If it's an opening bracket, push its corresponding closing bracket onto the stack.
        if (map[char]) {
            stack.push(map[char]);
        } else {
            // If it's a closing bracket, check if it matches the top of the stack.
            // If the stack is empty or the top element doesn't match, it's invalid.
            if (stack.length === 0 || stack.pop() !== char) {
                return false;
            }
        }
    }

    // After iterating through the string, if the stack is empty, all brackets were matched.
    return stack.length === 0;
};

console.log(isValid("()[]{}"));
