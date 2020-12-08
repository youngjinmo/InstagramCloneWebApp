const heart = document.querySelector('.heart_btn');
const header = document.querySelector('#header');
const sidebox = document.querySelector('.side_box');
const delegation = document.querySelector('.contents_box');

heart.addEventListener('click', function(){
    console.log('liked!');
    heart.classList.toggle('on');
});

function delegationFunc(e){
    let elem = e.target;
    console.log(e.target);

    while(!elem.getAttribute('data-name')){
        elem = elem.parentNode;
        if(elem.nodeName === 'BODY'){
            elem = null;
            return;
        }
    }

    if(elem.matches('[data-name="heartbeat"]')){
        console.log('좋아요!');

        $.ajax({
            type:'POST', 
            url:'data/like.json',
            data:{pk},
            dataType:'json',
            success:function(response){
                var likedCount = document.querySelector('#like-count-37');
                likedCount.innerHTML = '좋아요 '+response.like_count+'개';
            }
        });

    }
    else if(elem.matches('[data-name="bookmarked"]')){
        console.log('북마크!');
    }
    else if(elem.matches('[data-name="share"]')){
        console.log('공유!');
    }
    else if(elem.matches('[data-name="more"]')){
        console.log('더보기');
    }
    elem.classList.toggle('on');
}

function resizeFunc(){
    if(pageYOffset>=10){
        let calcWith = (window.innerWidth*0.5)+180;
        sidebox.style.left = calcWith+'px';
    }
}

function scrollFunc(){
    
    if(pageYOffset>=10){
        header.classList.add('on');
        if(sidebox){
            sidebox.classList.add('on');
        }
        resizeFunc();
    } else {
        header.classList.remove('on');
        if(sidebox){
            sidebox.classList.remove('on');
            sidebox.removeAttribute('style');    
        }
    }
}

setTimeout(function(){
    scrollTo(0,0)
},100);

delegation.addEventListener('click', delegationFunc);
window.addEventListener('scroll', scrollFunc);
window.addEventListener('scroll', scrollFunc);