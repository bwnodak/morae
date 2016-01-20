var assert = require('assert');
var morae = require('../');
var data = require('./test-data');

describe('Syllable counting', function() {
  it('should count syllables in English text', function() {
    assert.equal(morae.count(data[0].normal), data[0].syllableCount);
    assert.equal(morae.count(data[1].normal), data[1].syllableCount);
    assert.equal(morae.count(data[2].normal), data[2].syllableCount);
  });

  it('should count syllables in HTML text', function() {


    assert.equal(morae.count(data[0].html), data[0].syllableCount);
    assert.equal(morae.count(data[1].html), data[1].syllableCount);
    assert.equal(morae.count(data[2].html), data[2].syllableCount);
  });

  it('should count syllables in text with abnormal white space', function() {
    /**
     * Whitespace includes the following:
     *    '  '          successive spaces
     *    '\t'          tab
     *    '\r'          carriage return
     *    '\n'          new line
     *    '\v'          vertical tab
     *    '\f'          form feed
     */
     assert.equal(morae.count(data[0].whitespace), data[0].syllableCount);
     assert.equal(morae.count(data[1].whitespace), data[1].syllableCount);
     assert.equal(morae.count(data[2].whitespace), data[2].syllableCount);
  });
});

describe('Syllable crawling', function() {
  it('should return a chunk of syllables in English text', function() {
    assert.equal(morae.crawl(data[0].normal, data[0].crawl.begin, data[0].crawl.end), data[0].crawl.result);
    assert.equal(morae.crawl(data[1].normal, data[1].crawl.begin, data[1].crawl.end), data[1].crawl.result);
    assert.equal(morae.crawl(data[2].normal, data[2].crawl.begin, data[2].crawl.end), data[2].crawl.result);
  });

  it('should return a chunk of syllables in HTML text', function() {
    assert.equal(morae.crawl(data[0].html, data[0].crawl.begin, data[0].crawl.end), data[0].crawl.result);
    assert.equal(morae.crawl(data[1].html, data[1].crawl.begin, data[1].crawl.end), data[1].crawl.result);
    assert.equal(morae.crawl(data[2].html, data[2].crawl.begin, data[2].crawl.end), data[2].crawl.result);
  });

  it('should return a chunk of syllables in text with abnormal white space', function() {
    assert.equal(morae.crawl(data[0].whitespace, data[0].crawl.begin, data[0].crawl.end), data[0].crawl.result);
    assert.equal(morae.crawl(data[1].whitespace, data[1].crawl.begin, data[1].crawl.end), data[1].crawl.result);
    assert.equal(morae.crawl(data[2].whitespace, data[2].crawl.begin, data[2].crawl.end), data[2].crawl.result);
  });

  it('should return remainder of string if target syllable count is not included', function() {
    var data = 'The quick brown fox jumps over the lazy dog';

    assert.equal(morae.crawl(data, 3), 'fox jumps over the lazy dog');
    assert.equal(morae.crawl(data, 6), 'the lazy dog');
  });

  it('should throw an error if crawl window is not valid', function() {
    var data = 'The quick brown fox jumps over the lazy dog';

    assert.throw(morae.crawl(data, -1, -5), 'invalid crawl window'); // invalid begin/end points
    assert.throw(morae.crawl(data, null, -5), 'invalid crawl window'); // invalid begin point
    assert.throw(morae.crawl(data, 10, 5), 'invalid crawl window'); // begin point exceeds syllables of string
    assert.throw(morae.crawl(data, 0, 6), 'invalid crawl window'); // 6th syllable is in the middle of a two-syllable word
  });
});

describe('Haiku extraction', function() {
  it('should extract haikus from English text', function() {
    assert.deepEqual(morae.extract(data[0].normal), data[0].haikus);
    assert.deepEqual(morae.extract(data[1].normal), data[1].haikus);
    assert.deepEqual(morae.extract(data[2].normal), data[2].haikus);
  });

  it('should extract haikus from HTML text', function() {
    assert.deepEqual(morae.extract(data[0].html), data[0].haikus);
    assert.deepEqual(morae.extract(data[1].html), data[1].haikus);
    assert.deepEqual(morae.extract(data[2].html), data[2].haikus);
  });

  it('should extract haikus from text with abnormal white space', function() {
    assert.deepEqual(morae.extract(data[0].whitespace), data[0].haikus);
    assert.deepEqual(morae.extract(data[1].whitespace), data[1].haikus);
    assert.deepEqual(morae.extract(data[2].whitespace), data[2].haikus);
  });
});
