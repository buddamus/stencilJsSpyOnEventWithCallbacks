import { r as registerInstance, e as createEvent, h } from './index-d2c68575.js';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.doEvent = createEvent(this, "doEvent", 7);
    /**
     * The first name
     */
    this.first = "";
    /**
     * The middle name
     */
    this.middle = "";
    /**
     * The last name
     */
    this.last = "";
    this._value = undefined;
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  watchLast() {
    this.doEvent.emit({
      errorHandler: (err) => { console.error(err); },
      successHandler: (val) => { this._value = val; },
      foo: "bar",
      test: true
    });
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText(), ". Value: ", this._value);
  }
  static get watchers() { return {
    "last": ["watchLast"]
  }; }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
