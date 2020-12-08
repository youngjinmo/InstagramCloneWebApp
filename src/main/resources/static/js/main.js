const heart = document.querySelector('.heart_btn');
heart.addEventListener('click', function(){
    console.log('liked!');
    heart.classList.toggle('on');
});