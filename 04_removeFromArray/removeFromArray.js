const removeFromArray = function(array, ...args) {

    var item = [...args];
    var length = item.length-1;


    var index ;
    while(length >= 0){
        index = array.indexOf(item[length]);


        if (index !== -1){
            array.splice(index, 1);
        }
        length--;


    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
