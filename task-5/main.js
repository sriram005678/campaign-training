function startAnim(){

    var startTime = 0;

    var SM = new TimelineMax();

    startTime += 0.5;
    SM.to("#roadholder", 6, { y:0, ease:Linear.easeNone}, startTime);
    SM.to("#car", 1, { x:10, y:-50, ease:Linear.easeNone}, startTime);
    SM.to("#car", 0.6, { x:0, ease:Power1.easeOut, delay:5.5}, startTime);

    startTime += 1.5;
    SM.to(["#headtrack, #rightsign"], 0.5, { scale:1,x:0, y:0, opacity:1, ease:Power1.easeOut}, startTime);
    SM.to(".dottinner", 0.5, { y:0, opacity:1, ease:Power1.easeOut}, startTime);

    startTime += 0.5;
    SM.to("#street_lines", 3.5, { y:0, ease:Linear.easeNone}, startTime);
    SM.to("#deerholder", 2, { scale:1.25, opacity:1, y:25, x:-80, ease:Linear.easeNone}, startTime);
    SM.to("#joggerholder", 2, { scale:1.3, opacity:1, y:25, x:50, delay:0.5, ease:Linear.easeNone}, startTime);

    startTime += 0.1;
    SM.to("#deerborder", 0.2, { opacity:1, scale:1, ease:Power1.easeNone}, startTime);

    startTime += .5;
    SM.to("headtrack3", 0.2, { opacity:1, ease:Power1.easeOut}, startTime);
    SM.to("#tracker2", 0.2, { scale:1, ease:Power1.easeOut}, startTime);
    startTime += .6;

    SM.to("headtrack3", 0.2, { opacity:0, ease:Power1.easeOut}, startTime);
    SM.to("#tracker2", 0.2, { scale:0, ease:Power1.easeOut}, startTime);

    startTime += .2;
    SM.to("headtrack1", 0.2, { opacity:1, ease:Power1.easeOut}, startTime);
    SM.to("#tracker1", 0.2, { scale:1, ease:Power1.easeOut}, startTime);

    startTime += 1.5;
    SM.to(["#headtrack"], 0.5, { scale:0.3, x:120, y:140, opacity:0, ease:Power1.easeOut}, startTime);
    SM.to(["#rightsign"], 0.5, { scale:0.3, x:-10, y:220, opacity:0, ease:Power1.easeOut}, startTime);
    SM.to(".dottinner", 0.5, { y:"110%", ease:Power1.easeOut}, startTime);

    startTime += 0.5;
    SM.to("#word1", 0.5, { opacity:1, ease:Power1.easeOut}, startTime);

    startTime += 0.4;
    SM.to("#word2", 0.5, { opacity:1, ease:Power1.easeOut}, startTime);

    startTime += 0.4;
    SM.to("#word6", 0.5, { opacity:1, ease:Power1.easeOut}, startTime);

    startTime += 0.4;
    SM.to("#word3", 0.5, { opacity:1, ease:Power1.easeOut}, startTime);

    startTime += 0.4;
    SM.to("#word4", 0.5, { opacity:1, ease:Power1.easeOut}, startTime);

    startTime += 0.4;
    SM.to("#word5", 0.5, { opacity:1, ease:Power1.easeOut}, startTime);

    startTime += 0.4;
    SM.to("#word7", 0.5, { opacity:1, ease:Power1.easeOut}, startTime);

    startTime += 0.5;
    SM.to("#imageFront", 0.5, { y:0, opacity:1, ease:Power1.easeOut}, startTime);

    startTime += 0.3;
    SM.to("#imageFront1", 0.5, { opacity:1, ease:Power2.easeOut}, startTime);

    startTime += 0.3;
    SM.to("#imageFront2", 0.5, { opacity:1, ease:Power2.easeOut}, startTime);

    startTime += 0.3;
    SM.to("#imageFront3", 0.5, { opacity:1, ease:Power2.easeOut}, startTime);

    startTime += 0.3;
    SM.to("#imageFront4", 0.5, { opacity:1, ease:Power2.easeOut}, startTime);

    startTime += 0.3;
    SM.to("#imageFront5", 0.5, { opacity:1, ease:Power2.easeOut}, startTime);


    startTime += 1;
    SM.to("#imageFront6", 0.5, { opacity:1, ease:Power1.easeOut}, startTime);













}


window.onload = startAnim();