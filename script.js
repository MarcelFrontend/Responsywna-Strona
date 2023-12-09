console.clear();

const list = document.querySelector(".links"),
    menuBars = document.querySelector(".menu"),
    closeMenu = document.querySelector(".close");

menuBars.addEventListener("click", () => {
    list.classList.toggle("open");        
});

closeMenu.addEventListener("click", () => {
    list.classList.toggle("open");
});