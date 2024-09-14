let themeBtn = document.querySelector('#theme-btn');
let body = document.body;
let whiteSection = document.querySelector('.white');
let footSection = document.querySelector('.foot');
let footImages = document.querySelectorAll('.foot img');
let saveIcon = document.getElementById('ld');
let coursesColor = document.querySelector('.courses');
let studentsColor = document.querySelector('.students');
let iconColor = document.querySelectorAll('.prof .stu');
let iconColor2 = document.querySelectorAll('.prof1 .stu');
let iconColor3 = document.querySelectorAll('.main_prof .prof2');
let cardsColor = document.querySelector('.cards');

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-moon');
    themeBtn.classList.toggle('fa-sun');
    
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        // Set dark mode image sources
        footImages[0].src = "wdot.jpg";
        footImages[1].src = "wmute.jpg";
        footImages[2].src = "wvdo2.jpg";
        footImages[3].src = "wmain.jpg";
        footImages[4].src = "wrec.jpg";
        footImages[5].src = "wbye.jpg";
        footImages[6].src = "wslide.jpg";

        iconColor[0].src = "wvdo.jpg";
        iconColor[1].src = "wmte.jpg";
        iconColor[2].src = "wvdo1.jpg";
        iconColor[3].src = "wmte.jpg";
        iconColor[4].src = "wvdo.jpg";
        iconColor[5].src = "wmte.jpg";
        iconColor[6].src = "wvdo1.jpg";
        iconColor[7].src = "wrmte.jpg";
        iconColor[8].src = "wvdo.jpg";
        iconColor[9].src = "wrmte.jpg";
        iconColor[10].src = "wvdo1.jpg";
        iconColor[11].src = "wmte.jpg";

        iconColor2[0].src = "wvdo.jpg";
        iconColor2[1].src = "wmte.jpg";

        iconColor3[0].src = "wvdo1.jpg";
        iconColor3[1].src = "wmte.jpg";

        // Reset white section background color to original dark mode color
        whiteSection.style.backgroundColor = "rgb(245, 245, 245)";
        footSection.style.backgroundColor = "rgb(245, 245, 245)";
        cardsColor.style.background = "black";
        cardsColor.style.boxShadow = "0 0 20px white";

        
        // Apply box shadow and border with white color
        footImages.forEach(img => {
            img.style.boxShadow = "0 0 20px black";
        });
        saveIcon.style.color = "rgb(38, 36, 36)";
        coursesColor.style.border = "3px solid black";
        studentsColor.style.border = "3px solid black";
        coursesColor.style.boxShadow = "0 0 20px black";
        studentsColor.style.boxShadow = "0 0 20px black";

        // Change body background color to black
        body.style.backgroundColor = "white";
    } else {
        // Set light mode image sources
        footImages[0].src = "dot.jpg";
        footImages[1].src = "mute1.jpg";
        footImages[2].src = "vedio.jpg";
        footImages[3].src = "mike.jpg";
        footImages[4].src = "rec.jpg";
        footImages[5].src = "bye.jpg";
        footImages[6].src = "slides.jpg";

        iconColor[0].src = "vdo.jpg";
        iconColor[1].src = "mte.jpg";
        iconColor[2].src = "rvdo.jpg";
        iconColor[3].src = "mte.jpg";
        iconColor[4].src = "vdo.jpg";
        iconColor[5].src = "mte.jpg";
        iconColor[6].src = "rvdo.jpg";
        iconColor[7].src = "rmute.jpg";
        iconColor[8].src = "vdo.jpg";
        iconColor[9].src = "rmute.jpg";
        iconColor[10].src = "rvdo.jpg";
        iconColor[11].src = "mte.jpg";

        iconColor2[0].src = "vdo.jpg";
        iconColor2[1].src = "mte.jpg";

        iconColor3[0].src = "rvdo.jpg";
        iconColor3[1].src = "mte.jpg";

        // Change white section background color to grey for light mode
        whiteSection.style.backgroundColor = "rgb(38,36,36)";
        footSection.style.backgroundColor = "rgb(38,36,36)";
        cardsColor.style.background = "white";
        cardsColor.style.boxShadow = "0 0 20px black";

        
        // Apply box shadow and border with black color
        footImages.forEach(img => {
            img.style.boxShadow = "0 0 20px white";
        });
        saveIcon.style.color = "rgb(245, 245, 245)";
        coursesColor.style.border = "3px solid white";
        studentsColor.style.border = "3px solid white";
        coursesColor.style.boxShadow = "0 0 20px white";
        studentsColor.style.boxShadow = "0 0 20px white";

        // Change body background color to white
        body.style.backgroundColor = "black";
    }
};

var swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 400,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 1000,  // Set autoplay delay to 5000 milliseconds (5 seconds)
        disableOnInteraction: false,
    },
    on: {
        slideChange: function () {
            // Reset filter for all images
            document.querySelectorAll('.cards img').forEach(img => img.classList.remove('active'));

            // Apply filter only to the active image
            var activeSlide = this.slides[this.activeIndex];
            var activeImg = activeSlide.querySelector('img');
            activeImg.classList.add('active');
        },
    },
});

function toggleCalculatorPopup() {
    var calculatorPopup = document.getElementById('calculatorPopup');
    calculatorPopup.style.display = (calculatorPopup.style.display === 'none' || calculatorPopup.style.display === '') ? 'block' : 'none';
}
