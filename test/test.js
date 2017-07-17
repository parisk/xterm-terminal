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
    let proxySpy;

    beforeEach(() => {
      term = document.createElement('xterm-terminal');
      proxySpy = chai.spy(term._proxy);
      term._proxy = proxySpy;
    });

    it('#attachCustomKeydownHandler', () => {
      let customKeyDownHandler = () => {};

      term.attachCustomKeydownHandler(customKeyDownHandler);

      expect(proxySpy).to.have.been.called.with([customKeyDownHandler]);
    });
  });
});
