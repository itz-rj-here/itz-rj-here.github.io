const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});

const images = [
    'images/home.png',
    'images/home2.png',
    'images/home3.png'
];

let currentImageIndex = 0;
const imgElement = document.querySelector('.home-img .img-item img');

const changeImage = () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgElement.classList.add('fade-out');
    setTimeout(() => {
        imgElement.src = images[currentImageIndex];
        imgElement.classList.remove('fade-out');
        imgElement.classList.add('fade-in');
        setTimeout(() => {
            imgElement.classList.remove('fade-in');
        }, 500); // Match this duration with the CSS animation duration
    }, 500); // Match this duration with the CSS animation duration
};

setInterval(changeImage, 5000);

// const resumeBtns = document.querySelectorAll('.resume-btn');

// resumeBtns.forEach((btn, idx) => {
//     btn.addEventListener('click', () => {
//         const resumeDetails = document.querySelectorAll('.resume-detail');

//         resumeBtns.forEach(btn => {
//             btn.classList.remove('active');
//         });
//         btn.classList.add('active');

//         resumeDetails.forEach(detail => {
//             detail.classList.remove('active');
//         });
//         resumeDetails[idx].classList.add('active');
//     });
// });

const letsTalkBtn = document.querySelector('#lets-talk-btn');
const contactSection = document.querySelector('#contact');

letsTalkBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    activePage(); // Reset the active state of other sections
    contactSection.classList.add('active'); // Make the contact section active
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

// arrowRight.addEventListener('click', () => {
//     if (index < 1) {
//         index++;
//         arrowLeft.classList.remove('disabled');
//     }
//     else {
//         index = 2;
//         arrowRight.classList.add('disabled');
//     }

//     activePortfolio();
// });

// arrowLeft.addEventListener('click', () => {
//     if (index > 1) {
//         index--;
//         arrowRight.classList.remove('disabled');
//     }
//     else {
//         index = 0;
//         arrowLeft.classList.add('disabled');
//     }

//     activePortfolio();
// });

arrowRight.addEventListener('click', () => {
    if (index < 1) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    if (index === 1) {
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    if (index === 0) {
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});