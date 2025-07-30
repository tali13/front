const nav = document.querySelector('nav');
const menu = document.querySelector('span');
const header = document.querySelector('header');

menu.addEventListener('click', () => {
nav.classList.toggle('showNav');
nav.classList.toggle('ativo');

});

window.addEventListener('scroll',()=>{
    if(window.scrollY > 0){
    header.classList.add('change')

 }else {
    header.classList.remove('change')
 }
})