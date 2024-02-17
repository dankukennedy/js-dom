//Variables

let openBtn = document.getElementById('open-btn');
let modelConatainer = document.getElementById('model-container');
let closeBtn = document.getElementById('close-btn');

// Event Listeners

openBtn.addEventListener('click', function(){
    modelConatainer.style.display='block'; 
})

closeBtn.addEventListener('click', function(){
    modelConatainer.style.display='none';
})

window.addEventListener('click', function(e){
    if(e.target===modelConatainer){
        modelConatainer.style.display ='none';
    }
})