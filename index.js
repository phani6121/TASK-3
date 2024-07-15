const arr = [1, 5, 2, 1, 2];
const uniqueArray = [];

// Step 1: Remove duplicates and create uniqueArray
arr.forEach((element, index) => {
    if (uniqueArray.length == 0) {
        uniqueArray[index] = element;
    } else {
        let isElement = false;
        uniqueArray.forEach((checkValue) => {
            if (checkValue == element) {
                isElement = true
            }
        })
        if (!isElement) {
            uniqueArray[uniqueArray.length] = element;
        }
    }
})

console.log("Eliminate duplicate elements:", uniqueArray);

// Sort uniqueArray in ascending order (using forEach for bubble sort)
uniqueArray.forEach((_, i, arr) => {
    arr.forEach((_, j) => {
        if (arr[j] > arr[j + 1]) {
            // Swap elements
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    });
});

console.log("Ordered elements:", uniqueArray);

//  Find the second element from the end of the sorted array
const secondFromLast = uniqueArray[uniqueArray.length - 2];

console.log("Second element from last:", secondFromLast);