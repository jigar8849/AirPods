// toggle menu start
const navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");
navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
	navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
	navMenu.classList.remove("show-menu");
});

// toggle menu end



// change background header end 

function scrollHeader(){
    const header = document.querySelector('header');

    if(this.scrollY >= 50){
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header');
    }
}
window.addEventListener("scroll", scrollHeader); 

// change background header end



// nav scroll S
document.addEventListener('DOMContentLoaded', function () {
    // Get the navigation links and sections
    const navTechSpecs = document.getElementById('nav-1');  // Tech Specs link
    const navOverview = document.getElementById('nav-2');   // Overview link
    const navCompare = document.getElementById('nav-3');    // Compare link
    
    const techSpecsSection = document.getElementById('ts');  // Tech Specs section
    const overviewSection = document.getElementById('ov');   // Overview section
    const compareSection = document.getElementById('cp');    // Compare section

    // Function to smooth scroll to a section
    function smoothScrollToSection(section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // Add click event listeners for smooth scrolling
    navTechSpecs.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        smoothScrollToSection(techSpecsSection); // Scroll to Tech Specs
    });

    navOverview.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        smoothScrollToSection(overviewSection); // Scroll to Overview
    });

    navCompare.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        smoothScrollToSection(compareSection); // Scroll to Compare
    });
});

// nav scroll E