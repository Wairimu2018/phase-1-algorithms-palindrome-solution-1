// Write your algorithm here
function reverseString(word){
  return word.split("").reverse().join("")
  //reverse the array
  //create  a string from the reversed array
  //return the reversed string
  return reversedWord;
}

function isPalindrome(word) {
  
  
//reverse the input string
const reversedWord = reverseString(word)
//if the input t is the same as the reversed input
return word === reversedWord;

}
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
