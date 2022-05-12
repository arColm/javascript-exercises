const fibonacci = function(num) {
    const fibonacciArray = [1,1];
    if(num<0) return "OOPS";

    for(let i=2;i<num;i++){
        fibonacciArray.push(fibonacciArray[i-2]+fibonacciArray[i-1]);
    }
    return fibonacciArray[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
