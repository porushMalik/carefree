document.addEventListener('mousemove', function(e){
  gsap.to("#cursor",{
    left: e.x,
    top: e.y
  })
});