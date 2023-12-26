
class ReadlineConsole {
    //Class Constructor: 
    //In JavaScript, a constructor is a special method for creating and initializing an object created with a class. 
    //In ReadlineConsole class, the constructor() method sets up the initial state of an object.
    constructor() {
        this.numbers = [];//This line initializes an array property called numbers on the class instance. This array will be used to store the numbers that are input by the user.
        //The this keyword refers to the current instance of the class, so this.numbers is a property specific to each instance of ReadlineConsole.
        this.readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });//This line sets up a readline interface for input/output operations in the console.
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


   
    // palindrom(num){
    //     console.log("num ===>",num)
    //     if(num<0){
    //         return false
    //     }
    //     let originalNum = num
    //     let reversedNum = 0
    //     while(num>0){
    //         reversedNum = (reversedNum*10)  + (num%10)    
    //         console.log("reversedNum ===>",reversedNum)   
    //         num = Math.floor(num / 10);
    //     }
    //     return originalNum === reversedNum
    // }



    isPalindromeRecursive(num) {
        if (num < 0) return false; // Negative numbers are not palindromes

        const digitCount = Math.floor(Math.log10(num)) + 1;
        return this.isPalindromeHelper(num, digitCount);
    }

    isPalindromeHelper(num, digitCount) {
        if (num === 0) return true;
        if (digitCount <= 1) return true;

        const firstDigit = Math.floor(num / Math.pow(10, digitCount - 1));
        const lastDigit = num % 10;

        if (firstDigit !== lastDigit) return false;

        // Remove the first and last digit
        num = Math.floor((num % Math.pow(10, digitCount - 1)) / 10);
        digitCount -= 2;

        return this.isPalindromeHelper(num, digitCount);
    }
}

(async () => {
    const readConsole = new ReadlineConsole();
    await readConsole.getNumbers();
    //await readConsole.showNumbers();
    const isPalindrome = readConsole.isPalindromeRecursive(readConsole.numbers[0]);
    console.log('Is palindrome:', isPalindrome);
})();
