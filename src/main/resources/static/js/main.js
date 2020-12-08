const heart = document.querySelector('.heart_btn');
const header = document.querySelector('#header');
const sidebox = document.querySelector('.side_box');

heart.addEventListener('click', function(){
    console.log('liked!');
    heart.classList.toggle('on');
});

function resizeFunc(){
    if(pageYOffset>=10){
        const calcWith = (window.innerWidth*0.5)+180;
        sidebox.style.left = calcWith+'px';
    }
}

function scrollFunc(){
    
    if(pageYOffset>=10){
        header.classList.add('on');
        sidebox.classList.add('on');
        resizeFunc();
    } else {
        header.classList.remove('on');
        sidebox.classList.remove('on');
        sidebox.removeAttribute('style');
    }
}

window.addEventListener('scroll', scrollFunc);
window.addEventListener('scroll', scrollFunc);