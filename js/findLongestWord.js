// findLongestWord(num)
//
// Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.

var wordArray = ['the', 'these', 'their']

function findLongestWord(){

  for (var i = 0; i < wordArray.length; i++){
    longest = 0
    if (longest < wordArray[i].length){
        longestWord = wordArray[i]
        longest = wordArray[i].length
    }
  }
  console.log(longest)
  }
findLongestWord(wordArray)
