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

// scroling Section start

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      console.log(`Scrolling to section: ${sectionId}`);
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`Section not found: ${sectionId}`);
    }
  }


  document.addEventListener('DOMContentLoaded', () => {

    const navLinks=document.querySelectorAll('.li');
    navLinks.forEach(link => {
        link.addEventListener("click",()=>{
            toggleNav();
        });
    });


    document.getElementById('nav-1').addEventListener('click', () => scrollToSection('ts'));
    document.getElementById('nav-2').addEventListener('click', () => scrollToSection('ov'));
    document.getElementById('nav-3').addEventListener('click', () => scrollToSection('cp'));
});

    // document.getElementById('nav-1').addEventListener('click',()=> scrollToSection('ts'));
    // document.getElementById('nav-2').addEventListener('click',()=> scrollToSection('ov'));
    // document.getElementById('nav-3').addEventListener('click',()=> scrollToSection('cp'));



// scroling Section end