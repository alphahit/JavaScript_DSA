  const str = "Hello Alpha";
  const reversed = reverseStringTwo(str);

  console.log(reversed)


  function reverseStringOne(str) {
    return str.split("").reverse().join("");
  }

  function reverseStringTwo(str) {
    let reversed = ""
    for (const c of str) {
        reversed = c + reversed;
    }
    return reversed;
  }