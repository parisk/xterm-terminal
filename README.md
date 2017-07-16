# xterm-terminal

`xterm-terminal` is a simple custom element that acts as a wrapper for [xterm.js](https://github.com/sourcelair/xterm.js).

## Quick start

All you have to do to get started with `xterm-terminal` is:

1. Include [`xterm-terminal.js`](xterm-terminal.js) into your web page
2. Create a terminal using the `xterm-terminal` tag:
    ```html
    <!doctype>
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="node_modules/xterm/dist/xterm.css" />
        <script src="node_modules/xterm/dist/xterm.js"></script>
        <script src="xterm-terminal.js"></script>
      </head>
      <body>
        <xterm-terminal></xterm-terminal>
      </body>
    </html>
    ```

For a full example take a look at [`index.html`](index.html).

---
This software is [MIT licensed](LICENSE.md).
