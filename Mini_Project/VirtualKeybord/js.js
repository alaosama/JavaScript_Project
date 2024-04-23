const buttons = document.querySelectorAll('.btn');
const texterea = document.querySelector('textarea');

const delete_btn = document.querySelector('.delete');
const shift_btn = document.querySelector('.shift');
const space_btn = document.querySelector('.space');

let chars = [];

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        texterea.value += btn.innerText
        chars = texterea.value.split('')
        // console.log(chars);
    })
})

delete_btn.addEventListener('click', () => {
    chars.pop()
    texterea.value = chars.join('');
})

shift_btn.addEventListener('click', () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper')
    })
})

space_btn.addEventListener('click', () => {
    chars.push(' ');
    texterea.value = chars.join('');
})
