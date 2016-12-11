
var num;
function isPrime (num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
        console.log(num + ' not prime 1.');
        break;
      }
    if ((num % i === 0) && (i !== num)) {
      console.log(num + ' is not prime2.');
      break;  }
    }
    console.log(num)
  }

isPrime (13)
