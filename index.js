"use strict"

const Syllable = require('syllablistic');
const S = require('string');
const SYLLABLES = { ALL: 17, LINE_ONE: 5, LINE_TWO: 7, LINE_THREE: 5 };

module.exports = {
  /**
   * Count the syllables in a block of text
   *
   * @param {string} txt
   * @return {number}
   */
  count(txt) {
    return getSyllables(removeWhitespace(removeHtml(txt)));
  },

  /**
   * Find a window of syllables in a block of text
   * Note: will return `null` if syllable window splits a word
   *
   * @param {string} txt
   * @param {number} begin - first syllable of the window
   * @param {number|null} end - last syllable of the window
   * @return {string|null}
   */
  crawl(txt, begin, end) {
    begin = begin || 0;
    end = end || 0;

    // validate params
    if (typeof begin !== 'number' || begin < 0) {
      throw new Error('invalid crawl window');
    }
    if (typeof begin !== 'number' || begin >= end) {
      throw new Error('invalid crawl window');
    }

    let words = splitText(removeWhitespace(removeHtml(txt)));
    let beforeWindow = crawlSyllables(words, 0, begin);
    let throughWindow = crawlSyllables(words, 0, end);

    // return null if the window splits any words
    if (!(beforeWindow && throughWindow)) { return null; }

    // because we don't want the last word removed!
    beforeWindow.pop();

    return throughWindow.join(' ').replace(beforeWindow.join(' '), '').trim();;
  },

  /**
   * Extract an array of haikus from a block of text
   *
   * @param {string} txt
   * @return {array}
   */
  extract(txt) {
    let words = splitText(removeWhitespace(removeHtml(txt)));
    let haikus = [];

    words.forEach((word, idx) => {
      let line1, line2, line3, begin;

      begin = idx;
      line1 = crawlSyllables(words, begin, SYLLABLES.LINE_ONE);

      if (!line1) { return; }

      begin += line1.length;
      line2 = crawlSyllables(words, begin, SYLLABLES.LINE_TWO);

      if (!line2) { return; }

      begin += line2.length;
      line3 = crawlSyllables(words, begin, SYLLABLES.LINE_THREE);

      if (!line3) { return; }

      haikus.push({
        one: line1.join(' '),
        two: line2.join(' '),
        three: line3.join(' ')
      });
    });

    return haikus;
  }
};

/**
 * Remove HTML tags
 *
 * @param {string} txt
 * @return {string}
 */
function removeHtml(txt) {
  return txt.replace(/(<([^>]+)>)/ig, ''); // remove tags
};

/**
 * Remove whitespace
 * Whitespace includes the following:
 *    '  '          successive spaces
 *    '\t'          tab
 *    '\r'          carriage return
 *    '\n'          new line
 *    '\v'          vertical tab
 *    '\f'          form feed
 */
function removeWhitespace(txt) {
  return txt.replace(/\r?\n|\r|\v|\t|\n| +(?= )/g, '').trim();
};

/**
 * Split a block of text by whitespace
 *
 * @param {string} txt
 * @return {string}
 */
function splitText(txt) {
  return txt.split(/\s+/);
};

/**
 * Count the syllables in a block of text
 *
 * @param {string} txt
 * @return {number}
 */
function getSyllables(txt) {
  return Syllable.text(txt);
};

/**
 * Collect a number of syllables from an array of words. Note, only the exact
 * number of requested syllables will be returned, otherwise `null`
 *
 * @param {array} words
 * @param {number} start - the starting index in the `words` array
 * @param {number} targetSyllables - the number of syllables to collect
 * @return {array|null}
 */
function crawlSyllables(words, start, targetSyllables) {
  let syllables = 0;
  let crawledWords = [];

  words = words.slice(start, words.length);

  words.some(word => {
    syllables += getSyllables(word);
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
