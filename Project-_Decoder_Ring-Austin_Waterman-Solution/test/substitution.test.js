// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution tests written by me", () => {
    it("Should return false when given alphabet is not exactly 26 letters", () => {
        let alphabet = "abcde";
        let message = "hello";
        let actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    })
    it("Should return false if alphabet is not unique", () => {
        let alphabet = "abccccghjiklmnopqrstuvwxyz";
        let message = "hello";
        let actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    })
    it("Should correctly translate the phrase with the given alphabet", () => {
        let alphabet = "qwaeszrdxtfcygvuhbijnokmpl";
        let message = "message";
        let actual = substitution(message, alphabet);
        let expected = "ysiiqrs";
        expect(actual).to.equal(expected);
    })
    it("Should maintain spaces in the message when encoding", () => {
        let alphabet = "qwaeszrdxtfcygvuhbijnokmpl";
        let message = "my message";
        let actual = substitution(message, alphabet);
        let expected = "yp ysiiqrs";
        expect(actual).to.equal(expected);
    })
    it("Should maintain spaces in the message when decoding", () => {
        let alphabet = "qwaeszrdxtfcygvuhbijnokmpl";
        let message = "yp ysiiqrs";
        let actual = substitution(message, alphabet, false);
        let expected = "my message";
        expect(actual).to.equal(expected);
    })
    it("Should ignore capital letters", () => {
        let alphabet = "qwaeszrdxtfcygvuhbijnokmpl";
        let message = "My MeSsaGe";
        let actual = substitution(message, alphabet);
        let expected = "yp ysiiqrs";
        expect(actual).to.equal(expected);
    })
})