const rp = require('request-promise');
const assert = require('assert');
describe('My Test Suite 2', function() {
  it('An example test step 2', async function() {
    const quote = await rp({ uri: 'http://sample.testable.io/stocks/IBM', json: true });
    assert(quote.symbol === 'IBM', 'Symbol of the quote should be IBM');
  });
});
