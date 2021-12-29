function startAnim(){

    setTimeout(function(){
        document.getElementById("logo").style.opacity = '1';
        document.getElementById("logo").style.transition = 'all 0.5s ease';
    }, 500)

    setTimeout(function(){
        document.getElementById("text-1").style.opacity = '1';
        document.getElementById("text-1").style.transition = 'all 0.5s ease';
    }, 1000)

    setTimeout(function(){
        document.getElementById("text-2").style.opacity = '1';
        document.getElementById("text-2").style.transition = 'all 0.5s ease';
    }, 1500)

    setTimeout(function(){
        document.getElementById("text-3").style.opacity = '1';
        document.getElementById("text-3").style.transition = 'all 0.5s ease';
    }, 2000)

    setTimeout(function(){
        document.getElementById("cta").style.opacity = '1';
        document.getElementById("cta").style.transition = 'all 0.5s ease';
    }, 2500)

    setTimeout(function(){
        document.getElementById("url").style.opacity = '1';
        document.getElementById("url").style.transition = 'all 0.5s ease';
    }, 3000)
}



Window.onload = startAnim();