# myanmar-numeral [![Build Status](https://travis-ci.org/fraserxu/myanmar-numeral.svg?branch=master)](https://travis-ci.org/fraserxu/myanmar-numeral)

A simple module to conver Arabic numerals to Myanmar numerals

## Usage

`npm i myanmar-numeral --save` to install.

```JavaScript
var mn = require('./');
var test = require('tape');

test('myanmar numeral test', function (t) {
  t.plan(4);

  t.equal(mn(0), '๐');
  t.equal(mn(1), '၁');
  t.equal(mn(2), '၂');
  t.equal(mn(1234567890), '၁၂၃၄၅၆၇၈၉၀')

});
```

https://en.wikipedia.org/wiki/Burmese_numerals

```JavaScript
var NUMBERS_MY = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'];
```

```JavaScript
var NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
```

## License

MIT
