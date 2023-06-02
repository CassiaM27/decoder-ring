const expect = require("chai").expect;
const { polybius } = require("../src/polybius.js");

describe("polybius()", () => {
  
  // encoding tests
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const actual = polybius("message")
      expect(actual).to.equal("23513434112251")
    });
    
    it("should translate both 'i' and 'j' to 42", () => {
      const actual = polybius("din djarin")
      expect(actual).to.equal("414233 414211244233")
    });
    
    it("should leave spaces as is", () => {
      const actual = polybius("a message")
      expect(actual).to.equal("11 23513434112251")
    });
  });
  
  // decoding tests
  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const actual = polybius("23513434112251", false)
      expect(actual).to.equal("message")
    });
    it("should translate 42 to both 'i' and 'j'", () => {
      const actual = polybius("414233 414211244233", false)
      expect(actual).to.equal("di/jn di/jari/jn")
    });
    it("should leave spaces as is", () => {
      const actual = polybius("23513434112251", false)
      expect(actual).to.equal("message")
    });
    it("should return false if the length of all numbers is odd", () => {
      const actual = polybius("33433", false)
      expect(actual).to.equal(false)
    });
  });
  
});