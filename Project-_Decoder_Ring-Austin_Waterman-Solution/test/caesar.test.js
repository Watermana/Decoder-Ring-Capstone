// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar tests written by me", () => {
    it("Should return false is the shift is 0", () => {
        let message = "abcde";
        let shift = 0;
        let actual = caesar(message, shift);
        expect(actual).to.be.false;
    })
    it("Should return false is the shift is less than -25", () => {
        let message = "abcde";
        let shift = -26;
        let actual = caesar(message, shift);
        expect(actual).to.be.false;
    })
    it("Should return false is the shift is greater than 25", () => {
        let message = "abcde";
        let shift = 26;
        let actual = caesar(message, shift);
        expect(actual).to.be.false;
    })
    it("Should ignore capital letters", () => {
        let message = "ABCDEF";
        let shift = 1;
        let actual = caesar(message, shift);
        let expected = "bcdefg";
        expect(actual).to.equal(expected);
    })
    it("Should handle letters at the end of the alphabet", () => {
        let message = "xyzzz";
        let shift = 3;
        let actual = caesar(message, shift);
        let expected = "abccc";
        expect(actual).to.equal(expected);
    })
    it("Should maintain spaces and non-letter characters when encoding", () => {
        let message = "hello world!!";
        let shift = 2;
        let actual = caesar(message, shift);
        let expected = "jgnnq yqtnf!!";
        expect(actual).to.equal(expected);
    })
    it("Should maintain spaces and non-letter characters when decoding", () => {
        let message = "jgnnq yqtnf!!";
        let shift = 2;
        let actual = caesar(message, shift, false);
        let expected = "hello world!!";
        expect(actual).to.equal(expected);
    })
})