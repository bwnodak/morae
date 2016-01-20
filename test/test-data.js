module.exports = [{
  normal: 'The quick brown fox jumps over the lazy dog',
  html: '<h1>The quick</h1> <p>brown fox</p> <footer><blockquote>jumps over the lazy dog</blockquote></footer>',
  whitespace: 'The  \f\v quick  \t \t \n brown \n\n fox \n\n\n\t jumps    over \nthe\tlazy\tdog',
  syllableCount: 11,
  crawl: {
    begin: 3,
    end: 4,
    result: 'fox jumps over the'
  },
  haikus: []
}, {
  normal: 'The beige hue on the waters of the loch impressed all, including the French queen, before she heard that symphony again, just as young Arthur wanted.',
  html: '<p>The beige hue on the waters</p> <br> <br/> of<p> the loch</p> <a href="https://google.com">impressed all</a>, <hr> <hr/> <div class="sample class">including the French queen</div>, <span>before she heard that symphony again</span>, just as young Arthur wanted.',
  whitespace: 'The \t\nbeige  \v\r  hue  \t\n\n on \r the waters of the loch impressed all, including the French queen, before she heard that symphony again, just as young Arthur wanted.',
  syllableCount: 36,
  crawl: {
    begin: 9,
    end: 15,
    result: 'loch impressed all, including the French queen, before she heard that'
  },
  haikus: []
}, {
  normal: 'Are those shy Eurasian footwear, cowboy chaps, or jolly earthmoving headgear?',
  html: '<h3 id="sample-id">Are</h3> <div>those shy Eurasian footwear</div>, <form method="post" action="./sample.html">cowboy chaps</form>, or jolly earthmoving headgear?',
  whitespace: 'Are  \r\f\r those shy \r \n  \t Eurasian \n\r\f footwear, cowboy   \r chaps, \r\t\n\n or   jolly     earthmoving   \r\r\n headgear?',
  syllableCount: 19,
  crawl: {
    begin: 6,
    end: 11,
    result: 'footwear, cowboy chaps, or jolly earthmoving'
  },
  haikus: []
}];
