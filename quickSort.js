function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];
    
  for (let i = 1; i < arr.length; i++) {
    pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
    }
  return quickSort(left).concat(pivot, quickSort(right));
  }
  

var array = [5,7,2,1,4,9,10,42]

console.log(quickSort(array))