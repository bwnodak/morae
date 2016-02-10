Morae
=====

A tool for extracting haikus from English text.

Installation
------------

    npm install morae

Usage
-----

Because Morae utilizes [The CMU Pronouncing Dictionary](http://www.speech.cs.cmu.edu/cgi-bin/cmudict "CMU Pronouncing Dictionary"), it is loaded asynchronously and provides availability to an instance
of the class in a callback.

    var Morae = require('morae');

    Morae(m => {
      // 'm' is the instance
    });

Provide a string of text and get an array of haikus back. Bear in mind that most
of them will be total shit, but that's just how it goes.

    var Morae = require('morae');
    var txt = 'Thick blanket of snow snuggling the flowerbeds with a winter wrap.';

    Morae(m => {
      console.log(m.extract(txt));
    });

Output:

    [{
      one: 'Thick blanket of snow',
      two: 'snuggling the flowerbeds',
      three: 'with a winter wrap.'
    }]

More simply, Morae can be used to count syllables in blocks of text.

    Morae(m => {
      console.log(m.count('snuggling the flowerbeds')); // 6
      console.log(m.count('<h1>Chapter One</h1> <p>I was born in New Orleans.</p>'); // 10
      console.log(m.count('and   \r\n then \t\t the \t\n boat   \rsank'); // 5
    });

Tests
-----

Run tests with `npm test`.

Acknowledgments
---------------

Inspired by my friend Seth Bicknell.
