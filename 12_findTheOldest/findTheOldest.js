const findTheOldest = function(people) {
    console.log(new Date().getFullYear());
    return people.reduce((oldestPerson,currentPerson) => {
        let currentPersonAge = 0;
        let oldestPersonAge = 0;
        if(currentPerson.yearOfDeath!==undefined) {
            currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        } else {
            currentPersonAge = new Date().getFullYear() - currentPerson.yearOfBirth;
        }
        
        if(oldestPerson.yearOfDeath!==undefined) {
            oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        } else {
            oldestPersonAge = new Date().getFullYear() - oldestPerson.yearOfBirth;
        }
        
        if(currentPersonAge > oldestPersonAge) {
            return currentPerson;
        } else return oldestPerson;

        
    })
};

// Do not edit below this line
module.exports = findTheOldest;
