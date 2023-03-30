const economy = 4000;
const midsize = 10000;
const luxery = 20000;

function returnRental(clas, daysUsed) {
    let rent = 0; // initialize rent variable
    if(clas != economy && clas != midsize && clas != luxery){
        console.log('Invalid car type');
    } else {
        rent = clas * daysUsed;
    }
    return rent;
}

console.log(returnRental(luxery,15)); // Output: 300000
