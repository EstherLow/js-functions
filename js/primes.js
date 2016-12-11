// isPrime(num)
// Create a function to return true or false if a number passed in a prime number.
// primes(max)
// Using your isPrime() function, create a function primes that will return an array of all prime numbers up to a certain amount.

var num;
function isPrime (num) {
  for (var i = 2; i < num; i++) {
    if ((num % i === 0) && (i !== num)) { break; }  // 12%2=0 && 2 is not 12, stop
      else {
        return num; }
    }
      console.log(num);
  }

isPrime(3)

// var primeArray = [];
//
// function primes (max) {
//     for (var x = 2; x <= max; x++) {
//          var y = isPrime(x)
//         //  console.log(y);
//          primeArray.push(y);
//        }
//        console.log(primeArray);
//     }
//
// primes(13)
