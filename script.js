var tl = gsap.timeline();

tl.from("#nav", {
    opacity: 0, 
    y: -100, 
    duration:1,
    ease: "Expo.easeInOut",
  })
.from("#du",{
    y: 800,
    opacity: 0,
    ease : Expo.easeOut,
})
.from("#social",{
    y: 800,
    opacity: 0,
    // delay: -0.9,
    ease : Expo.easeInOut,
})
gsap.from("#logo",{
    y: 800,
    opacity: 0,
    delay: 1,
    duration : 1,
    ease : Expo.easeOut,
})
  
gsap.to("#pic1", {
   
    rotate: "360deg",   
    duration : 1,
})
// gsap.toFrom("#pic1", {
//     rotate: "360deg",
//     duration: 1,
//      x: -900});