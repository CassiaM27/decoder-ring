const polybiusModule = (function () {

  function polybius(input, encode = true) {

    // define polybius square for this function
    const encodeObj = {
      "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
      "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
      "l": "13", "m": "23", "n": "33", "o": "43", "p": "53",
      "q": "14", "r": "24", "s": "34", "t": "44", "u": "54",
      "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"
    }
    // define inverse square for decoding
    const decodeObj = {
      "11": "a", "21": "b", "31": "c", "41": "d", "51": "e",
      "12": "f", "22": "g", "32": "h", "42": "i/j", "52": "k",
      "13": "l", "23": "m", "33": "n", "43": "o", "53": "p",
      "14": "q", "24": "r", "34": "s", "44": "t", "54": "u",
      "15": "v", "25": "w", "35": "x", "45": "y", "55": "z"
    }
    
    // verify if message is to be encoded or decoded
    const direction = encode ? encodeObj : decodeObj;
    // ignore capital letters from input string
    const message = input.toLowerCase();
    // remove spaces from message for decoding validation
    const messageTrim = message.replace(/\s+/g, '');;
    
    // validate string to decode
    function validate (messageTrim) {
      if(messageTrim.length % 2 === 1) {
        return false
      }
    }
    
    // validate if the input is an allowed length and then use RegEx to sort through characters and output letters or numbers as defined by direction at line 29
    if(encode === false && validate(messageTrim) === false) {
      return false
    } else {
      return message
        .match(/[0-9]{2}|[a-z]|\s/g)
        .map(character => direction[character] || character)
        .join('');
      };
    };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };