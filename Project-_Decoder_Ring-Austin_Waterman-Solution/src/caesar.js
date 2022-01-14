const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }
    let result = "";
    input = input.toLowerCase();
    if(!encode) shift *= -1;
    for(let i = 0; i < input.length; i++) {
      if(input[i].charCodeAt() < 97 || input[i].charCodeAt() > 122) {
        result += input[i];
        continue;
      }
      charCode = input[i].charCodeAt() + shift;
      if(charCode > 122) charCode -= 26; 
      if(charCode < 97) charCode += 26;  
      let letterFromCode = String.fromCharCode(charCode);
      result += letterFromCode;
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };