var assert = require('assert');
var morae = require('../');

console.log(morae);

describe('Private functions', function() {
  describe('#_removeHtml()', function () {
    it('should return text without HTML and place appropriate spaces.', function () {
      assert.equal('hello world!', morae._removeHtml('<p>hello world!</p>'));
      assert.equal('And boom goes the dynamite!', morae._removeHtml('<b><i>And</i></b> boom goes<br/>the<br>dynamite!'));
      assert.equal('This is up top and this is is down below!', morae._removeHtml('<h1>This is up top</h1><hr/><hr/><p>and this is down below</p><b>!</b>'));
    });
  });

  describe('#_splitText()', function () {
    it('should return an array of words', function () {
      var txt = 'And boom\n goes\n the dynamite!';
      var arr = morae._splitText(txt);

      assert.equal(5, arr.length);
      assert.equal('And', arr[0]);
      assert.equal('dynamite!', arr[4]);
    });
  });

  describe('#_getSyllables()', function () {
    it('should return a syllable count for a word', function () {
      assert.equal(3, morae._getSyllables('hamburger'));
      assert.equal(1, morae._getSyllables('mmmmmmmmmmmm'));
      assert.equal(7, morae._getSyllables('And boom goes the dynamite!!!'));
    });
  });

  describe('Public functions', function() {
    it('should return an array of haikus', function () {
      var txt1 = 'one one one one one two two two two two two two three three three three three miracle texas!',
          txt2 = '<p>one <b>one</b> one <i>one</i> one</p><p>two two two two two two two three three three three three</p><hr/><hr><br><br/><img/><h1>miracle texas!</h1>',
          haikus1 = morae.find(txt1),
          haikus2 = morae.find(txt2);

      assert.equal(3, haikus1.length);
      assert.equal('one one one one one two two two two two two two three three three three three', haikus1[0]);
      assert.equal('one one two two two two two two two three three three three three miracle', haikus1[1]);
      assert.equal('two two two two two two two three three three three three miracle texas!', haikus1[2]);

      assert.equal(3, haikus.length);
      assert.equal('one one one one one two two two two two two two three three three three three', haikus2[0]);
      assert.equal('one one two two two two two two two three three three three three miracle', haikus2[1]);
      assert.equal('two two two two two two two three three three three three miracle texas!', haikus2[2]);
    });
  });
});
