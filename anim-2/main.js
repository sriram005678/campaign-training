function startAnim(){
    setTimeout(function(){
    document.getElementById("topline").style.width = '214px';
    document.getElementById("topline").style.transition = 'all 0.5s ease';

    document.getElementById("bottomline").style.width = '214px';
    document.getElementById("bottomline").style.transition = 'all 0.5s ease';
    },500);

    setTimeout(function(){
    document.getElementById("logo").style.transform = 'translateX(0px)';
    document.getElementById("logo").style.transition = 'all 0.5s ease-out';
    },1000);

    setTimeout(function(){
    document.getElementById("text-1").style.transform = 'translateX(0px)';
    document.getElementById("text-1").style.transition = 'all 0.5s ease-out';
    },1500);

    setTimeout(function(){
    document.getElementById("text-2").style.transform = 'translateX(0px)';
    document.getElementById("text-2").style.transition = 'all 0.5s ease-out';
    },2000);

    setTimeout(function(){
    document.getElementById("text-3").style.transform = 'translateY(0px)';
    document.getElementById("text-3").style.transition = 'all 0.5s ease-out';
    },2500);

    setTimeout(function(){
    document.getElementById("cta").style.transform = 'translateY(0px)';
    document.getElementById("cta").style.transition = 'all 0.5s ease-out';
    },3000);

    setTimeout(function(){
    document.getElementById("url").style.transform = 'translateX(0px)';
    document.getElementById("url").style.transition = 'all 0.5s ease-out';
    },3500);

    
}

window.onload = startAnim();