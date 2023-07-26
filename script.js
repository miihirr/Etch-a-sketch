let color='black';
function createBoxes(number) {
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            let container = document.querySelector('.container');
            let div = document.createElement('div');
            container.appendChild(div);
            div.className = 'box';
        }
    }
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.style.flexBasis = `${100 / number}%`);
    draw();
}
function getSize() {
    // Remove the existing event listener
    select.removeEventListener('click', getSize);

    let container = document.querySelector('.container');
    container.textContent = "";
    let input = +prompt("Enter a size :");
    if (input <= 100 && input >= 1) {
        createBoxes(input);
    } else {
        alert("Please enter a size between 1 to 100");
    }

    // Add the event listener again after processing the input
    select.addEventListener('click', getSize);
}
function draw(){
    let boxes = document.querySelectorAll('.box');
  
    boxes.forEach((box) => {
        box.addEventListener("mouseover", function () {
            if(color==='random'){
                let a_color=Math.floor(Math.random()*16777215).toString(16);
            box.style.backgroundColor=`#${a_color}`;
            }
            else{
                box.style.backgroundColor='black';
            }
            box.style.border='none';
        });
      });
}
createBoxes(16);
let select = document.querySelector('#select');
select.addEventListener('click',getSize);
let rgb = document.querySelector('#rgb');
rgb.addEventListener('click',()=>{
    color='random';
});
let black = document.querySelector('#black');
black.addEventListener('click',()=>{
    color='black';
});
