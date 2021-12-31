function startAnim(){
    var startTime = 0;

    var SM = new TimelineMax();

    startTime += 0.5;
    SM.to("#textbg", 0.5, { rotateX:0, ease:Power1.easeOut}, startTime);
    SM.to("#photo", 0.5, { rotateX:0, ease:Power1.easeOut}, startTime);

    startTime += 0.5;
    SM.to("#logo", 0.5, { scale:1.4, ease:Power2.easeOut}, startTime);
    startTime += 0.4;
    SM.to("#logo", 0.5, { scale:1, ease:Power2.easeOut}, startTime);

    startTime += 0.5;
    SM.to("#text-1", 0.5, { rotateX:0, ease:Power1.easeOut}, startTime);

    startTime += 0.5;
    SM.to("#text-2", 0.5, { x:0, opacity:1, ease:Power1.easeOut}, startTime);

    startTime += 0.5;
    SM.to("#text-3", 0.5, { x:0, opacity:1, ease:Power1.easeOut}, startTime);

    startTime += 0.5;
    SM.to("#text-4", 0.5, { y:0, opacity:1, ease:Power1.easeOut}, startTime);

    startTime += 0.5;
    SM.to("#circle", 0.5, { rotation:-360, opacity:1, ease:Power1.easeOut}, startTime);

    startTime += 0.5;
    SM.to("#bottom", 0.5, { scale:1.4, ease:Power2.easeOut}, startTime);
    startTime += 0.4;
    SM.to("#bottom", 0.5, { scale:1, ease:Power2.easeOut}, startTime);

    



}


window.onload = startAnim();