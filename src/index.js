module.exports = function toReadable (number) {
    let readableNums = {
        0: 'zero',
        1: 'one', 
        2: 'two', 
        3: 'three', 
        4: 'four', 
        5: 'five', 
        6: 'six', 
        7: 'seven', 
        8: 'eight',
        9: 'nine', 
        10: 'ten', 
        11:'eleven', 
        12:'twelve', 
        13:'thirteen', 
        14: 'fourteen', 
        15: 'fifteen', 
        16:'sixteen',
        17:'seventeen',
        18: 'eighteen', 
        19: 'nineteen'
    }
     let readableDozens = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
     }

     if(number < 20){
        return readableNums[number]
     }

     if(number < 100 && number % 10 === 0){
        return readableDozens[number]
     }

    if(number > 20 && number < 100 && number % 10 !== 0){
      return readableDozens[ number - (number % 10)] + ' ' + readableNums[number % 10] 
    }
    

    if(number === 100){
        return "one hundred"
    }
  let strNum =  String(number)
  let num = strNum[1]+strNum[2]
  console.log(num)
    if(number > 100 && number < 1000 && number % 10 === 0 && num !== '10' && strNum[1] !== '0' ){
      let strNum =  String(number)
      return readableNums[strNum[0]] + " " + 'hundred' + " " + readableDozens[strNum[1] * 10]
    }
  
   if(number > 100 && number < 1000 &&  strNum[1] === '0'  && strNum[2] !== '0' ){
       
        return readableNums[strNum[0]] + " " + 'hundred'   + " " + readableNums[number% 10]
      }
    
    if(number > 100 && number < 1000 && number % 10 !== 0 && strNum[1] > 1   && strNum[2] !== '0'){
      
        return readableNums[strNum[0]] + " " + 'hundred' + " " + readableDozens[strNum[1] * 10] + " " + readableNums[strNum[2]]
      }

   if(number > 100 && number < 1000 && number % 10 !== 0 && strNum[1] === '1'  && strNum[2] !== '0' ){
     
        return readableNums[strNum[0]] + " " + 'hundred' + " " + readableNums[num]
      }

   if(number > 100 && number < 1000  && strNum[1] === '1' && num === '10' &&  strNum[2] !== '0'){
     
        return readableNums[strNum[0]] + " " + 'hundred' + " " + readableNums[num]
      }

   if(number > 100 && number < 1000  && num  === '00'){
     
        return readableNums[strNum[0]] + " " + 'hundred' 
      }

        if(number > 100 && number < 1000  && num  === '10'){
     
        return readableNums[strNum[0]] + " " + 'hundred' + ' ' + readableNums[num]
      }
  
}
