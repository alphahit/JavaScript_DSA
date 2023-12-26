
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


   //Non recurssively multiply
    // async multiply() {
    //     let arr = this.numbers;
    //     let product = 1;

    //     for (let i = 0; i < arr.length; i++) {

    //         product *= arr[i]
    //     }
    //     console.log(product)
    // }
    multiplyRecurssion(arr){
        console.log("arr ===>",arr)
        if (arr.length === 0)
        { 
            return 1
        }
        else
        return arr[arr.length-1]*this.multiplyRecurssion(arr.slice(0, -1))
    }
}

(async () => {
    const readConsole = new ReadlineConsole();
    await readConsole.getNumbers();
    //await readConsole.showNumbers();
    const product = readConsole.multiplyRecurssion(readConsole.numbers);
    console.log('The product is:', product);
})();
