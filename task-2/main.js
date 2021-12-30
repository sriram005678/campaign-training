function startAnim(){
setTimeout(function(){
        document.getElementById("shape1").style.transform = 'translateX(0)';
        document.getElementById("shape1").style.transition = 'all 0.5s ease-OUT';
    }, 500);

setTimeout(function(){
        document.getElementById("photo").style.transform = 'translateX(0)';
        document.getElementById("photo").style.transition = 'all 0.5s ease-OUT';
    }, 700);

setTimeout(function(){
        document.getElementById("shape2").style.transform = 'translateX(0)';
        document.getElementById("shape2").style.transition = 'all 0.5s ease-OUT';
    }, 1000);

setTimeout(function(){
    document.getElementById("logo").style.transform = 'scale(1)';
    document.getElementById("logo").style.transition = 'all 0.5s ease';
}, 1500);

setTimeout(function(){
    document.getElementById("text-1").style.transform = 'translateY(0)';
    document.getElementById("text-1").style.opacity = '1';
    document.getElementById("text-1").style.transition = 'all 0.5s ease-OUT';
}, 2000);

setTimeout(function(){
    document.getElementById("text-2").style.opacity = '1';
    document.getElementById("text-2").style.transition = 'all 0.5s ease-OUT';
}, 2500);

setTimeout(function(){
    document.getElementById("text-3a").style.opacity = '1';
    document.getElementById("text-3a").style.transition = 'all 0.5s ease-OUT';
}, 3000);

setTimeout(function(){
    document.getElementById("text-3b").style.opacity = '1';
    document.getElementById("text-3b").style.transition = 'all 0.5s ease-OUT';
}, 3500);

setTimeout(function(){
    document.getElementById("bottom").style.transform = 'scale(1)';
    document.getElementById("bottom").style.opacity = '1';
    document.getElementById("bottom").style.transition = 'all 0.5s ease-OUT';
}, 4000);




}

window.onload = startAnim();