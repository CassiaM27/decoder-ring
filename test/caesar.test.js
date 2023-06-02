const expect = require("chai").expect;
const caesarModule = require("../src/caesar.js");

describe("caesar()", () => {
// error tests

  describe("error handling", () => {
    const input = "message";
    it("should return false if the shift amount is 0", () => {
      const shift = 0;
      const actual = caesarModule.caesar(input, shift, encode = true);
      expect(actual).to.equal(false);
    });

    it("should return false if the shift amount is above 25", () => {
      const shift = 26;
      const actual = caesarModule.caesar(input, shift, encode = true);
      expect(actual).to.equal(false);
    });

    it("should return false if the shift amount is less than -25", () => {
      const shift = (-26);
      const actual = caesarModule.caesar(input, shift, encode = true);
      expect(actual).to.equal(false);
    });
  });

// encoding tests

  describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
      const input = "message";
      const shift = 3;
      const actual = caesarModule.caesar(input, shift, encode = true);
      expect(actual).to.equal("phvvdjh");
    });

    it("should leaves spaces and other symbols as is", () => {
      const input = "a message.";
      const shift = 3;
      const actual = caesarModule.caesar(input, shift, encode = true);
      expect(actual).to.equal("d phvvdjh.");
    });

    it("should ignore capital letters", () => {
      const input = "Message";
      const shift = 3;
      const actual = caesarModule.caesar(input, shift, encode = true);
      expect(actual).to.equal("phvvdjh");
    });
  
    it("should appropriately handle letters at the end of the alphabet", () => {
      const input = "charlie";
      const shift = -3;
      const actual = caesarModule.caesar(input, shift, encode = true);
      expect(actual).to.equal("zexoifb");
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const input = "message";
      const shift = -3;
      const actual = caesarModule.caesar(input, shift, encode = true);
      expect(actual).to.equal("jbppxdb");
    });
  });

// decoding tests

  describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const input = "phvvdjh";
      const shift = 3;
      const actual = caesarModule.caesar(input, shift, encode = false);
      expect(actual).to.equal("message")
    });

    it("should leaves spaces and other symbols as is", () => {
      const input = "a message.";
      const shift = 3;
      const actual = caesarModule.caesar(input, shift, encode = true);
      expect(actual).to.equal("d phvvdjh.");
    });

    it("should ignore capital letters", () => {
      const input = "Message";
      const shift = 3;
      const actual = caesarModule.caesar(input, shift, encode = true);
      expect(actual).to.equal("phvvdjh");
    });
  
    it("should appropriately handle letters at the end of the alphabet", () => {
      const input = "charlie";
      const shift = -3;
      const actual = caesarModule.caesar(input, shift, encode = true);
      expect(actual).to.equal("zexoifb");
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const input = "message";
      const shift = -3;
      const actual = caesarModule.caesar(input, shift, encode = true);
      expect(actual).to.equal("jbppxdb");
    });
  });
  
});