function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
                console.log(j)
            }
            inputArr[j+1] = current;
            
        }
    return inputArr;
}

var unsortedArray = [4,3,1,5,2]

console.log(insertionSort(unsortedArray))