var term = document.querySelector('xterm-terminal');
var lines = [
  '👋 Hey! Welcome to xterm-terminal.',
  'This is an HTML Custom Element wrapper around xterm.js.',
  ' ',
  'Learn more about this project at https://github.com/parisk/xterm-terminal',
  'Learn more about xterm.js at https://github.com/sourcelair/xterm.js',
  ' ',
  '⠕ '
];

function typeCharAndAdvance(lineIndex, charIndex) {
  let line = lines[lineIndex];
  let char = line[charIndex];

  setTimeout(function () {
    if (charIndex == (line.length - 1)) {
      if (lineIndex == (lines.length - 1)) {
        term.write(char);
      } else {
        term.writeln(char);
        setTimeout(function () {
          typeCharAndAdvance(lineIndex + 1, 0);
        }, 280);
      }
    } else {
      term.write(char);
      typeCharAndAdvance(lineIndex, charIndex + 1);
    }
  }, 70);
}

typeCharAndAdvance(0, 0);
