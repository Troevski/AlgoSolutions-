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



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



