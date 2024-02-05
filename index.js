const buttons = document.querySelectorAll('.btn');
const result = document.querySelector('#result');
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        result.textContent+=e.target.id;
    })
})
egal.addEventListener('click',()=>{
    result.textContent=eval( result.textContent);
});
clear.addEventListener('click',()=>{
    result.textContent="";
})