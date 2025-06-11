/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sum = 0
    let max = -99999
    let min = 99999
    for(let i = 0; i < salary.length; i++){
        sum = sum += salary[i]
        if(salary[i] > max){
            max = salary[i]
        }
         if(salary[i] < min){
            min = salary[i]
        }
    }

    return salary.length > 2 ? (sum - max -min)/(salary.length -2)  : (sum - max -min)/(salary.length -1)
};