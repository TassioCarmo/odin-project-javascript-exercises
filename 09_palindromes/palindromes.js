const palindromes = function (string) {
    let reversedString = '';
    let count = string.length-1;

    while(count >= 0){
        reversedString += string[count];
        count--;
        
    }

    string = string.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "");
    reversedString = reversedString.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "");

    if (string.toLowerCase() === reversedString.toLowerCase()){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
