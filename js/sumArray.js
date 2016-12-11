// sumArray(num)
//
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var numArray

function sumArray(numArray){
  var output = 0;
  for (var i = 0; i < numArray.length; i++) {
    output = numArray[i] + output
}
  console.log(output);
}

function multiplyArray(numArray){
  var output = 1;
  for (var i = 0; i < numArray.length; i++) {
    output = numArray[i] * output
}
  console.log(output);
}

numArray = [1,2,3,4]
sumArray(numArray)
multiplyArray(numArray)
