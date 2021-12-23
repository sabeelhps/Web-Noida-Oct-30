


// Filter method - Array method

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

const evenNums = arr.filter(isEven);

// const evenNums = arr.filter((num) => num % 2 === 0);

console.log(arr);
console.log(evenNums);



