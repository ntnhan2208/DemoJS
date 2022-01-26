const btnToggle = document.querySelector(".modal-btn");
const btnClose = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

btnToggle.addEventListener("click", function () {
    modal.classList.add("open-modal");
});

btnClose.addEventListener("click", function () {
    modal.classList.remove("open-modal");
});
