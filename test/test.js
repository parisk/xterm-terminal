describe('xterm-terminal', () => {
  describe('#constructor()', () => {
    it('should set `._xterm` to a Terminal instance', () => {
      let term = document.createElement('xterm-terminal');

      document.appendChild(term);
      assert.exists(term._xterm);
    });
  });
});
