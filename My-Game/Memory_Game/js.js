const emojs = [];

let shuf_emojs = emojs.sort(() => (Math.random() > .5) ? 2 : -1);

for ( let i=0; i < emojs.length; i++) {
    let box = document.createElement('div')
    box.className = 'item';
}
