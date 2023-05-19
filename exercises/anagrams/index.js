// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function mapString(string, object) {
  for (const char of string) {
    const lower = char.toLowerCase()

    object[lower] = object[lower] + 1 || 1
  }
}

function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) return false;
  
  const mapA = {}
  const mapB = {}

  mapString(stringA, mapA);
  mapString(stringB, mapB);

  for (const key in mapA) {
    if (mapA[key] !== mapB[key]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
