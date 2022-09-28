'use strict'; 

const icon = document.getElementById('icon');
const navLu = document.querySelector('nav ul');
const closee = document.querySelector('.close');
const body = document.querySelector('body');
const logo = document.querySelector('.logo');

icon.addEventListener('click', function(){
    navLu.classList.add('show');
    body.style.overflow = 'hidden';
    closee.classList.remove('hidden');
    icon.style.transform = 'rotate(90deg)';
});

closee.addEventListener('click', function(){
    navLu.classList.remove('show');
    body.style.overflow = 'auto';
    closee.classList.add('hidden');
    icon.style.transform = 'rotate(0deg)';
});


