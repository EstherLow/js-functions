// reverseString(num)
//
// Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var string = "jag testar"

function reverseString(string) {
  var stringArray = string.split("")
  var reverse = ''
  for (var i = stringArray.length-1; i >= 0; i--){
    reverse += stringArray[i];
  }
  console.log(reverse)
}

reverseString(string)
