var rect = document.querySelector("#center");

rect.addEventListener("mousemove",function(dets){
    var rectLocation = rect.getBoundingClientRect();
    var locat = dets.x - rectLocation.left;

    if(locat < rectLocation.width/2){
        var redcolor = gsap.utils.mapRange(0,rectLocation.width/2,255,0,locat);
        gsap.to(rect,{
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease:Power4,
        });
    }
    else{
        var bluecolor = gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,locat);
        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease:Power4,
        });
    }
})

    rect.addEventListener("mouseleave",function(){
        gsap.to(rect,{
            backgroundColor:"white"
        })
    })