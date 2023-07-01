const text = document.querySelector(".godson h3");

const cont = text.innerHTML;
const letters = cont.split("")
text.innerHTML="";

for (let i = 0; i < letters.length; i++) {
    text.innerHTML += '<span>' + letters[i] + '</span>';
}

var temp = 0;

const timer = setInterval(() => {
    const span = document.querySelectorAll("span")[temp];
    span.classList.add("fade");
    
    temp ++;
    if(temp == letters.length){
        clearInterval(timer);
        return;
    }
}, 200);


// __________________________________________________________________________

const show = document.querySelector('.godson');
const nav = document.querySelector('nav');
const li = document.querySelector('ul')
nav.addEventListener('mouseover',()=>{
    nav.classList.add('nav');
    li.classList.add('liColor');
    show.style.setProperty('color', 'white', 'important');
})
nav.addEventListener('mouseout',()=>{
    nav.classList.remove('nav');
    li.classList.remove('liColor');
    show.style.color = 'black';
})
