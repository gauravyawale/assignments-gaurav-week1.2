/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  if (!str || str.length === 0) {
    return 0;
  }

  let updatedStr = str.toLowerCase();
  let totalVowelCount = 0;

  for (let i = 0; i < updatedStr.length; i++) {
    if (
      updatedStr[i] === "a" ||
      updatedStr[i] === "e" ||
      updatedStr[i] === "i" ||
      updatedStr[i] === "o" ||
      updatedStr[i] === "u"
    ) {
      totalVowelCount += 1;
    }
  }

  return totalVowelCount;
}

module.exports = countVowels;
