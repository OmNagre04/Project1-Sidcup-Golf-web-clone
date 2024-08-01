var cursor = document.querySelector("#cursor")
var cursorBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x - 10 +"px"
    cursor.style.top = dets.y - 10 +"px"
    cursorBlur.style.left = dets.x - 225 +"px"
    cursorBlur.style.top = dets.y - 225 +"px"
})

var h4All = document.querySelectorAll("#nav h4")
h4All.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        // h4All.style.color = "black",
        cursor.style.scale = 4,
        cursor.style.border = "1px solid white",
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1,
        cursor.style.border = "0px solid #ace022",
        cursor.style.backgroundColor = "#ace022"
    })
})

var page4 = document.querySelectorAll("#page4 h2")
page4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        // h4All.style.color = "black",
        cursor.style.scale = 4,
        cursor.style.border = "1px solid white",
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1,
        cursor.style.border = "0px solid #ace022",
        cursor.style.backgroundColor = "#ace022"
    })
})

var butAll = document.querySelectorAll("#footer")
butAll.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale = 4,
        cursor.style.border = "1px solid white",
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1,
        cursor.style.border = "0px solid #ace022",
        cursor.style.backgroundColor = "#ace022"
    })
})
var foot = document.querySelectorAll("#nav button")
foot.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale = 4,
        cursor.style.border = "1px solid white",
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1,
        cursor.style.border = "0px solid #ace022",
        cursor.style.backgroundColor = "#ace022"
    })
})

gsap.to("#nav",{
    backgroundColor: "black",
    height: "110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -5%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor : "black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 60%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 65%",
        end:"top 60%",
        scrub:2
    }
})