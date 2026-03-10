const findTheOldest = function(arr) {
    let year=-1;
    let person={};
    for(let i=0;i<arr.length;i++){
        let birthYear = arr[i].yearOfBirth;
        let deathYear = arr[i].yearOfDeath;
        if(deathYear == undefined){
            const d = new Date();
            deathYear = d.getFullYear();
        }
        if(deathYear - birthYear >=year){
            year = deathYear - birthYear;
            person = arr[i];
        }
    }

    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
