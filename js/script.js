const block1 = document.querySelector ('.block1');
const block2 = document.querySelector ('.block2');
const key = document.querySelector ('.key');

setTimeout(f1,5000);

function f1 () {
    console.log("360px");
    block1.classList.add('move')
}

key.addEventListener("click",f2)
function f2 () {
    console.log("720px");
    block2.classList.add('move')
}
