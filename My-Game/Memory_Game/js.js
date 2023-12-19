const emojs = [];

let shuf_emojs = emojs.sort(() => (Math.random() > .5) ? 2 : -1);

for ( let i=0; i < emojs.length; i++) {
    let box = document.createElement('div')
    box.className = 'item';
    box.innerHTML = shuf_emojs[i];

    box.onclick = function() {
        this.classList.add('boxOpen')
        setTimeout(function() {
            if(document.querySelector('.boxOpen').length > 1) {
                if(document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelector('.boxOpen')[1],innerHTML){
                    document.querySelector('.boxOpen')[0],classList.add('boxMatch')
                }
            }
        },500)
    }

    document.querySelector('.game').appendChild(box);

}
