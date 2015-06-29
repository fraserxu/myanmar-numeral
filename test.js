var mn = require('./');
var test = require('tape');

test('myanmar numeral test', function (t) {
  t.plan(4);

  t.equal(mn(0), '๐');
  t.equal(mn(1), '၁');
  t.equal(mn(2), '၂');
  t.equal(mn(1234567890), '၁၂၃၄၅၆၇၈၉၀')

});
