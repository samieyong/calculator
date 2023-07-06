let clear = document.querySelector('.clear');
let equals = document.querySelector('.equals');
let backspace = document.querySelector('.backspace');
let btns = document.querySelectorAll('.btn');
let screen = document.querySelector('.screen');

clear.addEventListener('click', () => {
   screen.value = '';
});

btns.forEach((btn) => {
   btn.addEventListener('click', (e) => {
      console.log(e);
      screen.value += btn.textContent;
   });
});

equals.addEventListener('click', () => {
   screen.value = eval(screen.value);
});
backspace.addEventListener('click', () => {
   screen.value = screen.value.substr(0, screen.value.length - 1);
});
