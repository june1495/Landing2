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
//LISTEN FOR A SUBMIT
document.querySelector(".contact-form").addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();

 // GET INPUT VALUES
let name = document.querySelector(".name").value;
let email = document.querySelector(".email").value;
let message = document.querySelector(".message").value;
document.querySelector(".contact-form").reset();
sendEmail(name, email, message);
}

// SEND EMAIL
function sendEmail(name, email, message) {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "francomelgar4@gmail.com",
        Password : "nivvhtjtnjbmhcfa",
        To : 'rodrigo0830@gmail.com',
        From : "francomelgar4@gmail.com",
        Subject : `${name} sent you a message`,
        Body : `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => alert("mail sent successfully"))
}
