const caesarModule = (function () {

  function caesar(input, shift, encode = true) {

    const message = input.toLowerCase()
    
    if(encode === true) {
    // encrypt the message
      
      // check if shift is in allowed range
      if(shift === 0 || shift < -25 || shift > 25) {
        return false
      } else {
        if (shift < 0) {
          return caesar(input, shift + 26);
        }
        let output = "";
        
        for (var i = 0; i < message.length; i++) {
          // Get the character to append
          var c = message[i];

          if (c.match(/[a-z]/i)) {
            // Get its code
            var code = message.charCodeAt(i);

            if (code >= 97 && code <= 122) {
              c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
          }
          output += c;
        }
      return output;
      }
    } else {
    // decrypt the message
        let output = "";
        
        for (var i = 0; i < message.length; i++) {
          // Get the character to append
          var c = message[i];

          if (c.match(/[a-z]/i)) {
            // Get its code
            var code = message.charCodeAt(i);
            if (code >= 97 && code <= 122) {
              c = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
            }
          }
          output += c;
        }
      return output;
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };