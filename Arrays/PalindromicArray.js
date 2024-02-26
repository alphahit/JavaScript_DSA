function isPalindrome(number){
    function findDigits(n,count = 0) {
        if(n === 0){
            return count;
        }
        return findDigits(Math.floor(n/10), count + 1)
    }

    function checkPalindrome(num, digitCount){
        if(num === 0 || digitCount <=1){
            return true;
        }
        let divisor = Math.pow(10, digitCount-1)
        let firstDigit = Math.floor(num / divisor)
        let lastDigit = num % 10
        if(firstDigit !== lastDigit){
            return false;
        }
        num = Math.floor((num % divisor) / 10);
        digitCount -= 2

        return checkPalindrome(num, digitCount);
    }
    if (number < 0) {
        return false; 
      }

      let digitCount = findDigits(number);
      return checkPalindrome(number, digitCount);
}

let arr = [111, 222, 333, 444, 555]
let arr2 = [111, 121, 131, 20]

function checkArrayPalindrome(arr){
    let flag = 1
    for(let i =0; i<arr.length; i++) {
        if(!isPalindrome(arr[i])){
            flag = 0
            break
        }
    }
    return flag
}



console.log(checkArrayPalindrome(arr))
console.log(checkArrayPalindrome(arr2))