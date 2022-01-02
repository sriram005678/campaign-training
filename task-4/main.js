function startAnim(){

    var startTime = 0;

    var SM = new TimelineMax();

    startTime += 0.5;
    SM.to("#shape1", 0.5, { x:0, y:0, ease:Power1.easeOut}, startTime);

    startTime += 0.2;
    SM.to("#img1", 0.5, { x:0, y:0, ease:Power1.easeOut}, startTime);

    startTime += 0.4;
    SM.to("#text-1", 0.5, { x:"40px", opacity:1, ease:Power1.easeOut}, startTime);
    startTime += 0.4;
    SM.to("#text-1", 0.5, { x:0, opacity:1, ease:Power1.easeOut}, startTime);


    startTime += 0.3;
    SM.to("#text-2-1", 0.5, { x:"20px", opacity:1, ease:Power1.easeOut}, startTime);
    startTime += 0.4;
    SM.to("#text-2-1", 0.5, { x:0, opacity:1, ease:Power1.easeOut}, startTime);

    startTime += 0.1;
    SM.to("#text-2-2", 0.5, { x:"20px", opacity:1, ease:Power1.easeOut}, startTime);
    startTime += 0.4;
    SM.to("#text-2-2", 0.5, { x:0, opacity:1, ease:Power1.easeOut}, startTime);

    startTime += 0.3;
    SM.to("#line", 0.5, { x:0, width:"100px", opacity:1, ease:Power1.easeOut}, startTime);
    startTime += 0.4;
    SM.to("#line", 0.5, { x:0, width:"28px", opacity:1, ease:Power1.easeOut}, startTime);
    

    startTime += 0.5;
    SM.to("#logo", 0.5, { y:0, ease:Power2.easeOut}, startTime);
    
    startTime += 0.5;
    SM.to("#text-3", 0.5, { opacity:1, ease:Power0.easeOut}, startTime);


    startTime += 0.5;
    SM.to("#shape2", 0.5, { x:0, y:0, opacity:0.5, ease:Power1.easeOut}, startTime);
    SM.to("#text-4", 0.5, { rotate:"-23deg", opacity:0.7, ease:Power1.easeOut}, startTime);

    startTime += 0.5;
    SM.to("#cta", 0.5, { x:0, opacity:1, ease:Power0.easeOut}, startTime);
    SM.to("#url", 0.5, { x:0, opacity:1, ease:Power1.easeOut}, startTime);


    // startTime += 0.5;
    // SM.to("#shape2", 0.5, { x:0, y:0, opacity:0.5, ease:Power1.easeOut}, startTime);
    // SM.to("#text-4", 0.5, { rotate:"-23deg", opacity:0.7, ease:Power1.easeOut}, startTime);

    startTime += 0.5;
    SM.to("#text-4", 0.5, { opacity:0, ease:Power1.easeOut}, startTime);

    startTime += 0.5;
    SM.to("#img2", 0.5, { x:0, y:0, ease:Power1.easeOut}, startTime);
    SM.to("#shape2", 0.5, { x:0, y:0, opacity:0.5, ease:Power1.easeOut}, startTime);
    SM.to("#text-4-1", 0.5, { rotate:"-23deg", opacity:0.7, ease:Power1.easeOut}, startTime);

    startTime += 0.5;
    SM.to("#text-4-1", 0.5, { opacity:0, ease:Power1.easeOut}, startTime);

    startTime += 0.5;
    SM.to("#img3, #text-4-2", 0.5, { x:0, y:0, ease:Power1.easeOut}, startTime);
    SM.to("#shape2", 0.5, { x:0, y:0, opacity:0.5, ease:Power1.easeOut}, startTime);
    SM.to("#text-4-2", 0.5, { rotate:"-23deg", opacity:0.7, ease:Power1.easeOut}, startTime);

    


}


window.onload = startAnim();