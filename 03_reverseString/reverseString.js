const reverseString = function(string) {
let reversedString = '';
let count = string.length-1;

while(count >= 0){
    reversedString += string[count];
    count--;
    
}

return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
