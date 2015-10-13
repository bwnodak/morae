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

    console.log(morae.find(txt));

Output:

    [{
      one: 'Thick blanket of snow',
      two: 'snuggling the flowerbeds',
      three: 'with a winter wrap.'
    }]

Tests
-----

Run tests with `npm test`.


License
-------

The MIT License (MIT)

Copyright (c) 2015 Brian W. Nelson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
