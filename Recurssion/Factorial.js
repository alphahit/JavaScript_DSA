
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


   
    factorial(num){
        console.log("num ===>",num)
        if (num === 1)
        { 
            return 1
        }
        else
        return num*this.factorial(num-1)
    }
}

(async () => {
    const readConsole = new ReadlineConsole();
    await readConsole.getNumbers();
    //await readConsole.showNumbers();
    const product = readConsole.factorial(readConsole.numbers[0]);
    console.log('The product is:', product);
})();
