const reverseString = function(strng) {
    let reversed='';
    for(let i=strng.length - 1 ; i>=0;i--){
        reversed+=strng[i];
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
