import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | list-of-countries', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:list-of-countries');
    assert.ok(route);
  });
});
