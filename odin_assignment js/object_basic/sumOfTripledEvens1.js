function sumOfTripledEvens(array) {
    return array
    .filter((num) => num % 2 === 0)
      //checking if num is even
    .map((num) => num * 3)
      // multiple num to 3
    .reduce((acc, curr) => acc + curr);
      //sum of accumulated and currentItem
  }

const arr = [1,2,3,4];
const TripledEvens = sumOfTripledEvens(arr);

console.log(TripledEvens);

//question
// acc = accumulated, where is it from? 
// curr = currentItem, where is it from?
// answer for both questions: implicit relationship

//The process:
//Even numbers: [2, 4]
// Tripled even numbers: [6, 12]
// Accumulator: 0 Current Value: 6
// Accumulator: 6 Current Value: 12
// Final sum: 18