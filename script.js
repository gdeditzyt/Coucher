let navMore = document.querySelector("#nav-more");
let count = 1;

navMore.addEventListener("click", ()=> {
    if (count) {
        document.querySelector("#background-blur").style.opacity = "1";
        document.querySelector("#nav-part2").style.transform = "translate(-50%, -50%)";
        gsap.from("#nav-part2 h3", {
            x:-100,
            opacity:0,
            stagger:0.2,
        })
        console.log("ecicuted");
        count--;
    } else {
        document.querySelector("#background-blur").style.opacity = "0";
        document.querySelector("#nav-part2").style.transform = "translate(-200%, -50%)";
        count++;
    }
})





let tl = gsap.timeline();
tl.from("#nav", {
    opacity:0,
    duration:0.5
})
tl.from("#nav h1, #nav h3, #nav h2, #nav p, #nav-more", {
    y:-100,
    duration:0.8,
    opacity:0,
    stagger:0.2
})
tl.from("#left h1, #left", {
    x:-200,
    duration:0.5,
    opacity:0,
    stagger:0.2
})
tl.from("#right img", {
    scale:0.5,
    duration:0.5,
    opacity:0
})
tl.from("#right h3", {
    opacity:0,
    y:30,
    duration:0.3,
    stagger:0.1
})
tl.from("#right-input", {
    width: 0,
    opacity:0,
    duration:0.5
})
tl.from("#right p", {
    rotate: 180,
    duration:0.4,
    transition: "cubic-bezier(.84,-0.41,0,2.07)",
})

tl.from("#footer-play p, #footer-play-text div, #footer-play button", {
    x:-100,
    opacity:0,
    stagger:0.2,
})
tl.from("#footer-cards div", {
    opacity:0,
    scale:0,
    duration:0.5,
    stagger:0.2,
})
tl.from("#footer-cards p, #footer-cards i, #footer-cards h3, #footer-cards h3 span",{
    height:0,
    duration:0.5,
    stagger:0.2,
})