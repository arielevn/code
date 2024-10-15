function reduce(num){
    return num.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
}

const arr = [2,4];
const result = reduce(arr);

console.log(result)