class ReadlineConsole {
  constructor() {
    this.numbers = [];
    this.readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async getNumbers() {
    const ask = async (question) => {
      return new Promise((resolve) => {
        this.readline.question(question, resolve);
      });
    };

    let input = await ask(
      "Enter required number of integers separated by spaces and then press enter: "
    );
    input = input.trim().replace(/\s+/g, " "); // Remove leading/trailing spaces and consecutive spaces

    let numbersArray = input.split(" ");

    for (let i = 0; i < numbersArray.length; i++) {
      let number = parseInt(numbersArray[i]);
      if (!isNaN(number)) {
        this.numbers.push(number);
      }
    }

    this.readline.close();
  }

  async showNumbers() {
    for (let i = 0; i < this.numbers.length; i++) {
      console.log(this.numbers[i]);
    }
  }

  async reverseArray() {//O(n)
    let arr = this.numbers;

    let arr2 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      arr2.push(arr[i]);
    }
    console.log("Reversed =====>", arr2);
  }
  async reverseArrayOnby2() {//O(n/2)
    let arr = this.numbers;
    let start = 0
    let end = arr.length-1
    while (start<end) {
        var temp = arr[start];
        arr[start] =  arr[end]
        arr[end] = temp
        start++;
        end--;
    }
    console.log("Reversed =====>", arr);
  }
}

(async () => {
  const readConsole = new ReadlineConsole();
  await readConsole.getNumbers();
  readConsole.showNumbers();
  //readConsole.reverseArray();
  readConsole.reverseArrayOnby2();
})();
