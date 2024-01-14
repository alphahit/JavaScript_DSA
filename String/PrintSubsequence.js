//The substring() method extracts characters, between two indices (positions), 
//from a string, and returns the substring.
// The substring() method extracts characters from start to end (exclusive).
// The substring() method does not change the original string.

function stringSubsequence(input, output){
    if(input.length === 0){
        console.log(output)
        return
    }
    stringSubsequence(input.substring(1), output);
    stringSubsequence(input.substring(1), output + input[0]);
}

const inputString = "abc";
stringSubsequence(inputString, "");

// printSubsequences("123", "")
// ├─ printSubsequences("23", "")
// │  ├─ printSubsequences("3", "")
// │  │  ├─ printSubsequences("", "")      // outputs ""
// │  │  └─ printSubsequences("", "3")     // outputs "3"
// │  └─ printSubsequences("3", "2")
// │     ├─ printSubsequences("", "2")     // outputs "2"
// │     └─ printSubsequences("", "23")    // outputs "23"
// └─ printSubsequences("23", "1")
//    ├─ printSubsequences("3", "1")
//    │  ├─ printSubsequences("", "1")     // outputs "1"
//    │  └─ printSubsequences("", "13")    // outputs "13"
//    └─ printSubsequences("3", "12")
//       ├─ printSubsequences("", "12") 
//       └─ printSubsequences("", "123")   // outputs "123"
