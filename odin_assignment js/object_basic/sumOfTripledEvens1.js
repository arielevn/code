function sumOfTripledEvens(array) {
    return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
  }

const arr = [1,2,3,4];
const TripledEvens = sumOfTripledEvens(arr);

console.log(TripledEvens);