function concat(arrayOne, arrayTwo) {
  let combined = [];
  for (let i=0; i<arrayOne.length;i++){
    combined.push(arrayOne[i])
  }
  for (let i=0; i<arrayTwo.length;i++){
    combined.push(arrayTwo[i])
  }
 return combined;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));
console.log(concat([], [ 9, 7, 2 ]));
console.log(concat([ 5, 10 ], []))