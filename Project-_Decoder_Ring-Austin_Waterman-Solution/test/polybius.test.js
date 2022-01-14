// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");


describe("Polybius tests written by me", () => {
    it("Should translate both i and j to 42", () => {
        let input = "ij";
        let actual = polybius(input);
        let expected = "4242"
        expect(actual).to.equal(expected);
    })
    it("Should translate 42 to '(i/j)'", () => {
        let input = "42";
        let actual = polybius(input, false);
        let expected = "(i/j)"
        expect(actual).to.equal(expected);
    })
    it("Should ignore capital letters", () => {
        let input = "MYMessAge";
        let actual = polybius(input);
        let expected = "234523513434112251"
        expect(actual).to.equal(expected);
    })
    it("Should leave spaces as is when encoding", () => {
        let input = "hello world";
        let actual = polybius(input);
        let expected = "3251131343 2543241341"
        expect(actual).to.equal(expected);
    })
    it("Should leave spaces as is when decoding", () => {
        let input = "2345 2351 3434 1122 51";
        let actual = polybius(input, false);
        let expected = "my me ss ag e"
        expect(actual).to.equal(expected);
    })
})