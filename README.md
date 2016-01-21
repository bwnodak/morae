Morae
==================

Provides a way of finding haikus in blocks of text.

Installation
------------

    npm install morae

Usage
-----

Provide a string of text and get an array of haikus back. Bear in mind that most
of them will be total shit, but that's just how it goes.

    var morae = require('morae');
    var txt = 'Thick blanket of snow snuggling the flowerbeds with a winter wrap.';

    console.log(morae.extract(txt));

Output:

    [{
      one: 'Thick blanket of snow',
      two: 'snuggling the flowerbeds',
      three: 'with a winter wrap.'
    }]

Morae can also be used to crawl a block of text and return a "window" of syllables.
For example, you might provide a block of text and wish to return syllables 6
through 11 (inclusive). Keep in mind that the window must be valid and can't  
divide words.

    var morae = require('morae');
    var txt = 'Thick blanket of snow snuggling the flowerbeds with a winter wrap.';

    console.log(morae.crawl(txt, 6, 11)); // 'snuggling the flowerbeds'
    console.log(morae.crawl(txt, 6, 9)); // null

More simply, Morae can be used to count syllables in blocks of text.

    console.log(morae.count('snuggling the flowerbeds')); // 6
    console.log(morae.count('<h1>Chapter One</h1> <p>I was born in New Orleans.</p>'); // 10
    console.log(morae.count('and   \r\n then \t\t the \t\n boat   \rsank'); // 5

Tests
-----

Run tests with `npm test`.

Acknowledgments
---------------

Inspired by my friend Seth Bicknell.
