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