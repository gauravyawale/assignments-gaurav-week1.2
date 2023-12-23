/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length === 0) {
    return true;
  }

  let pointer1 = 0;
  let pointer2 = str.length - 1;

  while (pointer1 < pointer2) {
    if (
      (str[pointer1].toUpperCase().charCodeAt() < 65 ||
        str[pointer1].toUpperCase().charCodeAt() > 90) &&
      (str[pointer1].charCodeAt() < 48 || str[pointer1].charCodeAt() > 57)
    ) {
      pointer1++;
    } else if (
      (str[pointer2].toUpperCase().charCodeAt() < 65 ||
        str[pointer2].toUpperCase().charCodeAt() > 90) &&
      (str[pointer2].charCodeAt() < 48 || str[pointer2].charCodeAt() > 57)
    ) {
      pointer2--;
    } else if (str[pointer1].toUpperCase() !== str[pointer2].toUpperCase()) {
      return false;
    } else {
      pointer1++;
      pointer2--;
    }
  }

  return true;
}

module.exports = isPalindrome;
