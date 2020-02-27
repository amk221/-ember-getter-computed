import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class FooComponent extends Component {
  get isDisabledGetter() {
    return this.args.disabled;
  }

  @computed('isDisabledGetter')
  get isDisabled() {
    return this.isDisabledGetter;
  }
}
