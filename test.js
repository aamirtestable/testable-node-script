const rp = require('request-promise');
const assert = require('assert');
describe('My Test Suite', function() {
  it('An example test step', async function() {
    const quote = await rp({ uri: 'http://sample.testable.io/stocks/IBM', json: true });
    assert(quote.symbol === 'IBM', 'Symbol of the quote should be IBM');
  });
});
