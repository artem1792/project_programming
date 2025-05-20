const btnOpen = document.querySelector(".btn--open");
const btnClose = document.querySelector(".btn--close");
const modal = document.querySelector(".modal");

const modalViewHandler = () => {
    modal.classList.toggle("modal--open");
}
const modalCloseHandler = () => {
    modal.classList.toggle("modal--close");
}

btnOpen.addEventListener("click", modalViewHandler);
btnClose.addEventListener("click", modalCloseHandler);
modal.addEventListener("click", modalViewHandler);