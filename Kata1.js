const sumLargestNumbers = function(data) {
  // Put your solution here
  var largestNum=0;
  var nextLargest=0;
  for (let i=0; i<data.length; i++){
    if (data[i] > largestNum){
      nextLargest = largestNum;
      largestNum = data[i];
    } else if (data[i] > nextLargest) {
      nextLargest = data[i];
    }
  }
  return (Number(largestNum) + Number(nextLargest));
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));