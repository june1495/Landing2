window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
function toggle(){
    var header = document.querySelector("header");
    header.classList.toggle("active");

}
// Scroll Reveal
window.sr = ScrollReveal();


sr.reveal('.content', {
    duration: 2000,
    origin: 'left',
    distance:'-100px'
});