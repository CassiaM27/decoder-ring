const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    
    //validate alphabet length
    if(!alphabet || alphabet.length !== 26) return false;
    //convert alphabets and inputs to arrays
    const firstAlphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputArray = input.toLowerCase().split("");
    const subAlphabet = alphabet.toLowerCase().split("");
    //validate alphabet contains only unique characters
    const checkForRepeats = new Set(alphabet);
    if (checkForRepeats.size < 26) return false;
    
    //declare result object to store alphabets as key:value pairs
    let result = {};
    
    //check if message should be encoded or decoded
    if(encode === true) {
      //encode message
      for(let i = 0; i < 26 ; i++) {
        result[firstAlphabetArray[i]] = subAlphabet[i]
      }
    } else {
      //decode message
      for(let i = 0; i < 26 ; i++) {
        result[subAlphabet[i]] = firstAlphabetArray[i]
      }
    }
    
    //map message to an array and then convert back to string encoding/decoding as needed
    let encodedMsg = inputArray.map(letter => {
      if(letter === " ") {
        return " "
      } else {
        return result[letter]
      }
      
    }).join("")
    return encodedMsg
  }
      
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };