
function scrollToContact(){
 document.getElementById('contact').scrollIntoView({behavior:'smooth'});
}
document.getElementById('contactForm').addEventListener('submit',function(e){
 e.preventDefault();
 document.getElementById('msg').innerText='Message sent successfully!';
 this.reset();
});
