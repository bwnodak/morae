"use strict"

const SYLLABLES = {
  all: 17,
  lineOne: 5,
  lineTwo: 7,
  lineThree: 5
};

class Morae {
  constructor(syllableCounter) {
    this.syllableCounter = syllableCounter;
  }

  /**
   * Count the syllables in a block of text
   * @param {string} txt
   * @return {number}
   */
  count(txt) {
    let sanitizedTxt = this._removeWhitespace(this._removeHtml(txt));
    return this._getSyllables(sanitizedTxt);
  }

  /**
   * Extract an array of haikus from a block of text
   * @param {string} txt
   * @return {array}
   */
  extract(txt) {
    let sanitizedTxt = this._removeWhitespace(this._removeHtml(txt));
    let words = this._splitText(sanitizedTxt);
    let haikus = [];
    let line1, line2, line3;
    let begin, end = words.length;

    words.forEach((word, idx) => {
      begin = idx;
      line1 = this._crawlSyllables(words.slice(begin, end), SYLLABLES.lineOne);

      if (!line1) { return; }

      begin = idx + line1.length;
      line2 = this._crawlSyllables(words.slice(begin, end), SYLLABLES.lineTwo);

      if (!line2) { return; }

      begin = idx + line1.length + line2.length;
      line3 = this._crawlSyllables(words.slice(begin, end), SYLLABLES.lineThree);

      if (!line3) { return; }

      haikus.push({
        1: line1.join(' '),
        2: line2.join(' '),
        3: line3.join(' ')
      });
    });

    return haikus;
  }

  /**
   * Remove HTML tags
   * @param {string} txt
   * @return {string}
   */
  _removeHtml(txt) {
    return txt.replace(/(<([^>]+)>)/ig, ' '); // remove tags
  };

  /**
   * Remove whitespace, replaces consecutive spaces with a single space, and
   * removes spaces preceeding punctuation.
   * 
   * Whitespace includes the following:
   *    '\s+'          successive spaces
   *    '\t'          tab
   *    '\r'          carriage return
   *    '\n'          new line
   *    '\v'          vertical tab
   *    '\f'          form feed
   */
  _removeWhitespace(txt) {
    return txt.replace(/\r?\n|\r|\v|\t|\n/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .replace(/\s+(\W)/g, "$1")
      .trim();
  };

  /**
   * Split a block of text by whitespace
   * @param {string} txt
   * @return {array}
   */
  _splitText(txt) {
    return txt.split(/\s+/);
  };

  /**
   * Count the syllables in a block of text
   * @param {function} syllableCounter - capable of counting syllables of a word
   * @param {string} txt - sanitized words
   * @return {number}
   */
  _getSyllables(txt) {
    txt = txt.replace(/[^\w\s]|_/g, '');

    let words = this._splitText(txt);
    let syllables = 0;

    words.forEach(word => {
      syllables += this.syllableCounter(word) || 0
    });

    return syllables;
  };

  /**
   * Collect a number of syllables from an array of words. Note, only the exact
   * number of requested syllables will be returned, otherwise `null`
   *
   * @param {array} words
   * @param {number} targetSyllables - the number of syllables to collect
   * @return {array|null}
   */
  _crawlSyllables(words, targetSyllables) {
    let syllables = 0;
    let crawledWords = [];

    words.some(word => {
      syllables += this._getSyllables(word);
      crawledWords.push(word);

      if (syllables >= targetSyllables) {
        return true;
      }
      return false;
    });

    // only an exact syllable match will return results
    if (syllables === targetSyllables) {
      return crawledWords;
    }
    return null;
  };
}

module.exports = Morae;
