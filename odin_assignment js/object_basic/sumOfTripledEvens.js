function sumOfTripledEvens (array){
    let sum = 0;
    // If the element is an even number
    for (let i = 0; i < array.length; i++){
        // Multiply this number by three
        if (array[i] % 2 == 0){
            const tripleEvenNumber = array[i] * 3;
        
        // Add the new number to the total
        sum += tripleEvenNumber;
        }
    }

    return sum;
}

const arr = [1,2,3,4];
const TripledEvens = sumOfTripledEvens(arr);

console.log(TripledEvens)