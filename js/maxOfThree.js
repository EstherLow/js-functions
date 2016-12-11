// maxOfThree(num)
//
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function maxOfThree (num1, num2, num3){
  var largest = num1;
    if (largest < num2){
          largest = num2;
          }
    if (largest < num3){
          largest = num3;
        }
    console.log(largest);
}

maxOfThree(6, 9, 4)
