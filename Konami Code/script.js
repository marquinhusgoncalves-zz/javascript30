const pressed = [];
const secretCode = '38384040373937396665';

window.addEventListener('keyup', function (e) {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if(pressed.join('').includes(secretCode)) {
    cornify_add();
  }
})