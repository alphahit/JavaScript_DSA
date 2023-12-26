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
  
     quickSort(arr) {
      let l = 0
      let r = arr.length-1
      let pivot = arr[r]
      let left = []
      let right = []
      if(arr.length <2){
        return arr
      }
      for(let i = l; i < r; i++) {
        if(arr[i] < pivot){
            left.push(arr[i])
        }else if(arr[i] > pivot){
            right.push(arr[i])
        }
      }
      return [...this.quickSort(left),pivot,...this.quickSort(right)]
    }

    mergeTwoSorted(arr1, arr2) {
        let arr3 = [];
        let i = 0, j = 0;
    
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                arr3.push(arr1[i]);
                i++;
            } else {
                arr3.push(arr2[j]);
                j++;
            }
        }
    
        // Add remaining elements of arr1
        while (i < arr1.length) {
            arr3.push(arr1[i]);
            i++;
        }
    
        // Add remaining elements of arr2
        while (j < arr2.length) {
            arr3.push(arr2[j]);
            j++;
        }
    
        return arr3;
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
  
    const sortedArray1 =  readConsole.quickSort(readConsole.numbers);
    const sortedArray2 =  readConsole.quickSort(readConsole.numbers2);
  
    // console.log("Sorted Array 1:", sortedArray1);
    // console.log("Sorted Array 2:", sortedArray2);
    //let flag = true;
        
        console.log(readConsole.mergeTwoSorted(sortedArray1,sortedArray2))
    readConsole.readline.close(); // Close readline here, after all operations are done

  })();
  