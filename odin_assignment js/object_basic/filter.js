function oddNum(num){
    return num % 2 == 0;
}

const arr = [1,2,3,4];
const filteredArr = arr.filter(oddNum);

console.log(filteredArr);