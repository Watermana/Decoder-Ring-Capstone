const polybiusModule = (function () {
  function polybius(input, encode = true) {
    if(!encode) {
      if(input.split(" ").join("").length % 2 !== 0) return false;
    }
    const encoding = {"a":"11", "b":"21", "c":"31", "d":"41", "e":"51","f":"12", "g":"22", "h":"32", "i":"42", "j":"42", "k":"52","l":"13", "m":"23", "n":"33", "o":"43", "p":"53","q":"14", "r":"24", "s":"34", "t":"44", "u":"54","v":"15", "w":"25", "x":"35", "y":"45", "z":"55"};
    const decoding = {'11': 'a','12': 'f','13': 'l','14': 'q','15': 'v','21': 'b','22': 'g','23': 'm','24': 'r','25': 'w','31': 'c','32': 'h','33': 'n','34': 's','35': 'x','41': 'd','42': '(i/j)','43': 'o','44': 't','45': 'y','51': 'e','52': 'k','53': 'p','54': 'u','55': 'z'};
    const direction = encode ? encoding : decoding;
    return input.toLowerCase().match(/[0-5]{2}|[a-z]|\s/g).map(character => direction[character] || character).join('');
  }

  return {
    polybius,
  };

})();

module.exports = { polybius: polybiusModule.polybius };