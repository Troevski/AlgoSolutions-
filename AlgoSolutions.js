// 1) Given an array of banknotes of certain denominations [1, 2, 5, 10, 20, 50],their number is unlimited.
// It is necessary to give him this money using the minimum number of banknotes.

const getCash = (bills, total) => {
   
    bills.sort((a,b) => b - a);

    let totalCash = [];
    let remaining = total;
    if(remaining === 0) return 'Cannot make the exact total with given bills';

    for(let i = 0; i < bills.length; i++){
        let cash = bills[i];
        
        while(remaining - cash >= 0){
        totalCash.push(cash);
        remaining -= cash
        }
    }

    return totalCash
};
  
  

console.log(getCash([1, 2, 5, 10, 20, 50], 91)); // [ 50, 20, 20, 1 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 82)); // [ 50, 20, 10, 2 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 73)); // [ 50, 20, 2, 1 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 40)); // [ 20, 20 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 12)); // [ 10, 2 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 3)); // [ 2, 1 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 1)); // [ 1 ]
console.log(getCash([1, 2, 5, 10, 20, 50], 0)); // ['some tekst']



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2) isPalindrome


const isPalindrome = (str) => {
   
    str = str.toLowerCase().replace(/[^a-zа-я0-9]/gi, '');
    
    let objCounter = {};
    let totalObjNums = 0;
    
    for(let i = 0; i < str.length; i++){
      let letter = str[i];
      
      if(!objCounter[letter]){
        objCounter[letter] = 1
      }else{
        objCounter[letter] ++
      }
    }
    
    for(let key in objCounter){
      if(objCounter[key] % 2 !== 0){
        totalObjNums++
          if(totalObjNums > 1) return false
      }
    }
    
    return true
  }
  
  console.log(isPalindrome('0_0 (: /-\ :) 0–0')) // true
  console.log(isPalindrome('My age is 0, 0 si ega ym.')) // true
  console.log(isPalindrome('топот')); // trueee
  console.log(isPalindrome('л')); // true
  console.log(isPalindrome('абвгвбж')); //false
  console.log(isPalindrome('А муза рада музе без ума да разума')); // trueee
  console.log(isPalindrome('а роза упала на лапу Азора')); // true
  console.log(isPalindrome('1')); //true
  console.log(isPalindrome('91019')); //true
  console.log(isPalindrome('22.02.2022')); //true
  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
