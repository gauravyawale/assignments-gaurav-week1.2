/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (!str1 && !str2) {
    return true;
  } else if (!str1 || !str2) {
    return false;
  } else if (str1.length !== str2.length) {
    return false;
  }

  let splitStr1 = str1.toLowerCase().split("");
  let splitStr2 = str2.toLowerCase().split("");

  for (let i = 0; i < splitStr1.length - 1; i++) {
    for (let j = i + 1; j < splitStr1.length; j++) {
      if (splitStr1[i] > splitStr1[j]) {
        [splitStr1[i], splitStr1[j]] = [splitStr1[j], splitStr1[i]];
      }
    }
  }
  for (let i = 0; i < splitStr2.length - 1; i++) {
    for (let j = i + 1; j < splitStr2.length; j++) {
      if (splitStr2[i] > splitStr2[j]) {
        [splitStr2[i], splitStr2[j]] = [splitStr2[j], splitStr2[i]];
      }
    }
  }

  return splitStr1.join("") === splitStr2.join("");
}

module.exports = isAnagram;
