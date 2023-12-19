class ReadlineConsole {
  constructor() {
    this.numbers = [];
    this.numbers2 = [];
    this.readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  async getNumbers(promptText) {
    const ask = (question) =>
      new Promise((resolve) => this.readline.question(question, resolve));

    let input = await ask(promptText);
    input = input.trim().replace(/\s+/g, " "); // Remove leading/trailing spaces and consecutive spaces

    let numbersArray = input
      .split(" ")
      .map((num) => parseInt(num))
      .filter((num) => !isNaN(num));
    return numbersArray;
  }

  async showNumbers() {
    console.log(this.numbers);
    console.log(this.numbers2);
  }

  async insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }
}

(async () => {
  const readConsole = new ReadlineConsole();
  readConsole.numbers = await readConsole.getNumbers(
    "Enter numbers for the first array separated by spaces: "
  );
  readConsole.numbers2 = await readConsole.getNumbers(
    "Enter numbers for the second array separated by spaces: "
  );

  await readConsole.showNumbers();

  const sortedArray1 = await readConsole.insertionSort(readConsole.numbers);
  const sortedArray2 = await readConsole.insertionSort(readConsole.numbers2);

  console.log("Sorted Array 1:", sortedArray1);
  console.log("Sorted Array 2:", sortedArray2);
  let flag = true;
  if (sortedArray1.length !== sortedArray2.length) {
    flag = false;
  } else {
    for (let i = 0; i < sortedArray1.length; i++) {
      if (sortedArray1[i] !== sortedArray2[i]) {
        flag = false;
      }
    }
  }
  flag
    ? console.log(
        "<================================Arrays are equal================================>"
      )
    : console.log(
        "<================================Arrays are not equal================================>"
      );

  readConsole.readline.close(); // Close readline here, after all operations are done
})();
