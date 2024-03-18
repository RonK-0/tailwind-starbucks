const burgir = document.querySelector(".burger__menu");
const headerA = document.querySelector(".header__action");
burgir.addEventListener("click", ()=>{
    burgir.classList.toggle("open");
    headerA.classList.toggle("open");
});