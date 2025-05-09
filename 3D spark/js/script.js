// Работа с модальным окном
const modal = document.getElementById("modal");
const openModalBtn = document.querySelector(".open-modal");
const closeModalBtn = document.querySelector(".close");

// Открытие модального окна
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Закрытие модального окна
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Закрытие модального окна при клике вне его
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});