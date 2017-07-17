# xterm-terminal
![Travis CI Build Status Badge](https://travis-ci.org/parisk/xterm-terminal.svg?branch=master)

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

## Usage

### [`attachCustomKeydownHandler(customKeydownHandler)`](https://xtermjs.org/docs/api/terminal/#attachcustomkeydownhandlercustomkeydownhandler)
Attach a custom keydown handler to allow consumers to allow certain key strokes to skip processing by the terminal.

### [`blur()`](https://xtermjs.org/docs/api/terminal/#blur)
Remove the focus from the terminal.

### [`clear()`](https://xtermjs.org/docs/api/terminal/#clear)
Clears the entire buffer of the terminal, making the prompt line the new first line.

### [`destroy()`](https://xtermjs.org/docs/api/terminal/#destroy)
Destroys the terminal and detaches it from the DOM.

### [`focus()`](https://xtermjs.org/docs/api/terminal/#focus)
Focus on the terminal.

### [`getOption(key)`](https://xtermjs.org/docs/api/terminal/#getoptionkey)
Retrieves an option from the terminal.

### [`on(event, callback)`](https://xtermjs.org/docs/api/terminal/#onevent-callback)
Attach a callback to run on a specific event.

### [`off(event, callback)`](https://xtermjs.org/docs/api/terminal/#offevent-callback)
Stop running a callback on an event.

### [`refresh(start, end, queue)`](https://xtermjs.org/docs/api/terminal/#refreshstart-end-queue)
Refresh (re-render) the terminal content between two rows (inclusive).

### [`reset()`](https://xtermjs.org/docs/api/terminal/#reset)
Reset the terminal; reconstruct the instance and re-render the whole buffer.

### [`resize(x, y)`](https://xtermjs.org/docs/api/terminal/#resizex-y)
Resize the geometry of the terminal.

### [`scrollDisp(n)`](https://xtermjs.org/docs/api/terminal/#scrolldispn)
Scroll the terminal by a number of lines.

### [`scrollPages(n)`](https://xtermjs.org/docs/api/terminal/#scrollpagesn)
Scroll the terminal by a number of pages.

### [`scrollToTop()`](https://xtermjs.org/docs/api/terminal/#scrolltotop)
Scrolls the terminal to the top of the buffer.

### [`scrollToBottom()`](https://xtermjs.org/docs/api/terminal/#scrolltobottom)
Scrolls the terminal to the bottom of the buffer.

### [`setOption(key, value)`](https://xtermjs.org/docs/api/terminal/#setoptionkey-value)
Sets an option on the terminal.

### [`write(text)`](https://xtermjs.org/docs/api/terminal/#writetext)
Writes the given text to the terminal.

### [`writeln(text)`](https://xtermjs.org/docs/api/terminal/#writelntext)
Writes the given text to the terminal, followed by a carriage return and a line break (`\r\n`).


---
This software is [MIT licensed](LICENSE.md).
