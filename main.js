let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onScroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
// document.querySelector('#menu-icon').onclick = () =>{
//     menu.classList.toggle('fa-times');
//     search.classList.remove('active');
// }

window.onscroll = () => {
    menu.classList.remove('fa-times');
    search.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})