'use strict';

customElements.define('xterm-terminal', class extends HTMLElement {
  constructor() {
    super();
    this._xterm = new Terminal();
  }

  connectedCallback() {
    this._xterm.open(this);
  }
});
