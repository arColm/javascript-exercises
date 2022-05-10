const reverseString = function(string) {
    let result="";
    for(let i=0;i<string.length;i++){
        result+=string.charAt(string.length-i-1);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
