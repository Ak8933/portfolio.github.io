/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ====================*/
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin:'right' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text',{
    strings:['Web Developer','Competitive Programmer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


// mail sending functionality

document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("Ra9PBqJoPdoXT9_Ce"); // Replace with your EmailJS USER_ID
  
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const fullName = document.getElementById("full-name").value;
      const email = document.getElementById("email").value;
      const mobile = document.getElementById("mobile").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
  
      const templateParams = {
        to_name: "Your Name", // Replace with the recipient's name
        from_name: fullName,
        from_email: email,
        mobile: mobile,
        subject: subject,
        message: message,
      };
  
      emailjs.send("service_n7csq3q", "template_qtfir3g", templateParams)
        .then(function(response) {
          console.log("Email sent:", response);
          alert("Message sent successfully!");
          form.reset();
        })
        .catch(function(error) {
          console.error("Email error:", error);
          alert("An error occurred while sending the message. Please try again later.");
          form.reset();
        });
    });
  });
  
