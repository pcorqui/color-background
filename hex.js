const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.getElementsByClassName('btn');
const color = document.querySelector(".color");

for(let i = 0; i<btn.length;i++){
    console.log(btn[i]);
btn[i].addEventListener('click',function(){
    let hexColor = "#";
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()]; 
    }
    
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
}

function getRandomNumber(){
    return Math.floor(Math.random()* hex.length);
}