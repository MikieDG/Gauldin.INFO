let link1 = document.getElementById('link1');
let link2 = document.getElementById('link2');
let link3 = document.getElementById('link3');
let button = document.getElementById('color-button');

function colorValue() {
    return Math.floor(Math.random() * 256);
}
  
function colorChange(event){
    let randomColor1 = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    let randomColor2 = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    let randomColor3 = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    link1.style.color = randomColor1;
    link2.style.color = randomColor2;
    link3.style.color = randomColor3;
    button.style.cursor = "pointer";
}

button.addEventListener('click', colorChange);

