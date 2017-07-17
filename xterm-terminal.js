'use strict';

/* globals customElements, HTMLElement, Terminal */

customElements.define('xterm-terminal', class extends HTMLElement {
  constructor() {
    super();
    this._xterm = new Terminal();
  }

  connectedCallback() {
    this._xterm.open(this);
  }

  _proxy(method, argsArray) {
    return this._xterm[method].apply(this._xterm, argsArray);
  }

  attachCustomKeydownHandler() {
    return this._proxy('attachCustomKeydownHandler', arguments);
  }

  blur() {
    return this._proxy('blur', arguments);
  }

  clear() {
    return this._proxy('clear', arguments);
  }

  destroy() {
    return this._proxy('destroy', arguments);
  }

  focus() {
    return this._proxy('focus', arguments);
  }

  getOption() {
    return this._proxy('getOption', arguments);
  }

  on() {
    return this._proxy('on', arguments);
  }

  off() {
    return this._proxy('off', arguments);
  }

  refresh() {
    return this._proxy('refresh', arguments);
  }

  reset() {
    return this._proxy('reset', arguments);
  }

  resize() {
    return this._proxy('resize', arguments);
  }

  scrollDisp() {
    return this._proxy('scrollDisp', arguments);
  }

  scrollPages() {
    return this._proxy('scrollPages', arguments);
  }

  scrollToTop() {
    return this._proxy('scrollToTop', arguments);
  }

  scrollToBottom() {
    return this._proxy('scrollToBottom', arguments);
  }

  setOption() {
    return this._proxy('setOption', arguments);
  }

  write() {
    return this._proxy('write', arguments);
  }

  writeln() {
    return this._proxy('writeln', arguments);
  }
});
