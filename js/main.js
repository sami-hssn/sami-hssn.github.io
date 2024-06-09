$( document ).ready( function() {

    const contactForm = document.getElementById('contact-box');

    const contactSuccess = document.getElementById('contact-success')

    document.getElementById('contact-btn').addEventListener("click", function( event ){
        
        event.preventDefault();

        contactForm.style.opacity = "0"

        setTimeout(function(){
            contactSuccess.style.opacity = "1"
            contactSuccess.style.pointerEvents = "auto"
        }, 500)

    });

});