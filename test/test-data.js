module.exports = [{
  normal: 'The quick brown fox jumps over the lazy dog',
  html: '<h1>The quick</h1> <p>brown fox</p> <footer><blockquote>jumps over the lazy dog</blockquote></footer>',
  whitespace: 'The  \f\v quick  \t \t \n brown \n\n fox \n\n\n\t jumps    over \nthe\tlazy\tdog',
  syllableCount: 11,
  crawl: {
    begin: 3,
    end: 7,
    result: 'brown fox jumps over the'
  },
  haikus: []
}, {
  normal: 'The beige hue on the waters of the loch impressed all, including the French queen, before she heard that symphony again, just as young Arthur wanted.',
  html: '<p>The beige hue on the waters</p> <br> <br/> of<p> the loch</p> <a href="https://google.com">impressed all</a>, <hr> <hr/> <div class="sample class">including the French queen</div>, <span>before she heard that symphony again</span>, just as young Arthur wanted.',
  whitespace: 'The \t\nbeige  \v\r  hue  \t\n\n on \r the waters of the loch impressed all, including the French queen, before she heard that symphony again, just as young Arthur wanted.',
  syllableCount: 36,
  crawl: {
    begin: 9,
    end: 19,
    result: 'the loch impressed all, including the French queen,'
  },
  haikus: [{
     "1": "The beige hue on the",
     "2": "waters of the loch impressed",
     "3": "all, including the"
    }, {
     "1": "the waters of the",
     "2": "loch impressed all, including",
     "3": "the French queen, before"
    }, {
     "1": "waters of the loch",
     "2": "impressed all, including the",
     "3": "French queen, before she"
    }, {
     "1": "of the loch impressed",
     "2": "all, including the French queen,",
     "3": "before she heard that"
    }, {
     "1": "all, including the",
     "2": "French queen, before she heard that",
     "3": "symphony again,"
    }, {
     "1": "French queen, before she",
     "2": "heard that symphony again,",
     "3": "just as young Arthur"
    }, {
     "1": "before she heard that",
     "2": "symphony again, just as",
     "3": "young Arthur wanted."
    }]
}, {
  normal: 'Are those shy Eurasian footwear, cowboy chaps, or jolly earthmoving headgear?',
  html: '<h3 id="sample-id">Are</h3> <div>those shy Eurasian footwear</div>, <form method="post" action="./sample.html">cowboy chaps</form>, or jolly earthmoving headgear?',
  whitespace: 'Are  \r\f\r those shy \r \n  \t Eurasian \n\r\f footwear, cowboy   \r chaps, \r\t\n\n or   jolly     earthmoving   \r\r\n headgear?',
  syllableCount: 19,
  crawl: {
    begin: 7,
    end: 12,
    result: 'footwear, cowboy chaps, or'
  },
  haikus: []
}];
