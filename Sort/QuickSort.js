
class ReadlineConsole {
    constructor() {
        this.numbers = [];
        this.readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    async getNumbers() {
        const ask = async (question) => {
            return new Promise(resolve => {
                this.readline.question(question, resolve);
            });
        };

        let input = await ask('Enter required number of integers separated by spaces and then press enter: ');
        input = input.trim().replace(/\s+/g, ' '); // Remove leading/trailing spaces and consecutive spaces

        let numbersArray = input.split(' ');

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


    //Step 1 - Pick a pivot point any element
    //Step 2 - Take that element and place it in the correct place in the sorted arrray
    //Step 3 - Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array
    //Step 4 - Repeat the process for the individual ‘left' and 'right' arrays till you have an array of length 1 which is sorted by definition
    //Step 5 - Repeatedly concatenate the left array, pivot and right array till one sorted array remains
    quickSort(arr) { // This is the name of our sorting game, and 'arr' is our list of numbers (like our toy cars).
       
        if(arr.length < 2){ // If our list has 0 or 1 number, it's already sorted (because a single toy car doesn't need sorting).
            return arr // So we just return it as is.
        }
    
        let pivot = arr[arr.length - 1]; // We pick the last number in the list as our "special number" (pivot).
    
        let left = [] // We make a new, empty list called 'left' for numbers smaller than our special number.
        let right = [] // We also make another new, empty list called 'right' for numbers bigger than our special number.
        for(let i = 0; i < arr.length - 1; i++){ // Now we start a loop to look at each number in our list (except the special number).
            if(arr[i] < pivot){ // If the current number is smaller than the special number,
                left.push(arr[i]) // We put it in the 'left' list.
            } else { // If it's not smaller (which means it's equal to or bigger),
                right.push(arr[i]) // We put it in the 'right' list.
            }
        }
        // Now we play the sorting game with the 'left' list and the 'right' list,
        // then put the sorted 'left' list, our special number, and the sorted 'right' list together.
        return [...this.quickSort(left), pivot, ...this.quickSort(right)] 
    }
    
    
}

(async () => {
    const readConsole = new ReadlineConsole();
    await readConsole.getNumbers();
    readConsole.showNumbers();
    const product = readConsole.quickSort(readConsole.numbers)
    console.log(product)
})();
