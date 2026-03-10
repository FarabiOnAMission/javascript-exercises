const palindromes = function (strng) {
    let closedstr = strng.toLowerCase().replace(/[^a-z0-9]/g, "");
    let sz = closedstr.length;
    for(let i=0;i<sz/2;i++){
        if(closedstr[i]!=closedstr[sz-i-1]) return false;
    }

    return true;
}; 

// Do not edit below this line
module.exports = palindromes;
