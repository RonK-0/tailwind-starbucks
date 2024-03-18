const burgir = document.querySelector(".burger__menu");
const header__action = document.querySelector(".header__action");
burgir.addEventListener("click", ()=>{
    burgir.classList.toggle("open");
    header__action.classList.toggle("open");
});