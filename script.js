function createBoxes(number){
    for(let i=0;i<number;i++){
        for(let j=0;j<number;j++){
            let container=document.querySelector('.container');
            let div=document.createElement('div');
            container.appendChild(div);
            div.className='box';
            
            
        }
    }
    let boxes=document.querySelectorAll('.box');
    boxes.forEach(box=>box.style.flexBasis=`${100/number}%`);
}
createBoxes(16);
