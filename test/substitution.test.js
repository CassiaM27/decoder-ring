const expect = require("chai").expect;
const { substitution } = require("../src/substitution.js");

describe("substitution()", () => {
  // error tests
  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const actual = substitution("message")
      expect(actual).to.equal(false)
    });
    
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const alphabet = "abcdefg"
      const actual = substitution("message", alphabet)
      expect(actual).to.equal(false)
    });
    
    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const alphabet = "abcdefgabcdefgabcdefgabcde"
      const actual = substitution("message", alphabet)
      expect(actual).to.equal(false)
    });
    
  });
  
  // encoding tests
  describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const alphabet = "vxuhatrcenkmdjfpswyqbigzlo"
      const actual = substitution("message", alphabet)
      expect(actual).to.equal("dayyvra")
    })
    
    it("should work with any kind of key with unique characters", () => {
      const alphabet = "vxuhatrcenkmdjfpsw#qbigzlo"
      const actual = substitution("message", alphabet)
      expect(actual).to.equal("da##vra")
    })
    
    it("should preserve spaces", () => {
      const alphabet = "vxuhatrcenkmdjfpswyqbigzlo"
      const actual = substitution("a message", alphabet)
      expect(actual).to.equal("v dayyvra")
    })
    
  });
  
  // decoding tests
  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const alphabet = "vxuhatrcenkmdjfpswyqbigzlo"
      const actual = substitution("dayyvra", alphabet, false)
      expect(actual).to.equal("message")
    })
    
    it("should work with any kind of key with unique characters", () => {
      const alphabet = "vxuhatrcenkmdjfpsw!qbigzlo"
      const actual = substitution("da!!vra", alphabet, false)
      expect(actual).to.equal("message")
    })
    
    it("should preserve spaces", () => {
      const alphabet = "vxuhatrcenkmdjfpswyqbigzlo"
      const actual = substitution("v dayyvra", alphabet, false)
      expect(actual).to.equal("a message")
    })
  });
});