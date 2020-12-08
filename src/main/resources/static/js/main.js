const heart = document.querySelector('.heart_btn');
const header = document.querySelector('#header');

heart.addEventListener('click', function(){
    console.log('liked!');
    heart.classList.toggle('on');
});

function scrollFunc(){
    console.log(pageYOffset);
    if(pageYOffset>=10){
        header.classList.add('on');
    } else {
        header.classList.remove('on');
    }
}
window.addEventListener('scroll', scrollFunc);