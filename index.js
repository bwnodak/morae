var syllable = require('syllable');

/**
 * Extract an array of haikus from a block of text 
 *
 * @param {string} txt
 * @return {array}
 */
exports.find = function find(txt) {
  return '';
};

/**
 * Remove HTML tags and replace with appropriate spacing.
 * (i.e. No double-spaces)
 *
 * @param {string} txt
 * @return {string}
 */
exports._removeHtml = function _removeHtml(txt) {
  return '';
};

/**
 * Split a block of text by whitespace
 *
 * @param {string} txt
 * @return {string}
 */
exports._splitText = function _sanitizeText(txt) {
  return '';
};

/**
 * Count the syllables in a block of text
 *
 * @param {string} txt
 * @return {number}
 */
exports._getSyllables = function _getSyllables(txt) {
  return syllable(txt);
};
