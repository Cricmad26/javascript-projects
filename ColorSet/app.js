const input=document.getElementById('input');
const output=document.getElementById('output');
input.addEventListener('input',updatecolor)
function updatecolor(){
    const colorname=input.value;
    output.style.backgroundColor=colorname;

}