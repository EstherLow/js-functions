// sillySum(arr)
//
// Write a function that takes an array of numbers, and returns the sum of each number multiplied by its index.
//
// count += (number * index)

//num1x0+num2*1+num3*2

var numArray = [1,2,3]
var subTotal = 0

function sillySum (numArray){
  for (var i = 0; i < numArray.length; i++) {
      subTotal = subTotal + (numArray[i] * i)
  }
  console.log(subTotal);
}

sillySum(numArray)
