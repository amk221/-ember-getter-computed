import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | foo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    this.set('disabled', true);

    await render(hbs`
      <Foo @disabled={{this.disabled}} />
    `);

    assert.dom('.foo').hasAttribute('aria-disabled', 'true');

    this.set('disabled', false);

    assert.dom('.foo').hasAttribute('aria-disabled', 'false');
  });
});
