describe('xterm-terminal', () => {
  let term;

  describe('#constructor()', () => {
    beforeEach(() => {
      term = document.createElement('xterm-terminal');
    });

    it('should set `._xterm` to a Terminal instance', () => {
      document.body.appendChild(term);
      assert.exists(term._xterm);
    });
  });

  describe('xterm.js public API implementation', () => {
    beforeEach(() => {
      term = document.createElement('xterm-terminal');
    });

    it('#attachCustomKeydownHandler', () => {
      assert.exists(term._attachCustomKeydownHandler);
    });

    it('#blur', () => {
      assert.exists(term.blur);
    });

    it('#clear', () => {
      assert.exists(term.clear);
    });

    it('#destroy', () => {
      assert.exists(term.destroy);
    });

    it('#focus', () => {
      assert.exists(term.focus);
    });

    it('#getOption', () => {
      assert.exists(term.getOption);
    });

    it('#on', () => {
      assert.exists(term.on);
    });

    it('#off', () => {
      assert.exists(term.off);
    });

    it('#refresh', () => {
      assert.exists(term.refresh);
    });

    it('#reset', () => {
      assert.exists(term.reset);
    });

    it('#resize', () => {
      assert.exists(term.resize);
    });

    it('#scrollDisp', () => {
      assert.exists(term.scrollDisp);
    });

    it('#scrollPages', () => {
      assert.exists(term.scrollPages);
    });

    it('#scrollToTop', () => {
      assert.exists(term.scrollToTop);
    });

    it('#scrollToBottom', () => {
      assert.exists(term.scrollToBottom);
    });

    it('#setOption', () => {
      assert.exists(term.setOption);
    });

    it('#write', () => {
      assert.exists(term.write);
    });

    it('#writeln', () => {
      assert.exists(term.writeln);
    });
  });
});
