// letterCount(word)
//
// Write a function that takes a string that finds out how many times a character occurs. For example, the string "apple" would print the following:
// key = 'a'
// value = count of 'a' in string

var string = 'butterfly'
var stringArray = string.split('').sort()
// var values = [];
var objArray = {};

console.log('keys ' + stringArray);

 function countLetter() {
   for (var i = 0, h = 0 + 1; i < stringArray.length - 1; i++, h++) {
       var count = 1;
       if (stringArray[i] == stringArray[h]) {
        //  console.log(stringArray[i] + ' ' + stringArray[h]);
         var newCount = count + 1;
         values.push(newCount);
        //  console.log('The loop ran the 1st block. Count:' + newCount + ' values:' + values);
   } else
     {
    //  console.log(stringArray[i] + ' ' + stringArray[h]);
     newCount = count + 0;
     values.push(newCount);
    //  console.log('the loop ran the second block. Count:' + newCount + ' values:' + values);
     }
     objArray[stringArray[i]] = values[i];
 }

//     console.log('Values ' + values);
//     console.log(objArray)
 }

countLetter(string)
