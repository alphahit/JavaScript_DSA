
class ReadlineConsole {
    constructor() {
        this.numbers = [];
        //this.testArr = [];
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


   
    rangeofnum(startNum, endNum) {
        console.log("num ===>",startNum,endNum)
        if (endNum < startNum)
        { 
            return []
        }
        else{
            const numbers = this.rangeofnum(startNum, endNum-1);
            numbers.push(endNum)
            return numbers;
        }
       
    }
}

(async () => {
    const readConsole = new ReadlineConsole();
    await readConsole.getNumbers();
    //await readConsole.showNumbers();
    const product = readConsole.rangeofnum(readConsole.numbers[0],readConsole.numbers[1]);
    console.log('The product is:', product);
})();
