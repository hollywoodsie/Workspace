var unsortedArray = [4, 3, 2, 1];
console.log(unsortedArray);

function bubbleSort(arr) {
  let swapped = true;
  do {
    swapped = false;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        console.log(arr);
      }
    }
  } while (swapped);
  return arr;
}

bubbleSort(unsortedArray);
