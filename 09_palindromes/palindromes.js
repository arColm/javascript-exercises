

const palindromes = function (string) {
    const illegalCharString = ",./?! ";
    const illegalCharArray = Array.from(illegalCharString);
    let charArray = Array.from(string);
    while(charArray.length!==0){
        let validChar=false;
        let char = "a";
        let firstChar="a";
        //Find last char that is legal
        while(!validChar){
            char=charArray.pop();
            validChar=true;
            //Check if char is illegal.
            for(let i=0;i<illegalCharArray.length;i++){
                if(illegalCharArray[i]===char){
                    validChar=false;
                    break;
                }
            }
        }
        validChar = false;
        //Find first char that is legal
        while(!validChar) {
            firstChar=charArray.shift();
            validChar=true;
            //Check if char is illegal.
            for(let i=0;i<illegalCharArray.length;i++){
                if(illegalCharArray[i]===firstChar){
                    validChar=false;
                    break;
                }
            }
        }
        if(firstChar !==undefined && char.toLowerCase()!==firstChar.toLowerCase()){
            console.log(charArray);
            return false;
        }


    }



    return true;
};


palindromes('racecar')
// Do not edit below this line
module.exports = palindromes;
