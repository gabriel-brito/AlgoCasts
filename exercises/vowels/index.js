// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const letters = ['a', 'e', 'i', 'o', 'u'];
  const cleanString = str.replace(/\^W/g, '').toLowerCase().split('').sort().join('')
  let count = 0;
  
  for (let char in cleanString) {
      const element = cleanString.charAt(char);
      
      if(letters.some(letter => letter === element)) {
          count++
      }
  }
  
  return count;
}

module.exports = vowels;
