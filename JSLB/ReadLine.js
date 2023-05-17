class ReadlineConsole {
    constructor() {
      this.numbers = [];
    }
    async getNumbers() {
      const ask = async (question) => {
        return new Promise(resolve => {
          process.stdout.write(question);
          process.stdin.once('data', (data) => {
            resolve(data.toString().trim());
          });
        });
      };
      let input = '';
      while (this.numbers.length < 5) {
        input = await ask('Enter numbers separated by spaces: ');
        const newNumbers = input.split(' ').map(Number);
        for (let i = 0; i < newNumbers.length; i++) {
          this.numbers.push(newNumbers[i]);
          if (this.numbers.length >= 5) {
            break;
          }
        }
      }
    }
    async showNumbers() {
      for (let i = 0; i < this.numbers.length; i++) {
        console.log(this.numbers[i]);
      }
    }
  }
  (async () => {
    const readConsole = new ReadlineConsole();
    await readConsole.getNumbers();
    readConsole.showNumbers();
  })();
  