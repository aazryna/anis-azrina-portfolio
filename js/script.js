function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// TEXT ANIMATION ON PROFILE START

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// TEXT ANIMATION ON PROFILE END

// ELEMENT APPEARS WHEN SCROLLING START

window.addEventListener('scroll', reveal);

            function reveal(){
                var reveals = document.querySelectorAll('.reveal');

                for(var i = 0; i < reveals.length; i++){

                    var windowheight = window.innerHeight;
                    var revealtop = reveals[i].getBoundingClientRect().top;
                    var revealpoint = 150;

                    if(revealtop < windowheight - revealpoint){
                        reveals[i].classList.add('active');
                    }
                    else{
                        reveals[i].classList.remove('active');
                    }
                }
            }

// ELEMENT APPEARS WHEN SCROLLING ENDS

// Function to close the modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none"; // Hide the modal
    var video = modal.querySelector('video');
    if (video) {
        video.pause(); // Pause the video
    }
}


// Function to open the modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

 // Get all radio buttons
 var radioButtons = document.querySelectorAll('input[type="radio"]');
 // Get all labels
 var labels = document.querySelectorAll('.top-content label');

 // Add event listener to each radio button
 radioButtons.forEach(function(radioButton, index) {
     radioButton.addEventListener('click', function() {
         // Reset color of all labels to default
         labels.forEach(function(label) {
             label.style.color = 'white'; // Change to your default color
         });

         // Change color of the clicked label to white
         labels[index].style.color = '#F7D85B'; // Change to your desired color
     });
 });



 const swiper = new Swiper('.sample-slider', {
        loop: true,                         //loop
        autoplay: {                         //autoplay
            delay: 2000,  
        },   
        pagination: {                       //pagination(dots)
            el: '.swiper-pagination',
        },
        navigation: {                       //navigation(arrows)
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })

    document.addEventListener('DOMContentLoaded', function () {
        var swiper6 = new Swiper('#myStyleSwiper6', {
            // Optional Swiper configuration options
            slidesPerView: 1,
            navigation: {
                nextEl: '.style-swiper-btn-next',
                prevEl: '.style-swiper-btn-prev',
            },
            pagination: {
                el: '.style-swiper-pagination',
                clickable: true,
            },
        });
    });
    

