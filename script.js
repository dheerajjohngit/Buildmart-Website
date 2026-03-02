
/* SLIDING INDICATOR */

const links=document.querySelectorAll(".menu a");
const indicator=document.getElementById("indicator");

function moveIndicator(el){

indicator.style.width=el.offsetWidth+"px";
indicator.style.left=el.offsetLeft+"px";
indicator.style.top=el.offsetTop+"px";

}

links.forEach(link=>{

link.addEventListener("click",()=>{

document.querySelector(".menu a.active")?.classList.remove("active");

link.classList.add("active");

moveIndicator(link);

});

});

/* INIT */
window.onload=()=>{
moveIndicator(document.querySelector(".menu a.active"));
};


/* SCROLL EFFECT */
window.addEventListener("scroll",()=>{

document.getElementById("navbar").classList.toggle("scrolled",window.scrollY>50);

});


/* MOBILE MENU */
function toggleMenu(){

document.getElementById("menu").classList.toggle("active");

}


/* DARK MODE */
function toggleDark(){

document.body.classList.toggle("dark");

}
document.querySelector(".quote-btn").addEventListener("click",function(e){

    let ripple=document.createElement("span");

    ripple.style.left=e.offsetX+"px";
    ripple.style.top=e.offsetY+"px";

    this.appendChild(ripple);

    setTimeout(()=>{
        ripple.remove();
    },600);

});


/* LOAD SAVED THEME */
if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");
    document.querySelector(".toggle").classList.replace("bi-moon","bi-sun");

}

/* TOGGLE + SAVE */
function toggleDark(){

    document.body.classList.toggle("dark");

    const icon=document.querySelector(".toggle");

    if(document.body.classList.contains("dark")){

        icon.classList.replace("bi-moon","bi-sun");
        localStorage.setItem("theme","dark");

    }else{

        icon.classList.replace("bi-sun","bi-moon");
        localStorage.setItem("theme","light");

    }

}




function toggleDark(){

    document.body.classList.toggle("dark");

    const icon=document.querySelector(".toggle");

    if(document.body.classList.contains("dark")){

        icon.classList.remove("bi-moon");
        icon.classList.add("bi-sun");

    }
    else{

        icon.classList.remove("bi-sun");
        icon.classList.add("bi-moon");

    }

}

/* LOAD SAVED THEME */
if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");
    document.querySelector(".toggle").classList.replace("bi-moon","bi-sun");

}

/* TOGGLE + SAVE */
function toggleDark(){

    document.body.classList.toggle("dark");

    const icon=document.querySelector(".toggle");

    if(document.body.classList.contains("dark")){

        icon.classList.replace("bi-moon","bi-sun");
        localStorage.setItem("theme","dark");

    }else{

        icon.classList.replace("bi-sun","bi-moon");
        localStorage.setItem("theme","light");

    }

}




/* NAVIGATE TO CATEGORY */
function goToProducts(category){

    window.location.href = "products.html?category=" + category;

}

/* NAVIGATE TO ALL PRODUCTS */
function goToAllProducts(){

    window.location.href = "products.html";

}


/* NAVIGATION */
function goToProducts(category){

    window.location.href="products.html?category="+category;

}

function goToAllProducts(){

    window.location.href="products.html";

}


/* SCROLL REVEAL ANIMATION */

function reveal(){

    const reveals=document.querySelectorAll(".reveal");

    reveals.forEach(element=>{

        const windowHeight=window.innerHeight;
        const elementTop=element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);




/* SCROLL REVEAL */

function reveal(){

    document.querySelectorAll(".reveal").forEach(el=>{

        const windowHeight=window.innerHeight;
        const elementTop=el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            el.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);



/* 3D TILT EFFECT */

document.querySelectorAll(".card-circle").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        const centerX=rect.width/2;
        const centerY=rect.height/2;

        const rotateX=(y-centerY)/10;
        const rotateY=(centerX-x)/10;

        card.style.transform=
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="rotateX(0) rotateY(0) scale(1)";

    });

});


/* NAVIGATION */

function goToProducts(category){

    window.location.href="products.html?category="+category;

}

function goToAllProducts(){

    window.location.href="products.html";

}



/* SCROLL REVEAL */

