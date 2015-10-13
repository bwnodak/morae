var Syllable = require('syllablistic'),
    S = require('string'),
    SYLLABLES = { ALL: 17, LINE_ONE: 5, LINE_TWO: 7, LINE_THREE: 5 };

/**
 * Extract an array of haikus from a block of text
 *
 * @param {string} txt
 * @return {array}
 */
exports.find = function find(txt) {
  var words = this._splitText(this._removeHtml(txt)),
      haikus = [],
      currentWords, line1, line2, line3;

  for(var i=0; i<words.length; i++) {
    line1 = this._crawlSyllables(words.slice(i, words.length), SYLLABLES.LINE_ONE);

    if (SYLLABLES.LINE_ONE === this._getSyllables(line1.join(' '))) {
      line2 = this._crawlSyllables(words.slice(i + line1.length, words.length), SYLLABLES.LINE_TWO);

      if (SYLLABLES.LINE_TWO === this._getSyllables(line2.join(' '))) {
        line3 = this._crawlSyllables(words.slice(i + line1.length + line2.length, words.length), SYLLABLES.LINE_THREE);

        if (SYLLABLES.LINE_THREE === this._getSyllables(line3.join(' '))) {
          haikus.push({
            one: line1.join(' '),
            two: line2.join(' '),
            three: line3.join(' ')
          });
        }
      }
    }
  }

  return haikus;
};

/**
 * Remove HTML tags and replace with appropriate spacing.
 * (i.e. No double-spaces)
 *
 * @param {string} txt
 * @return {string}
 */
exports._removeHtml = function _removeHtml(txt) {
  txt = txt.replace(/(<([^>]+)>)/ig, ' '); // remove tags
  txt = txt.replace(/ +(?= )/g, ''); // remove double-spaces
  return txt.trim(); // remove leading and trailing spaces
};

/**
 * Split a block of text by whitespace
 *
 * @param {string} txt
 * @return {string}
 */
exports._splitText = function _splitText(txt) {
  return txt.split(/\s+/);
};

/**
 * Count the syllables in a block of text
 *
 * @param {string} txt
 * @return {number}
 */
exports._getSyllables = function _getSyllables(txt) {
  return Syllable.text(txt);
};

/**
 * Collect a number of syllables from an array of words. Note, at least the
 * number of requested syllables will be returned, including a word that will
 * exceed the number.
 *
 * @param {array} words
 * @param {number} num - the number of syllables to collect
 * @return {array}
 */
exports._crawlSyllables = function _crawlSyllables(words, num) {
  var count = 0,
      arr = [];

  for(var i=0; i<words.length; i++) {
    if (count >= num) {
      break;
    }
    count += this._getSyllables(words[i]);
    arr.push(words[i]);
  }

  return arr;
};
