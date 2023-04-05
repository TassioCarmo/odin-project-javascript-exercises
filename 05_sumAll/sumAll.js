const sumAll = function(firstNumber, lastNumber) {
    var sum = 0;
    var temp;

    if (firstNumber <= 0 || !Number.isInteger(firstNumber) || lastNumber <= 0 || !Number.isInteger(lastNumber)){
        return 'ERROR';
    }else{
        if(firstNumber > lastNumber){
            temp = firstNumber;
            firstNumber = lastNumber;
            lastNumber = temp;
        }
        while (firstNumber <= lastNumber){
            sum += firstNumber;
            firstNumber++;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