function reveal(){

    document.querySelectorAll(".reveal").forEach(el=>{

        if(el.getBoundingClientRect().top < window.innerHeight-100){

            el.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);



/* TRUE 3D EFFECT */

document.querySelectorAll(".category-card").forEach(card=>{

    const inner=card.querySelector(".card-inner");

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        const centerX=rect.width/2;
        const centerY=rect.height/2;

        const rotateX=(y-centerY)/8;
        const rotateY=(centerX-x)/8;

        inner.style.transform=
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave",()=>{

        inner.style.transform="rotateX(0deg) rotateY(0deg)";

    });

});





function goToProducts(category){

    window.location.href="products.html?category="+category;

}

function goToAllProducts(){

    window.location.href="products.html";

}

function goToProducts(category){

    window.location.href="products.html?category="+category;

}

function goToAllProducts(){

    window.location.href="products.html";

}






/* Footer year auto update */

const footerYear = document.querySelector(".footer-bottom");

if(footerYear){

    footerYear.innerHTML =
    `© ${new Date().getFullYear()} BuildMart. All rights reserved.`;

}



















function revealOnScroll(){

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

/* Run once on load */
revealOnScroll();













function toggleDark(){

    document.body.classList.toggle("dark");

    const icon = document.querySelector(".toggle");

    if(document.body.classList.contains("dark")){

        icon.classList.remove("bi-moon");
        icon.classList.add("bi-sun");

        localStorage.setItem("theme","dark");

    }
    else{

        icon.classList.remove("bi-sun");
        icon.classList.add("bi-moon");

        localStorage.setItem("theme","light");

    }

}













window.onload = function(){

    const theme = localStorage.getItem("theme");

    const icon = document.querySelector(".toggle");

    if(theme === "dark"){

        document.body.classList.add("dark");

        icon.classList.remove("bi-moon");
        icon.classList.add("bi-sun");

    }

};







































// AUTO ACTIVE NAVBAR LINK
document.addEventListener("DOMContentLoaded", function(){

    const links = document.querySelectorAll(".menu a");
    const indicator = document.getElementById("indicator");

    // get current page filename
    let currentPage = window.location.pathname.split("/").pop();

    // if empty → index.html
    if(currentPage === ""){
        currentPage = "index.html";
    }

    links.forEach(link => {

        const linkPage = link.getAttribute("href");

        if(linkPage === currentPage){

            link.classList.add("active");

            // move indicator
            indicator.style.width = link.offsetWidth + "px";
            indicator.style.left = link.offsetLeft + "px";
            indicator.style.top = link.offsetTop + "px";
        }

    });

});













// PERFECT ACTIVE NAVBAR DETECTION
document.addEventListener("DOMContentLoaded", function(){

    const links = document.querySelectorAll(".menu a");
    const indicator = document.getElementById("indicator");

    // Get current page name correctly
    let currentPage = window.location.pathname;

    // extract filename only
    currentPage = currentPage.substring(currentPage.lastIndexOf("/") + 1);

    // default to index.html if empty
    if(currentPage === ""){
        currentPage = "index.html";
    }

    links.forEach(link => {

        let linkPage = link.getAttribute("href");

        // remove ./ if exists
        linkPage = linkPage.replace("./", "");

        if(linkPage === currentPage){

            link.classList.add("active");

            // move indicator exactly under active link
            if(indicator){
                indicator.style.width = link.offsetWidth + "px";
                indicator.style.left = link.offsetLeft + "px";
                indicator.style.top = link.offsetTop + "px";
            }

        }

    });

});













/* PAGE TRANSITION */
document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e) {

        if (this.href && !this.href.includes("#")) {

            e.preventDefault();

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location = this.href;
            }, 400);
        }
    });
});































/* PAGE TRANSITION */
document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e) {

        if (this.href && !this.href.includes("#")) {

            e.preventDefault();

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location = this.href;
            }, 400);
        }
    });
});

















// PARTICLE GENERATOR

const particlesContainer = document.getElementById("particles");

function createParticle(){

    const particle = document.createElement("div");

    particle.classList.add("particle");

    // random size
    const size = Math.random() * 4 + 2;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    // random position
    particle.style.left = Math.random() * 100 + "vw";

    // random animation duration
    particle.style.animationDuration =
        (Math.random() * 10 + 8) + "s";

    particlesContainer.appendChild(particle);

    // remove after animation
    setTimeout(()=>{
        particle.remove();
    }, 18000);

}

// create particles continuously
setInterval(createParticle, 300);


















// MAGNETIC BUTTON EFFECT
document.querySelectorAll(".magnetic-btn").forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width/2;
        const y = e.clientY - rect.top - rect.height/2;

        button.style.transform =
            `translate(${x*0.2}px, ${y*0.2}px)`;

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform = "translate(0,0)";

    });

});

















// CARD TILT EFFECT
document.querySelectorAll(".tilt-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width/2;
        const centerY = rect.height/2;

        const rotateX = -(y-centerY)/10;
        const rotateY = (x-centerX)/10;

        card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = "rotateX(0) rotateY(0)";

    });

});

























// REVEAL ANIMATION
const revealElements =
document.querySelectorAll(
".reveal-left, .reveal-right, .reveal-scale, .reveal-rotate"
);

function reveal(){

    revealElements.forEach(el=>{

        const windowHeight = window.innerHeight;
        const elementTop =
        el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            el.classList.add("reveal-active");

        }

    });

}

window.addEventListener("scroll", reveal);























// COUNTER ANIMATION WHEN SCROLLED INTO VIEW

const counters = document.querySelectorAll(".counter");

let started = false;

function startCounter(){

    if(started) return;

    const section =
    document.querySelector(".stats-section");

    const sectionTop =
    section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){

        counters.forEach(counter=>{

            const target =
            +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 150;

            function update(){

                count += speed;

                if(count < target){

                    counter.innerText =
                    Math.floor(count) + "+";

                    requestAnimationFrame(update);

                }
                else{

                    counter.innerText =
                    target + "+";

                }

            }

            update();

        });

        started = true;

    }

}

window.addEventListener("scroll", startCounter);