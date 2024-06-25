const bkchange = document.querySelector(".bkchange");

bkchange.addEventListener('click',function(){
    document.body.style.backgroundColor = 
    'rgb(' + Math.round(Math.random() * 255) +
    ','+Math.round(Math.random() * 255 )+
    ','+Math.round(Math.random() * 255) + ')'
})