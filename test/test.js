var assert = require('assert'),
    morae = require('../');

describe('Private functions', function() {
  describe('#_removeHtml()', function () {
    it('should return text without HTML and place appropriate spaces.', function () {
      assert.equal('hello world!', morae._removeHtml('<p>hello world!</p>'));
      assert.equal('And boom goes the dynamite!', morae._removeHtml('<b><i>And</i></b> boom goes<br/>the<br>dynamite!'));
      assert.equal('This is up top and this is down below !', morae._removeHtml('<h1>This is up top</h1><hr/><hr/><p>and this is down below</p><b>!</b>'));
    });
  });

  describe('#_splitText()', function () {
    it('should return an array of words', function () {
      var txt = 'And  boom   goes     the      dynamite!',
          arr = morae._splitText(txt);

      assert.equal(5, arr.length);
      assert.equal('And', arr[0]);
      assert.equal('dynamite!', arr[4]);
    });
  });

  describe('#_getSyllables()', function () {
    it('should return a syllable count for text', function () {
      assert.equal(3, morae._getSyllables('hamburger'));
      assert.equal(0, morae._getSyllables('mmmmmmmmmmmm'));
      assert.equal(7, morae._getSyllables('And boom goes the dynamite!!!'));
      assert.equal(5, morae._getSyllables('three three three three three'));
      assert.equal(5, morae._getSyllables('two two two two two'));
      assert.equal(5, morae._getSyllables('one one one one one'));
    });
  });

  describe('#_crawlSyllables()', function () {
    it('should return an array of words matching or narrowly exceeding the desired syllable count', function () {
      var words = 'Immediately following the catastrophe, she fell headlong into the well.'.split(' '),
          sample1 = morae._crawlSyllables(words, 6),
          sample2 = morae._crawlSyllables(words, 10);

      assert.equal(8, morae._getSyllables(sample1.join(' ')));
      assert.equal(2, sample1.length);
      assert.equal('following', sample1[1]);

      assert.equal(12, morae._getSyllables(sample2.join(' ')));
      assert.equal(4, sample2.length);
      assert.equal('catastrophe,', sample2[3]);
    });
  });
});

describe('Public functions', function() {
  describe('#find()', function () {
    it('should return an array of haikus', function () {
      var txt1 = 'one one one one one two two two two two two two three three three three three miracle texas!',
          txt2 = '<p>one <b>one</b> one <i>one</i> one</p><p>two two two two two two two three three three three three</p><hr/><hr><br><br/><img/><h1>miracle texas!</h1>',
          haikus1 = morae.find(txt1),
          haikus2 = morae.find(txt2);

      assert.equal(3, haikus1.length);
      assert.equal('one one one one one', haikus1[0].one);
      assert.equal('two two two two two two two', haikus1[0].two);
      assert.equal('three three three three three', haikus1[0].three);

      assert.equal('one one two two two', haikus1[1].one);
      assert.equal('two two two two three three three', haikus1[1].two);
      assert.equal('three three miracle', haikus1[1].three);

      assert.equal('two two two two two', haikus1[2].one);
      assert.equal('two two three three three three three', haikus1[2].two);
      assert.equal('miracle texas!', haikus1[2].three);

      assert.equal(3, haikus2.length);
      assert.equal('one one one one one', haikus2[0].one);
      assert.equal('two two two two two two two', haikus2[0].two);
      assert.equal('three three three three three', haikus2[0].three);

      assert.equal('one one two two two', haikus2[1].one);
      assert.equal('two two two two three three three', haikus2[1].two);
      assert.equal('three three miracle', haikus2[1].three);

      assert.equal('two two two two two', haikus2[2].one);
      assert.equal('two two three three three three three', haikus2[2].two);
      assert.equal('miracle texas!', haikus2[2].three);
    });
  });
});
