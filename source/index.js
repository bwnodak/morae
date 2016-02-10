"use strict"

var Rhyme = require('rhyme');
var Morae = require('./lib/morae');

module.exports = function(callback) {
  Rhyme(r => callback(new Morae(r.syllables)));
};
