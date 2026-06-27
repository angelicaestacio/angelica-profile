/* ===========================
   LOADING SCREEN
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});

/* ===========================
   DARK MODE
=========================== */

const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = darkBtn.querySelector("i");

    if(document.body.classList.contains("dark")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }

    else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

/* ===========================
   PRODUCT FILTER
=========================== */

const filterButtons = document.querySelectorAll(".filter-btn");

const products = document.querySelectorAll(".product");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        products.forEach(product => {

            if(filter === "all"){

                product.style.display = "block";

            }

            else if(product.classList.contains(filter)){

                product.style.display = "block";

            }

            else{

                product.style.display = "none";

            }

        });

    });

});

/* ===========================
   IMAGE MODAL
=========================== */

const modal = document.getElementById("imageModal");

const modalImg = document.getElementById("modalImg");

const images = document.querySelectorAll(".certificate, .resume");

const closeBtn = document.querySelector(".close");

images.forEach(image => {

    image.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = image.src;

    });

});

closeBtn.onclick = () => {

    modal.style.display = "none";

};

modal.onclick = (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

};

/* ===========================
   SCROLL ANIMATION
=========================== */

const sections = document.querySelectorAll(".section");

const reveal = () => {

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

};

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

/* ===========================
   BUSINESS INQUIRY
=========================== */

const inquiryForm = document.querySelector(".inquiry-form");

if(inquiryForm){

    inquiryForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Thank you! Your business inquiry has been submitted.");

        inquiryForm.reset();

    });

}

/* ===========================
   ACTIVE NAVIGATION
=========================== */

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const top = section.offsetTop - 120;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});