const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    const uniqueChars = new Set(alphabet).size;
    if(!alphabet || alphabet.length !== 26 || uniqueChars !== alphabet.length) return false;
    const standardAlph = "abcdefghijklmnopqrstuvwxyx";
    return input.toLowerCase().split("").reduce((result, letter) => {
      if(letter === " ") {
        result += letter;
        return result;
      }
      if(encode) {
      let index = standardAlph.indexOf(letter);
      result+= alphabet[index];
      } else {
        let index = alphabet.indexOf(letter);
        result += standardAlph[index];
      }
      return result;
    },"");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };