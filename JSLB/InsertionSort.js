
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

    async insertionSort() {
        let arr = this.numbers;


        for (let i = 1; i < arr.length; i++) {

            let current = arr[i]
            let j = i - 1
            while (arr[j] > current && j >= 0) {
                arr[j + 1] = arr[j]
                j--
            }
            arr[j + 1] = current;
        }
        console.log(arr)
    }
}

(async () => {
    const readConsole = new ReadlineConsole();
    await readConsole.getNumbers();
    readConsole.showNumbers();
    readConsole.insertionSort()
})();
