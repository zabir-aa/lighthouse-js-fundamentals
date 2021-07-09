function range (start, stop, step) {
  var output = [];
  if (start == undefined || stop  == undefined || step == undefined || start > stop || step !> 0){
    return output;
  } else {
    for (let i = start; i <= stop ; i+=step) {
      output.push(i);
    }
  return output;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));