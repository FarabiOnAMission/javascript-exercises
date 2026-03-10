const sumAll = function(num1,num2) {
    
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }

    if(num1<0 || num2<0){
        return "ERROR";
    }

    let big = Math.max(num1,num2);
    let smol = Math.min(num1,num2)-1;



    let s1 = (big*(big+1))/2;
    let s2 = (smol*(smol+1))/2;

    return s1-s2;

};

// Do not edit below this line
module.exports = sumAll;
