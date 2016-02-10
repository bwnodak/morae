var assert = require('assert');
var data = require('./test-data');
var Morae = require('../');
var m;

describe('Loading the library', function() {
  it('should eventually load', function(done) {
    var to = setTimeout(function () {
          assert.fail('never finished loading library');
    }, 15000);

    Morae(function(morae) {
      clearTimeout(to);
      m = morae;
      done();
    });
  });
});

describe('Syllable counting', function() {
  it('should count syllables in English text', function() {
    assert.equal(m.count(data[0].normal), data[0].syllableCount);
    assert.equal(m.count(data[1].normal), data[1].syllableCount);
    assert.equal(m.count(data[2].normal), data[2].syllableCount);
  });

  it('should count syllables in HTML text', function() {
    assert.equal(m.count(data[0].html), data[0].syllableCount);
    assert.equal(m.count(data[1].html), data[1].syllableCount);
    assert.equal(m.count(data[2].html), data[2].syllableCount);
  });

  it('should count syllables in text with abnormal white space', function() {
     assert.equal(m.count(data[0].whitespace), data[0].syllableCount);
     assert.equal(m.count(data[1].whitespace), data[1].syllableCount);
     assert.equal(m.count(data[2].whitespace), data[2].syllableCount);
  });
});

describe('Haiku extraction', function() {
  it('should extract haikus from English text', function() {
    assert.deepEqual(m.extract(data[0].normal), data[0].haikus);
    assert.deepEqual(m.extract(data[1].normal), data[1].haikus);
    assert.deepEqual(m.extract(data[2].normal), data[2].haikus);
  });

  it('should extract haikus from HTML text', function() {
    assert.deepEqual(m.extract(data[0].html), data[0].haikus);
    assert.deepEqual(m.extract(data[1].html), data[1].haikus);
    assert.deepEqual(m.extract(data[2].html), data[2].haikus);
  });

  it('should extract haikus from text with abnormal white space', function() {
    assert.deepEqual(m.extract(data[0].whitespace), data[0].haikus);
    assert.deepEqual(m.extract(data[1].whitespace), data[1].haikus);
    assert.deepEqual(m.extract(data[2].whitespace), data[2].haikus);
  });
});
