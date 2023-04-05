const repeatString = function(string,times) {
    let result = '';
    if(times < 0){
        result = 'ERROR';
        return result;
    }else if(times == 0){
        return result;
    }else{
        while(times >= 1){
            result += string;
            times--;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
