const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");


navToggle.addEventListener("click", () => {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open');
    })
})

window.onload = () => {
    console.log("Hi, find me on github.com/hphuocthanh. Have a chat with me at fb.com/hphuocthanh.")
}