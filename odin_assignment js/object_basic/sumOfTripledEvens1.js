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